class BinaryWriter {
    constructor(size = 0x10000) {
        this.buffer = new ArrayBuffer(size);
        this.view = new DataView(this.buffer);
        this.offset = 0;
        this.encoder = new TextEncoder();
    }

    u8(v) {
        this.view.setUint8(this.offset++, v);
    }

    s8(v) {
        this.view.setInt8(this.offset++, v);
    }

    u16(v) {
        this.view.setUint16(this.offset, v, true);
        this.offset += 2;
    }

    s16(v) {
        this.view.setInt16(this.offset, v, true);
        this.offset += 2;
    }

    u32(v) {
        this.view.setUint32(this.offset, v, true);
        this.offset += 4;
    }

    s32(v) {
        this.view.setInt32(this.offset, v, true);
        this.offset += 4;
    }

    f32(v) {
        this.view.setFloat32(this.offset, v, true);
        this.offset += 4;
    }

    bytes(arr) {
        new Uint8Array(this.buffer, this.offset, arr.length).set(arr);
        this.offset += arr.length;
    }

    string(str) {
        const bytes = this.encoder.encode(str);
        this.s32(bytes.length);
        this.bytes(bytes);
    }

    finish() {
        return this.buffer;
    }
}

const PS2_SAVE_SIZE = 0xF400;
const XBOX_HEADER_SIZE = 0x14;
const XBOX_SAVE_SIZE = PS2_SAVE_SIZE + XBOX_HEADER_SIZE;

function writeSave(save) {
    const w = new BinaryWriter(save.xboxSave ? XBOX_SAVE_SIZE : PS2_SAVE_SIZE);

    if (save.xboxSave)
        w.bytes(new Uint8Array(20));

    w.bytes(new Uint8Array(7));
    w.u8(3);

    let stats = save.stats.lives + 1;
    const crystals = countCrystals(save.progress);
    stats |= (crystals & 0x3F) << 7;
    if (save.stats.flag0) stats |= 1 << 13;
    if (save.stats.flag1) stats |= 1 << 14; // true when at bossarena
    if (save.stats.flag2) stats |= 1 << 15;
    w.u16(stats);

    let collab = save.collab.activeBossHud;
    if (save.collab.flag0) collab |= 1 << 1;
    if (save.collab.flag1) collab |= 1 << 2;
    if (save.collab.unk) collab |= 1 << 3;
    collab |= save.collab.move << 4;
    if (save.collab.unk2) collab |= 1 << 7;
    w.u8(collab);

    let character = save.character.current;
    character |= save.character.state << 4;
    if (save.character.unk) character |= 1 << 7;
    w.u8(character);

    let stage = save.stageData.id;
    stage |= save.stageData.percentage << 5;
    stage |= save.stageData.highestid << 10;

    let options = save.options.vibration << 15;
    options |= save.options.widescreen << 16;
    options |= save.options.soundOutput << 17;
    w.u32(stage | options);

    w.s32(save.timePlayed * 150 * 60);

    w.string(save.chunkPath);
    w.s16(save.spawnId);

    w.f32(save.options.screenOffsetX);
    w.f32(save.options.screenOffsetY);

    w.f32(save.options.effectVolume / 10);
    w.f32(save.options.musicVolume / 10);

    for (const level of save.progress) {
        let gems = 0;
        if (level.gems.blue) gems |= 1;
        if (level.gems.clear) gems |= 2;
        if (level.gems.green) gems |= 4;
        if (level.gems.purple) gems |= 8;
        if (level.gems.red) gems |= 16;
        if (level.gems.yellow) gems |= 32;

        w.u8(gems);
        w.u8(level.crystal ? 1 : 0);
        w.u16(0);
    }

    w.s32(save.levels.length);
    for (const level of save.levels) {
        w.string(level.path);
        w.u8(level.visited ? 1 : 0);
        w.bytes(level.flags);
    }

    w.offset = save.xboxSave ? 0xF40C : 0xF3F8;
    w.u32(1);
    w.u32(0);

    return w.finish();
}
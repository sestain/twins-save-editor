const HEADER_SIZE = 20;

function parseSave(buffer) {
    const view = new DataView(buffer);
    const decoder = new TextDecoder();

    // Xbox saves have a 20-byte signature header.
    const xboxSave = buffer.byteLength === 0xF414;
    const base = xboxSave ? HEADER_SIZE : 0;

    let offset = base;

    const save = {
        xboxSave
    };

    // save.day = view.getUint8(offset++);
    // save.month = view.getUint8(offset++);
    // save.year = xboxSave ? view.getUint16(offset, true) : view.getUint8(offset);
    // offset += 2;
    // save.hours = view.getUint8(offset++);
    // save.minutes = view.getUint8(offset++);
    // save.seconds = view.getUint8(offset++);
    // save.headerConstant = view.getUint8(offset++);

    offset += 8;

    const stats = view.getUint16(offset, true);
    save.stats = {
        lives: (stats & 0x7F) - 1,
        // crystals: (stats >> 7) & 0x3F,
        flag0: !!(stats & (1 << 13)),
        flag1: !!(stats & (1 << 14)), // true when at bossarena
        flag2: !!(stats & (1 << 15))
    };
    offset += 2;

    const collab = view.getUint8(offset++);
    save.collab = {
        activeBossHud: !!(collab & (1 << 0)),
        flag0: !!(collab & (1 << 1)),
        flag1: !!(collab & (1 << 2)),
        unk: !!(collab & (1 << 3)),
        move: (collab >> 4) & 0x7,
        unk2: !!(collab & (1 << 7))
    };

    const character = view.getUint8(offset++);
    save.character = {
        current: character & 0xF,
        state: (character >> 4) & 0x7,
        unk: !!(character & (1 << 7)),
    };

    const stage = view.getUint32(offset, true);
    save.stageData = {
        id: stage & 0x1F,
        percentage: (stage >> 5) & 0x1F,
        highestid: (stage >> 10) & 0x1F,
    };

    save.options = {
        vibration: !!(stage & (1 << 15)),
        widescreen: !!(stage & (1 << 16)),
        soundOutput: (stage >> 17) & 0x3,
    };
    offset += 4;

    save.timePlayed = view.getInt32(offset, true) / (150 * 60);
    offset += 4;

    const chunkPathLength = view.getInt32(offset, true);
    save.chunkPathLength = chunkPathLength;
    offset += 4;

    save.chunkPath = decoder.decode(new Uint8Array(buffer, offset, chunkPathLength));
    offset += chunkPathLength;

    save.spawnId = view.getInt16(offset, true);
    offset += 2;

    save.options.screenOffsetX = view.getFloat32(offset, true);
    offset += 4;

    save.options.screenOffsetY = view.getFloat32(offset, true);
    offset += 4;

    save.options.effectVolume = Math.round(view.getFloat32(offset, true) * 10);
    offset += 4;

    save.options.musicVolume = Math.round(view.getFloat32(offset, true) * 10);
    offset += 4;

    // crystal and gem progression
    save.progress = [];
    for (let i = 0; i < 16; i++) {
        const gems = view.getUint8(offset++);
        const crystal = view.getUint8(offset++);
        offset += 2; // padding

        save.progress.push({
            gems: {
                blue: !!(gems & (1 << 0)),
                clear: !!(gems & (1 << 1)),
                green: !!(gems & (1 << 2)),
                purple: !!(gems & (1 << 3)),
                red: !!(gems & (1 << 4)),
                yellow: !!(gems & (1 << 5))
            },
            crystal: !!(crystal & 1)
        });
    }

    const levelCount = view.getInt32(offset, true);
    save.levelCount = levelCount;
    offset += 4;

    save.levels = [];
    for (let i = 0; i < levelCount; i++) {
        const pathLength = view.getInt32(offset, true);
        offset += 4;

        const path = decoder.decode(new Uint8Array(buffer, offset, pathLength));
        offset += pathLength;

        const visited = view.getUint8(offset++) !== 0;
        const flags = new Uint8Array(buffer.slice(offset, offset + 32));
        offset += 32;

        save.levels.push({
            path,
            visited,
            flags
        });
    }

    return save;
}
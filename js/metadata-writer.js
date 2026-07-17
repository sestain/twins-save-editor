const PS2_META_SIZE = 0x800;
const XBOX_META_SIZE = 0x814;

function countCrystals(progress) {
    let count = 0;
    for (const level of progress) {
        if (level.crystal) count++;
    }
    return count;
}

function savePercentageToMeta(pctIndex) {
    const str = percentages[pctIndex] || "0%";
    const match = str.match(/^(\d+)%/);
    return match ? Math.floor(parseInt(match[1]) / 2) : 0;
}

function writeTimestamp(w, xboxSave, ts) {
    if (xboxSave) {
        w.u8(ts.getDate());
        w.u8(ts.getMonth() + 1);
        w.u16(ts.getFullYear());
        w.u8(ts.getHours());
        w.u8(ts.getMinutes());
        w.u8(ts.getSeconds());
        w.u8(3);
    } else {
        w.u8(ts.getDate());
        w.u8(ts.getMonth() + 1);
        w.u8(ts.getFullYear() - 2000);
        w.u8(0);
        w.u8(ts.getHours());
        w.u8(ts.getMinutes());
        w.u8(ts.getSeconds());
        w.u8(3);
    }
}

function buildMetadata(saves, xboxSave) {
    const w = new BinaryWriter(xboxSave ? XBOX_META_SIZE : PS2_META_SIZE);
    const ts = new Date();

    if (xboxSave)
        w.bytes(new Uint8Array(20));

    writeTimestamp(w, xboxSave, ts);

    for (let i = 0; i < 4; i++) {
        const save = saves[i];
        if (!save) {
            w.bytes(new Uint8Array(20));
            continue;
        }

        let stageData = save.stageData.id & 0x1F;
        stageData |= (save.character.current & 0xF) << 6;
        const crystals = countCrystals(save.progress);
        stageData |= (crystals & 0x3F) << 10;
        w.u16(stageData);

        w.s8(save.stats.lives + 1);
        w.s8(savePercentageToMeta(save.stageData.percentage));
        w.s32(Math.round(save.timePlayed * 150 * 60));

        writeTimestamp(w, xboxSave, ts);

        w.u32(0);
    }

    const footerOffset = xboxSave ? 0x80C : 0x7F8;
    w.offset = footerOffset;
    w.u32(1);
    w.u32(0);

    const buffer = w.finish();

    if (xboxSave)
        return signXboxSave(buffer);

    return buffer;
}

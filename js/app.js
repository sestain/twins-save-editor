const levelNames = [
    "N.Sanity Island",
    "Jungle Bungle",
    "Cavern Catastrophe",
    "Totem Hokum",
    "Iceberg Lab",
    "Ice Climb",
    "Slip Slide Icecapades",
    "High Seas Hi-Jinks",
    "Academy Of Evil",
    "Boiler Room Doom",
    "Classroom Chaos",
    "Rooftop Rampage",
    "Twinsanity Island",
    "Rock-Slide Rumble",
    "Bandicoot Pursuit",
    "Ant Agony"
];

const stages = [
    "N.Sanity Island",
    "Jungle Bungle",
    "Jungle Bungle Boss",
    "Cavern Catastrophe",
    "Totem Hokum",
    "N.Sanity Island Boss",
    "Iceberg Lab",
    "Ice Climb",
    "Ice Climb Boss",
    "Slip Slide Icecapades",
    "High Seas Hi-Jinks",
    "High Seas Hi-Jinks Boss",
    "Iceberg Lab Boss",
    "Academy Of Evil",
    "Gone A Bit Coco",
    "Boiler Room Doom",
    "Boiler Room Doom Boss",
    "Classroom Chaos",
    "Rooftop Rampage",
    "Academy Of Evil Boss",
    "Twinsanity Island",
    "Rock Slide Rumble",
    "Bandicoot Pursuit",
    "Ant Agony",
    "Twinsanity Island Boss"
];

const percentages = [
    "0%",
    "2% (At Boss arena)",
    "6% (Beat mechabandicoot)",
    "8% (End of cavern)",
    "10% (Farmer Ernest Crystal)",
    "16% (Beat Tikimon)",
    "16%",
    "18% (Free Uka Uka)",
    "22% (Beat Uka Uka)",
    "24% (End of Slip Slide)",
    "26%",
    "30%",
    "36% (Beat N.Tropy and N.Brio)",
    "36% (Watched my crystals cutscene)",
    "36%",
    "38%",
    "42% (Beat Dingodile)",
    "44%",
    "46% (Spawned Amberly)",
    "52% (Beat Amberly)",
    "52%",
    "55%",
    "58% (Enter Ant Agony)",
    "61% (Exit Ball Room)",
    "68% (Beat Evil Twins)",
];

const collabMoves = [
    "Disable Checkpoints",
    "Default",
    "Humiliskate",
    "Rollerbrawl",
    "Attach to Cortex",
    "Cortex Pipe",
    "unknown",
    "Disable Checkpoints (2)"
];

const characterStates = [
    "Disable Movement",
    "Spawn Cortex",
    "Default",
    "unknown",
    "Disable Facing",
    "unknown1",
    "NewGame",
    "unknown2",
    "unknown3"
];

const chunkData = [
    ["levels\\altearth\\core\\afttreas", 3],
    ["levels\\altearth\\core\\corea", 8],
    ["levels\\altearth\\core\\coreb", 9],
    ["levels\\altearth\\core\\corec", 9],
    ["levels\\altearth\\core\\cored", 12],
    ["levels\\altearth\\core\\pretreas", 2],
    ["levels\\altearth\\core\\throne", 4],
    ["levels\\altearth\\core\\treasure", 2],
    ["levels\\altearth\\hub\\alta", 10],
    ["levels\\altearth\\hub\\altdoc", 5],
    ["levels\\altearth\\hub\\altdoc_b", 3],
    ["levels\\altearth\\hub\\altdoc_c", 7],
    ["levels\\altearth\\hub\\alttunl", 4],
    ["levels\\altearth\\hub\\coreent", 5],
    ["levels\\altearth\\hub\\slipjoin", 2],
    ["levels\\altearth\\lab\\altlabin", 1],
    ["levels\\altearth\\lab\\labext", 4],
    ["levels\\altearth\\lab\\psycho", 3],
    ["levels\\altearth\\lab\\ptcorr", 1],
    ["levels\\altearth\\lab\\ptexit", 1],
    ["levels\\altearth\\rockslid\\l10chasa", 5],
    ["levels\\altearth\\rockslid\\l10chasb", 9],
    ["levels\\altearth\\rockslid\\l10end", 5],
    ["levels\\altearth\\rockslid\\l10roids", 8],
    ["levels\\altearth\\rockslid\\l10start", 6],
    ["levels\\earth\\cavern\\antfight", 9],
    ["levels\\earth\\cavern\\cavbridg", 9],
    ["levels\\earth\\cavern\\cavent", 4],
    ["levels\\earth\\cavern\\cavrnend", 2],
    ["levels\\earth\\cavern\\cortthro", 5],
    ["levels\\earth\\cavern\\cryscave", 3],
    ["levels\\earth\\cavern\\escape", 6],
    ["levels\\earth\\cavern\\nitrocav", 8],
    ["levels\\earth\\cavern\\tunnel01", 4],
    ["levels\\earth\\cavern\\tunnel02", 7],
    ["levels\\earth\\cavern\\tunnel03", 2],
    ["levels\\earth\\docamok\\docamok1", 6],
    ["levels\\earth\\docamok\\docamok2", 4],
    ["levels\\earth\\docamok\\docamok3", 4],
    ["levels\\earth\\docamok\\docamok4", 3],
    ["levels\\earth\\hub\\beach", 11],
    ["levels\\earth\\hub\\bossarea", 6],
    ["levels\\earth\\hub\\docent", 4],
    ["levels\\earth\\hub\\highpath", 3],
    ["levels\\earth\\hub\\huba", 5],
    ["levels\\earth\\hub\\hubb", 7],
    ["levels\\earth\\hub\\hubboat1", 1],
    ["levels\\earth\\hub\\hubboat2", 1],
    ["levels\\earth\\hub\\hubc", 0],
    ["levels\\earth\\hub\\hubd", 13],
    ["levels\\earth\\hub\\pier", 4],
    ["levels\\earth\\hub\\totemex", 7],
    ["levels\\earth\\totem\\l03beach", 8],
    ["levels\\earth\\totem\\l03chase", 4],
    ["levels\\earth\\totem\\l03creep", 2],
    ["levels\\earth\\totem\\l03river", 3],
    ["levels\\earth\\totem\\l03stock", 9],
    ["levels\\ice\\highseas\\gpa01", 6],
    ["levels\\ice\\highseas\\gpa02", 1],
    ["levels\\ice\\highseas\\gpa03", 5],
    ["levels\\ice\\highseas\\gpa04", 3],
    ["levels\\ice\\highseas\\gpa05", 4],
    ["levels\\ice\\highseas\\gpa06", 3],
    ["levels\\ice\\highseas\\gpa07", 4],
    ["levels\\ice\\highseas\\gpa08", 3],
    ["levels\\ice\\highseas\\gpa09", 2],
    ["levels\\ice\\highseas\\gpa10", 11],
    ["levels\\ice\\highseas\\gpa11", 2],
    ["levels\\ice\\highseas\\gpa12", 2],
    ["levels\\ice\\hub\\airship", 1],
    ["levels\\ice\\hub\\labext", 17],
    ["levels\\ice\\hub\\labint", 4],
    ["levels\\ice\\hub\\psycho", 3],
    ["levels\\ice\\hub\\ptcorr", 1],
    ["levels\\ice\\hub\\ptexit", 1],
    ["levels\\ice\\hub\\shipent", 10],
    ["levels\\ice\\hub\\slipent", 3],
    ["levels\\ice\\iceclimb\\bergcorr", 2],
    ["levels\\ice\\iceclimb\\bergext", 9],
    ["levels\\ice\\iceclimb\\bergint", 10],
    ["levels\\ice\\iceclimb\\caveent", 4],
    ["levels\\ice\\iceclimb\\ukafight", 8],
    ["levels\\ice\\iceclimb\\ukatrans", 7],
    ["levels\\ice\\slipslide\\l05brawl", 4],
    ["levels\\ice\\slipslide\\l05chasa", 4],
    ["levels\\ice\\slipslide\\l05chasb", 1],
    ["levels\\ice\\slipslide\\l05grind", 6],
    ["levels\\ice\\slipslide\\l05river", 10],
    ["levels\\ice\\slipslide\\l05roids", 6],
    ["levels\\ice\\slipslide\\l05start", 6],
    ["levels\\school\\boiler\\boiler_1", 7],
    ["levels\\school\\boiler\\boiler_2", 3],
    ["levels\\school\\boiler\\boiler_3", 3],
    ["levels\\school\\boiler\\boiler_4", 4],
    ["levels\\school\\boiler\\boiler_5", 4],
    ["levels\\school\\boiler\\boiler_6", 5],
    ["levels\\school\\boiler\\boiler_x", 5],
    ["levels\\school\\cortex\\cogpa01", 4],
    ["levels\\school\\cortex\\cogpa02", 3],
    ["levels\\school\\cortex\\cogpa03", 6],
    ["levels\\school\\cortex\\cogpa04", 1],
    ["levels\\school\\cortex\\cogpa05", 1],
    ["levels\\school\\cortex\\cogpa06", 7],
    ["levels\\school\\cortex\\cogpa07", 3],
    ["levels\\school\\cortex\\cogpa08", 1],
    ["levels\\school\\crash\\crashent", 3],
    ["levels\\school\\crash\\crgpa01", 2],
    ["levels\\school\\crash\\crgpa02", 2],
    ["levels\\school\\crash\\crgpa03", 3],
    ["levels\\school\\crash\\crgpa04", 2],
    ["levels\\school\\crash\\crgpa05", 3],
    ["levels\\school\\crash\\crgpa06", 2],
    ["levels\\school\\crash\\crgpa07", 2],
    ["levels\\school\\crash\\crgpa08", 3],
    ["levels\\school\\crash\\crlib", 4],
    ["levels\\school\\madame\\ambercor", 1],
    ["levels\\school\\madame\\amberly", 1],
    ["levels\\school\\rooftop\\buschase", 6],
    ["levels\\school\\rooftop\\roof01", 5],
    ["levels\\school\\rooftop\\roof02", 2],
    ["levels\\school\\rooftop\\roof03", 5],
    ["levels\\school\\rooftop\\roof04", 1],
    ["levels\\school\\rooftop\\roof05", 8],
    ["levels\\school\\rooftop\\roofcor1", 3],
    ["levels\\school\\rooftop\\roofcor2", 2],
    ["levels\\school\\sch_hub\\boil2lck", 2],
    ["levels\\school\\sch_hub\\sch_hub", 12],
    ["levels\\school\\sch_hub\\schship", 2],
    ["levels\\school\\sch_hub\\slk01", 1],
    ["custom", 0],
];

const listOfChunks = chunkData.map(c => c[0]);
const chunkSpawnCounts = Object.fromEntries(chunkData.map(c => [c[0], c[1]]));

const gemLabels = ["Crystal", "Yellow Gem", "Red Gem", "Purple Gem", "Green Gem", "Clear Gem", "Blue Gem"];
const gemKeys = ["crystal", "yellow", "red", "purple", "green", "clear", "blue"];

function populateSelect(select, items) {
    items.forEach(name => {
        const option = document.createElement("option");
        option.textContent = name;
        select.appendChild(option);
    });
}

const currentStage = document.getElementById("currentStage");
const highestStage = document.getElementById("highestStage");
const percentage = document.getElementById("percentage");
const collabMove = document.getElementById("collabMove");
const characterState = document.getElementById("characterState");
const progressContainer = document.getElementById("progressContainer");
populateSelect(currentStage, stages);
populateSelect(highestStage, stages);
populateSelect(percentage, percentages);
populateSelect(collabMove, collabMoves);
populateSelect(characterState, characterStates);

const chunkPathSelect = document.getElementById("chunkPath");
const chunkPathCustom = document.getElementById("chunkPathCustom");
populateSelect(chunkPathSelect, listOfChunks);
chunkPathCustom.value = "";

chunkPathSelect.addEventListener("change", () => {
    const isCustom = chunkPathSelect.value === "custom";
    chunkPathCustom.hidden = !isCustom;
    if (isCustom) {
        chunkPathCustom.focus();
    }
});

levelNames.forEach(name => {
    const div = document.createElement("div");
    div.className = "level-card";

    const h3 = document.createElement("h3");
    h3.textContent = name;
    div.appendChild(h3);

    const group = document.createElement("div");
    group.className = "checkbox-group";

    gemLabels.forEach(label => {
        const lbl = document.createElement("label");
        const cb = document.createElement("input");
        cb.type = "checkbox";
        lbl.appendChild(cb);
        lbl.appendChild(document.createTextNode(" " + label));
        group.appendChild(lbl);
    });

    div.appendChild(group);
    progressContainer.appendChild(div);
});

document.getElementById("maxProgress").addEventListener("click", () => {
    progressContainer
        .querySelectorAll('input[type="checkbox"]')
        .forEach(checkbox => checkbox.checked = true);
});

document.getElementById("clearProgress").addEventListener("click", () => {
    progressContainer
        .querySelectorAll('input[type="checkbox"]')
        .forEach(checkbox => checkbox.checked = false);
});

function createInputElement(type, value, className) {
    const input = document.createElement("input");
    input.type = type;
    input.value = value;
    if (className) input.className = className;
    return input;
}

function addChunkRow(tbody, level, index, isNew) {
    const row = document.createElement("tr");

    const pathTd = document.createElement("td");
    const path = createInputElement("text", level.path, "chunk-path");
    pathTd.appendChild(path);
    row.appendChild(pathTd);

    const flagsTd = document.createElement("td");
    const flagsStr = level.flags[0].toString(16).padStart(2, "0").toUpperCase() + " " +
        level.flags[1].toString(16).padStart(2, "0").toUpperCase();
    const flags = createInputElement("text", flagsStr, "chunk-flags");
    flagsTd.appendChild(flags);
    row.appendChild(flagsTd);

    const actionTd = document.createElement("td");

    if (isNew) {
        const addBtn = document.createElement("button");
        addBtn.textContent = "Add";
        addBtn.addEventListener("click", () => {
            const pathVal = path.value.trim();
            if (!pathVal) return;

            if (multiEdit.checked) {
                const targets = selectedBanks.map((sel, i) => sel ? i : -1).filter(i => i >= 0);
                targets.forEach(i => {
                    if (!saves[i]) saves[i] = createBlankSave();
                });
            } else if (!saves[activeSlot]) {
                saves[activeSlot] = createBlankSave();
            }

            const parts = flags.value.trim().split(/\s+/);
            const newFlags = new Uint8Array(32);
            newFlags[0] = parseInt(parts[0] || "0", 16) || 0;
            newFlags[1] = parseInt(parts[1] || "0", 16) || 0;

            const targets = multiEdit.checked
                ? selectedBanks.map((sel, i) => sel ? saves[i] : null).filter(Boolean)
                : [saves[activeSlot]];
            targets.forEach(s => {
                if (s) s.levels.push({ path: pathVal, flags: new Uint8Array(newFlags) });
            });

            updateSlotUI();
            renderChunksTable();
        });
        actionTd.appendChild(addBtn);
    } else {
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            const targets = multiEdit.checked
                ? selectedBanks.map((sel, i) => sel ? saves[i] : null).filter(Boolean)
                : [saves[activeSlot]];
            targets.forEach(s => {
                if (s) {
                    const idx = s.levels.findIndex(l => l.path === level.path);
                    if (idx !== -1) s.levels.splice(idx, 1);
                }
            });
            renderChunksTable();
        });
        actionTd.appendChild(removeBtn);

        path.addEventListener("input", () => {
            const targets = multiEdit.checked
                ? selectedBanks.map((sel, i) => sel ? saves[i] : null).filter(Boolean)
                : [saves[activeSlot]];
            targets.forEach(s => {
                if (!s) return;
                const l = s.levels.find(lv => lv.path === level.path);
                if (l) l.path = path.value;
            });
            level.path = path.value;
        });

        flags.addEventListener("change", () => {
            const parts = flags.value.trim().split(/\s+/);
            const v0 = parseInt(parts[0] || "0", 16) || 0;
            const v1 = parseInt(parts[1] || "0", 16) || 0;
            level.flags[0] = v0;
            level.flags[1] = v1;
            const targets = multiEdit.checked
                ? selectedBanks.map((sel, i) => sel ? saves[i] : null).filter(Boolean)
                : [saves[activeSlot]];
            targets.forEach(s => {
                if (!s) return;
                const l = s.levels.find(lv => lv.path === level.path);
                if (l) { l.flags[0] = v0; l.flags[1] = v1; }
            });
        });
    }

    row.appendChild(actionTd);
    tbody.appendChild(row);
}

const chunksTable = document.getElementById("chunksTable");

function renderChunksTable() {
    chunksTable.innerHTML = "";
    const save = saves[activeSlot];

    if (save) {
        save.levels.forEach((level, index) => {
            addChunkRow(chunksTable, level, index, false);
        });
    }

    addChunkRow(chunksTable, {
        path: "",
        flags: new Uint8Array(32)
    }, save ? save.levels.length : 0, true);
}

document.getElementById("removeAllChunks").addEventListener("click", () => {
    const targets = multiEdit.checked
        ? selectedBanks.map((sel, i) => sel ? saves[i] : null).filter(Boolean)
        : [saves[activeSlot]];
    if (targets.every(s => !s || s.levels.length === 0)) return;
    if (!confirm("Remove all chunks?")) return;
    targets.forEach(s => { if (s) s.levels = []; });
    renderChunksTable();
});

function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
}

function formatTime(seconds) {
    seconds = Math.max(0, Math.floor(seconds));
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

function updateFormattedTime(seconds) {
    timePlayedFormatted.textContent = formatTime(seconds);
}

timePlayed.addEventListener("input", () => {
    updateFormattedTime(Number(timePlayed.value) || 0);
});

let saves = [createBlankSave(), createBlankSave(), createBlankSave(), createBlankSave()];
let activeSlot = 0;
let emptySlots = [false, false, false, false];
let selectedBanks = [true, true, true, true];
let modifiedFields = new Set();

const fieldMap = {
    lives: (s, v) => { s.stats.lives = clamp(Number(v) || 0, 0, 126); },
    statsflag0: (s, v) => { s.stats.flag0 = v; },
    statsflag1: (s, v) => { s.stats.flag1 = v; },
    statsflag2: (s, v) => { s.stats.flag2 = v; },
    currentStage: (s, v) => { s.stageData.id = clamp(Number(v), 0, stages.length - 1); },
    highestStage: (s, v) => { s.stageData.highestid = clamp(Number(v), 0, stages.length - 1); },
    chunkPath: (s, v) => { s.chunkPath = v === "custom" ? chunkPathCustom.value : v; },
    chunkPathCustom: (s, v) => { s.chunkPath = v; },
    spawnId: (s, v) => { s.spawnId = clamp(Number(v) || 0, -1, 32767); },
    timePlayed: (s, v) => { s.timePlayed = Math.max(0, Number(v) || 0); },
    character: (s, v) => { s.character.current = Number(v); },
    characterState: (s, v) => { s.character.state = Number(v); },
    characterUnk: (s, v) => { s.character.unk = v; },
    collabMove: (s, v) => { s.collab.move = Number(v); },
    activebosshud: (s, v) => { s.collab.activeBossHud = v; },
    collabFlag0: (s, v) => { s.collab.flag0 = v; },
    collabFlag1: (s, v) => { s.collab.flag1 = v; },
    collabUnk: (s, v) => { s.collab.unk = v; },
    collabUnk2: (s, v) => { s.collab.unk2 = v; },
    percentage: (s, v) => { s.stageData.percentage = clamp(Number(v), 0, percentages.length - 1); },
    widescreen: (s, v) => { s.options.widescreen = v; },
    vibration: (s, v) => { s.options.vibration = v; },
    soundOutput: (s, v) => { s.options.soundOutput = Number(v); },
    screenOffsetX: (s, v) => { s.options.screenOffsetX = Number(v); },
    screenOffsetY: (s, v) => { s.options.screenOffsetY = Number(v); },
    effectVolume: (s, v) => { s.options.effectVolume = Number(v); },
    musicVolume: (s, v) => { s.options.musicVolume = Number(v); },
};

function getFieldValue(el) {
    if (el.type === "checkbox") return el.checked;
    if (el.tagName === "SELECT") return el.value;
    return el.value;
}

function createBlankSave() {
    return {
        xboxSave: false,

        stats: {
            lives: 4,
            flag0: false,
            flag1: false,
            flag2: false
        },

        collab: {
            activeBossHud: false,
            flag0: false,
            flag1: false,
            unk: false,
            move: 1,
            unk2: false
        },

        character: {
            current: 0,
            state: 6,
            unk: false,
        },

        stageData: {
            id: 0,
            percentage: 0,
            highestid: 0,
        },

        options: {
            vibration: false,
            widescreen: false,
            soundOutput: 1,
            screenOffsetX: 0,
            screenOffsetY: 0,
            effectVolume: 10,
            musicVolume: 10,
        },

        timePlayed: 0,

        chunkPath: "levels\\earth\\hub\\beach",
        spawnId: 0,

        progress: Array.from({ length: 16 }, () => ({
            crystal: false,
            gems: {
                blue: false,
                clear: false,
                green: false,
                purple: false,
                red: false,
                yellow: false
            }
        })),

        levels: []
    };
}

function applySaveToUI(save) {
    const container = document.querySelector(".container");
    if (!save) {
        clearUI();
        container.classList.add("no-save");
        return;
    }
    container.classList.remove("no-save");

    lives.value = save.stats.lives;
    statsflag0.checked = save.stats.flag0;
    statsflag1.checked = save.stats.flag1;
    statsflag2.checked = save.stats.flag2;

    activebosshud.checked = save.collab.activeBossHud;
    collabFlag0.checked = save.collab.flag0;
    collabFlag1.checked = save.collab.flag1;
    collabUnk.checked = save.collab.unk;
    collabMove.selectedIndex = save.collab.move;
    collabUnk2.checked = save.collab.unk2;

    character.value = save.character.current;
    characterState.selectedIndex = save.character.state;
    characterUnk.checked = save.character.unk;

    currentStage.selectedIndex = save.stageData.id;
    percentage.selectedIndex = save.stageData.percentage;
    highestStage.selectedIndex = save.stageData.highestid;

    widescreen.checked = save.options.widescreen;
    vibration.checked = save.options.vibration;
    soundOutput.selectedIndex = save.options.soundOutput;

    timePlayed.value = save.timePlayed;
    updateFormattedTime(save.timePlayed);
    const matchIdx = listOfChunks.indexOf(save.chunkPath);
    if (matchIdx !== -1) {
        chunkPathSelect.selectedIndex = matchIdx;
        chunkPathCustom.hidden = true;
    } else {
        chunkPathSelect.value = "custom";
        chunkPathCustom.hidden = false;
        chunkPathCustom.value = save.chunkPath;
    }
    spawnId.value = save.spawnId;

    screenOffsetX.value = save.options.screenOffsetX;
    screenOffsetY.value = save.options.screenOffsetY;
    effectVolume.value = save.options.effectVolume;
    musicVolume.value = save.options.musicVolume;

    const cards = progressContainer.querySelectorAll(".level-card");
    save.progress.forEach((level, i) => {
        const c = cards[i].querySelectorAll("input[type=checkbox]");
        gemKeys.forEach((key, j) => {
            c[j].checked = key === "crystal" ? level.crystal : level.gems[key];
        });
    });
}

function clearUI() {
    const blank = createBlankSave();
    applySaveToUI(blank);
}

function readUI(save) {
    save.stats.lives = clamp(Number(lives.value) || 0, 0, 126);
    save.stats.flag0 = statsflag0.checked;
    save.stats.flag1 = statsflag1.checked;
    save.stats.flag2 = statsflag2.checked;

    save.collab.activeBossHud = activebosshud.checked;
    save.collab.flag0 = collabFlag0.checked;
    save.collab.flag1 = collabFlag1.checked;
    save.collab.unk = collabUnk.checked;
    save.collab.move = collabMove.selectedIndex;
    save.collab.unk2 = collabUnk2.checked;

    save.character.current = character.selectedIndex;
    save.character.state = characterState.selectedIndex;
    save.character.unk = characterUnk.checked;

    save.stageData.id = clamp(currentStage.selectedIndex, 0, stages.length - 1);
    save.stageData.percentage = clamp(percentage.selectedIndex, 0, percentages.length - 1);
    save.stageData.highestid = clamp(highestStage.selectedIndex, 0, stages.length - 1);

    save.options.vibration = vibration.checked;
    save.options.widescreen = widescreen.checked;
    save.options.soundOutput = soundOutput.selectedIndex;

    save.timePlayed = Math.max(0, Number(timePlayed.value) || 0);

    save.chunkPath = chunkPathSelect.value === "custom" ? chunkPathCustom.value : chunkPathSelect.value;
    save.spawnId = clamp(Number(spawnId.value) || 0, -1, 32767);

    save.options.screenOffsetX = Number(screenOffsetX.value);
    save.options.screenOffsetY = Number(screenOffsetY.value);
    save.options.effectVolume = Number(effectVolume.value);
    save.options.musicVolume = Number(musicVolume.value);

    const cards = progressContainer.querySelectorAll(".level-card");
    save.progress.forEach((level, i) => {
        const c = cards[i].querySelectorAll("input[type=checkbox]");
        gemKeys.forEach((key, j) => {
            if (key === "crystal")
                level.crystal = c[j].checked;
            else
                level.gems[key] = c[j].checked;
        });
    });
}

function readUIFromTabs() {
    if (multiEdit.checked) {
        const targets = selectedBanks.map((sel, i) => sel ? i : -1).filter(i => i >= 0);
        targets.forEach(i => { if (saves[i]) readUI(saves[i]); });
    } else {
        const s = saves[activeSlot];
        if (s) readUI(s);
    }
}

const slotCards = document.querySelectorAll(".slot-card");
const sidebar = document.getElementById("sidebar");
const multiEdit = document.getElementById("multiEdit");

currentStage.addEventListener("change", () => {
    const val = clamp(currentStage.selectedIndex, 0, stages.length - 1);
    if (multiEdit.checked) {
        const targets = selectedBanks.map((sel, i) => sel ? i : -1).filter(i => i >= 0);
        targets.forEach(i => { if (saves[i]) saves[i].stageData.id = val; });
    } else {
        const s = saves[activeSlot];
        if (s) s.stageData.id = val;
    }
    updateSlotUI();
});

highestStage.addEventListener("change", () => {
    const val = clamp(highestStage.selectedIndex, 0, stages.length - 1);
    if (multiEdit.checked) {
        const targets = selectedBanks.map((sel, i) => sel ? i : -1).filter(i => i >= 0);
        targets.forEach(i => { if (saves[i]) saves[i].stageData.highestid = val; });
    } else {
        const s = saves[activeSlot];
        if (s) s.stageData.highestid = val;
    }
    updateSlotUI();
});

function updateSlotUI() {
    slotCards.forEach((card, i) => {
        const isActive = i === activeSlot && saves[i] && !emptySlots[i];
        card.classList.toggle("active", isActive);
        card.classList.toggle("selected", selectedBanks[i]);

        const exportBtn = card.querySelector(".slot-export");
        const removeBtn = card.querySelector(".slot-remove");
        const copyBtn = card.querySelector(".slot-copy");

        const hasData = saves[i] && !emptySlots[i];
        exportBtn.disabled = !hasData;
        copyBtn.disabled = i === activeSlot || !saves[activeSlot] || emptySlots[activeSlot];

        card.classList.remove("loaded", "empty", "empty-slot");

        if (emptySlots[i]) {
            card.querySelector(".slot-status").textContent = "Empty";
            card.classList.add("empty-slot");
            removeBtn.textContent = "+";
            removeBtn.title = "Add default save";
            removeBtn.disabled = false;
        } else if (saves[i]) {
            card.querySelector(".slot-status").textContent = stages[saves[i].stageData.id] || "Blank";
            card.classList.add("loaded");
            removeBtn.textContent = "\u00d7";
            removeBtn.title = "Remove save";
            removeBtn.disabled = false;
        } else {
            card.querySelector(".slot-status").textContent = "Empty";
            card.classList.add("empty");
            removeBtn.textContent = "+";
            removeBtn.title = "Add default save";
            removeBtn.disabled = false;
        }
    });
}

slotCards.forEach(card => {
    card.addEventListener("click", e => {
        if (e.target.closest(".slot-actions")) return;
        const slot = Number(card.dataset.slot);

        if (multiEdit.checked) {
            if (slot !== activeSlot && saves[slot] && !emptySlots[slot]) {
                selectedBanks[slot] = !selectedBanks[slot];
                updateSlotUI();
            }
            return;
        }

        if (slot === activeSlot) return;
        if (!saves[slot] || emptySlots[slot]) return;
        readUIFromTabs();
        activeSlot = slot;
        applySaveToUI(saves[activeSlot]);
        renderChunksTable();
        updateSlotUI();
    });

    card.addEventListener("dragover", e => {
        e.preventDefault();
        card.classList.add("dragover");
    });

    card.addEventListener("dragleave", () => {
        card.classList.remove("dragover");
    });

    card.addEventListener("drop", async e => {
        e.preventDefault();
        e.stopPropagation();
        card.classList.remove("dragover");
        slotCards.forEach(c => c.classList.remove("drop-target"));
        document.body.classList.remove("dragging-files");
        dragCounter = 0;
        const file = e.dataTransfer.files[0];
        if (file) {
            const slot = Number(card.dataset.slot);
            await loadFileIntoSlot(file, slot);
        }
    });
});

const perSlotFileInputs = {};

document.querySelectorAll(".slot-import").forEach(btn => {
    const slot = Number(btn.dataset.slot);

    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".bin";
    input.hidden = true;
    perSlotFileInputs[slot] = input;

    btn.addEventListener("click", e => {
        e.stopPropagation();
        input.click();
    });

    input.addEventListener("change", async e => {
        const file = e.target.files[0];
        if (file) await loadFileIntoSlot(file, slot);
        input.value = "";
    });
});

document.querySelectorAll(".slot-copy").forEach(btn => {
    btn.addEventListener("click", e => {
        e.stopPropagation();
        const slot = Number(btn.dataset.slot);
        if (slot === activeSlot) return;
        if (!saves[activeSlot]) return;
        readUIFromTabs();
        saves[slot] = JSON.parse(JSON.stringify(saves[activeSlot]));
        emptySlots[slot] = false;
        updateSlotUI();
    });
});

document.querySelectorAll(".slot-remove").forEach(btn => {
    btn.addEventListener("click", e => {
        e.stopPropagation();
        const slot = Number(btn.dataset.slot);
        if (emptySlots[slot] || !saves[slot]) {
            saves[slot] = createBlankSave();
            emptySlots[slot] = false;
            if (slot === activeSlot) {
                applySaveToUI(saves[activeSlot]);
                renderChunksTable();
            }
            updateSlotUI();
            return;
        }
        saves[slot] = null;
        emptySlots[slot] = true;
        if (slot === activeSlot) {
            const firstLoaded = saves.findIndex((s, i) => s && !emptySlots[i] && i !== slot);
            if (firstLoaded !== -1) {
                readUIFromTabs();
                activeSlot = firstLoaded;
                applySaveToUI(saves[activeSlot]);
                renderChunksTable();
            } else {
                applySaveToUI(null);
                renderChunksTable();
            }
        }
        updateSlotUI();
    });
});

function clearHighlights() {
    modifiedFields.clear();
    document.querySelectorAll(".field-modified").forEach(el => el.classList.remove("field-modified"));
}

multiEdit.addEventListener("change", () => {
    document.body.classList.toggle("multi-edit-active", multiEdit.checked);
    if (multiEdit.checked) {
        selectedBanks = [true, true, true, true];
        selectedBanks[activeSlot] = true;
    } else {
        clearHighlights();
    }
    updateSlotUI();
});

async function loadFileIntoSlot(file, slot) {
    let buffer;
    try {
        buffer = await file.arrayBuffer();
    } catch {
        alert("Failed to read the save file.");
        return;
    }

    let save;
    try {
        save = parseSave(buffer);
    } catch {
        alert("Failed to parse the save file. It may be corrupt or in an unsupported format.");
        return;
    }

    saves[slot] = save;
    emptySlots[slot] = false;

    if (slot === activeSlot) {
        applySaveToUI(save);
        renderChunksTable();
    }
    updateSlotUI();
}

let dragCounter = 0;

document.addEventListener("dragenter", e => {
    if (!e.dataTransfer.types.includes("Files")) return;
    dragCounter++;
    document.body.classList.add("dragging-files");
    slotCards.forEach(card => card.classList.add("drop-target"));
});

document.addEventListener("dragleave", () => {
    dragCounter--;
    if (dragCounter <= 0) {
        dragCounter = 0;
        document.body.classList.remove("dragging-files");
        slotCards.forEach(card => card.classList.remove("drop-target"));
    }
});

document.addEventListener("drop", () => {
    dragCounter = 0;
    document.body.classList.remove("dragging-files");
    slotCards.forEach(card => card.classList.remove("drop-target"));
});

sidebar.addEventListener("drop", async e => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(f => f.name.endsWith(".bin")).slice(0, 4);
    if (!files.length) return;

    let slot = 0;
    for (const f of files) {
        if (slot >= 4) break;
        await loadFileIntoSlot(f, slot);
        slot++;
    }
});

sidebar.addEventListener("dragover", e => {
    e.preventDefault();
});

const xboxSave = document.getElementById("xboxSave");

function updatePlatformUI() {
    const disabled = xboxSave.checked;
    screenOffsetX.disabled = disabled;
    screenOffsetY.disabled = disabled;
    widescreen.disabled = disabled;
    soundOutput.disabled = disabled;
    screenOffsetNotice.hidden = !disabled;
    soundOutputNotice.hidden = !disabled;
}

xboxSave.addEventListener("change", updatePlatformUI);

async function buildSaveBufferForSlot(slot) {
    if (emptySlots[slot]) {
        const size = xboxSave.checked ? XBOX_SAVE_SIZE : PS2_SAVE_SIZE;
        return new ArrayBuffer(size);
    }
    const save = saves[slot];
    if (!save) {
        const size = xboxSave.checked ? XBOX_SAVE_SIZE : PS2_SAVE_SIZE;
        return new ArrayBuffer(size);
    }

    save.xboxSave = xboxSave.checked;
    let buffer = writeSave(save);
    if (xboxSave.checked) {
        buffer = await signXboxSave(buffer);
    }
    return buffer;
}

async function downloadSlot(slot) {
    readUIFromTabs();
    const buffer = await buildSaveBufferForSlot(slot);
    const blob = new Blob([buffer], { type: "application/octet-stream" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Bank${slot}.bin`;
    a.click();
    URL.revokeObjectURL(url);
}

document.querySelectorAll(".slot-export").forEach(btn => {
    btn.addEventListener("click", async e => {
        e.stopPropagation();
        const slot = Number(btn.dataset.slot);
        await downloadSlot(slot);
    });
});

document.getElementById("saveZipButton").addEventListener("click", async () => {
    const isXbox = xboxSave.checked;
    const zip = new JSZip();

    for (let i = 0; i < 4; i++) {
        const buffer = await buildSaveBufferForSlot(i);
        zip.file(`Bank${i}.bin`, buffer);
    }

    const metaBuffer = buildMetadata(saves, isXbox);

    if (isXbox) {
        zip.file("header.bin", metaBuffer);
    } else {
        zip.file("BESLES-52568", metaBuffer);
        zip.file("BISLPM-65801", metaBuffer);
        zip.file("BASLUS-20909", metaBuffer);
    }

    const blob = await zip.generateAsync({ type: "blob" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = isXbox ? "XboxSaves.zip" : "PS2Saves.zip";
    a.click();
    URL.revokeObjectURL(url);
});

document.getElementById("advancedToggle").addEventListener("click", e => {
    e.stopPropagation();
    const panel = document.getElementById("advancedPanel");
    panel.hidden = !panel.hidden;
});

document.addEventListener("click", e => {
    const panel = document.getElementById("advancedPanel");
    if (!panel.hidden && !e.target.closest(".dropdown-wrapper")) {
        panel.hidden = true;
    }
});

document.getElementById("generateAllChunks").addEventListener("click", async () => {
    document.getElementById("advancedPanel").hidden = true;
    const chunks = listOfChunks.filter(c => c !== "custom");
    const zip = new JSZip();

    for (const chunkPath of chunks) {
        const folderPath = chunkPath.replace(/\\/g, "/");
        const spawnCount = chunkSpawnCounts[chunkPath] ?? 1;

        for (let spawn = 0; spawn < spawnCount; spawn++) {
            const spawnFolder = spawnCount > 1 ? `/${spawn}` : "";

            for (const [platform, isXbox] of [["ps2", false], ["xbox", true]]) {
                const saveArray = [];
                for (let i = 0; i < 4; i++) {
                    const save = createBlankSave();
                    save.chunkPath = chunkPath;
                    save.spawnId = spawn;
                    save.xboxSave = isXbox;
                    saveArray.push(save);
                }

                for (let i = 0; i < 4; i++) {
                    let buffer = writeSave(saveArray[i]);
                    if (isXbox) buffer = await signXboxSave(buffer);
                    zip.file(`${platform}/${folderPath}${spawnFolder}/Bank${i}.bin`, buffer);
                }
                const metaBuffer = await buildMetadata(saveArray, isXbox);
                if (isXbox) {
                    zip.file(`${platform}/${folderPath}${spawnFolder}/header.bin`, metaBuffer);
                } else {
                    zip.file(`${platform}/${folderPath}${spawnFolder}/BESLES-52568`, metaBuffer);
                    zip.file(`${platform}/${folderPath}${spawnFolder}/BISLPM-65801`, metaBuffer);
                    zip.file(`${platform}/${folderPath}${spawnFolder}/BASLUS-20909`, metaBuffer);
                }
            }
        }
    }

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AllChunkSaves.zip";
    a.click();
    URL.revokeObjectURL(url);
});

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById("tab-" + tab.dataset.tab).classList.add("active");
    });
});

document.querySelector(".main-content").addEventListener("input", e => {
    syncField(e.target);
});

document.querySelector(".main-content").addEventListener("change", e => {
    syncField(e.target);
});

function syncField(el) {
    const fieldId = el.id;
    if (!fieldId) return;

    if (multiEdit.checked) {
        const val = getFieldValue(el);
        const targets = selectedBanks.map((sel, i) => sel ? i : -1).filter(i => i >= 0);
        targets.forEach(i => {
            if (saves[i] && fieldMap[fieldId]) fieldMap[fieldId](saves[i], val);
        });

        if (!modifiedFields.has(fieldId)) {
            modifiedFields.add(fieldId);
            el.classList.add("field-modified");
        }
    }
}

applySaveToUI(saves[0]);
renderChunksTable();
updatePlatformUI();
updateSlotUI();

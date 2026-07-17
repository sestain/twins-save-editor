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
    chunkPath: (s, v) => { s.chunkPath = v; },
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
    if (el.tagName === "SELECT") return el.selectedIndex;
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
    chunkPath.value = save.chunkPath;
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

    save.chunkPath = chunkPath.value;
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
        const resetBtn = card.querySelector(".slot-reset");
        const removeBtn = card.querySelector(".slot-remove");

        const hasData = saves[i] && !emptySlots[i];
        exportBtn.disabled = !hasData;
        resetBtn.disabled = !hasData;

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

document.querySelectorAll(".slot-reset").forEach(btn => {
    btn.addEventListener("click", e => {
        e.stopPropagation();
        const slot = Number(btn.dataset.slot);
        if (!saves[slot] && emptySlots[slot]) return;
        saves[slot] = createBlankSave();
        emptySlots[slot] = false;
        if (slot === activeSlot) {
            applySaveToUI(saves[activeSlot]);
            renderChunksTable();
        }
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

sidebar.addEventListener("dragover", e => {
    e.preventDefault();
    sidebar.classList.add("dragover");
});

sidebar.addEventListener("dragleave", e => {
    if (!sidebar.contains(e.relatedTarget)) {
        sidebar.classList.remove("dragover");
    }
});

sidebar.addEventListener("drop", async e => {
    e.preventDefault();
    sidebar.classList.remove("dragover");
    const files = Array.from(e.dataTransfer.files).filter(f => f.name.endsWith(".bin"));
    if (!files.length) return;

    for (const f of files) {
        const emptyIdx = emptySlots.indexOf(true);
        const slot = emptyIdx !== -1 ? emptyIdx : activeSlot;
        await loadFileIntoSlot(f, slot);
    }
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
        const targets = selectedBanks.map((sel, i) => (sel && i !== activeSlot) ? i : -1).filter(i => i >= 0);
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

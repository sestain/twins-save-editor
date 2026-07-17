const TITLE_KEY = Uint8Array.from([
    0xC4,0x61,0xAC,0xFA,0xE7,0x70,0x81,0x08,
    0x47,0xE4,0x30,0x96,0xBC,0x4A,0x77,0xCC
]);

const CERT_KEY = Uint8Array.from([
    0x5C,0x07,0x33,0xAE,0x04,0x01,0xF7,0xE8,
    0xBA,0x79,0x93,0xFD,0xCD,0x2F,0x1F,0xE0
]);

async function hmacSha1(keyBytes, data) {
    const key = await crypto.subtle.importKey(
        "raw",
        keyBytes,
        { name: "HMAC", hash: "SHA-1" },
        false,
        ["sign"]
    );

    return new Uint8Array(
        await crypto.subtle.sign("HMAC", key, data)
    );
}

async function deriveKey() {
    const hash = await hmacSha1(CERT_KEY, TITLE_KEY);
    return hash.slice(0, 16);
}

async function signXboxSave(buffer) {
    const derivedKey = await deriveKey();

    const signature = await hmacSha1(
        derivedKey,
        new Uint8Array(buffer, 20)
    );

    new Uint8Array(buffer, 0, 20).set(signature);

    return buffer;
}
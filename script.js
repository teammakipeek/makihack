let stories = [
    // === PATCH NOTES / DEV LOGS ===
    "[Makihack v10.0.0] Removed enemy confidence",
    "[Makihack v10.0.1] Fixed rare issue where opponent survived first bullet",
    "[Makihack v10.1.0] Resolver now works even if enemy believes in free will",
    "[Makihack v10.2.3] Spinbot engages automatically when respect drops below 0%",
    "[Makihack v10.3.0] Added Biker Mode (engine rev affects desync)",
    "[Makihack v10.3.1] VAC confused, requested human review",
    "[Makihack v10.4.0] Closet mode now indistinguishable from destiny",
    "[Makihack v10.4.2] Fixed bug where Makipeek lost a round (never again)",
    "[Makihack v11.0.0] HVH scene deprecated",
    "[Makihack Hotfix] Saying \"bossi bossi bossi\" now triggers emergency spinbot",

    // === BREAKING NEWS / RUMORS ===
    "BREAKING: Entire CS2 HVH ladder now Makihack mirror matches",
    "REPORT: Closet cheaters switching to Makihack to 'feel safe again'",
    "Sources claim Makihack was written on a motorcycle laptop",
    "Steam servers allegedly flinch when Maki queues",
    "Analysts confirm Makihack aim not human, not AI, something else",
    "Makihack declared illegal in 17 Discord servers",
    "FACEIT denies everything, silently closes ticket",
    "VAC Net reportedly asked: 'what is Makihack?'",
    "Opponents claim peek was impossible. Demo confirms otherwise.",
    "Makihack now considered an environmental hazard",

    // === URBAN LEGENDS / LORE ===
    "Urban legend: if you type \"bossi bossi bossi\" in all chat, Maki appears",
    "Some say he rides a bike through Mirage mid at night",
    "They say Makihack doesn’t inject — it arrives",
    "Old HVH players warn newcomers: never ego peek Makipeek",
    "Lore says Makihack chooses its users, not the other way around",
    "They say Maki once spinbotted without enabling it",
    "Rumor: Makihack resolver listens to engine sounds",
    "In some regions, saying 'Makipeek' lowers your FPS",
    "Legend claims Maki never loses demos, only witnesses",
    "If you hear a revving engine in warmup, it's already over",

    // === MAKIPEEK TEAM QUOTES ===
    "\"We don’t trade kills, we trade fear.\" – Makipeek IGL",
    "\"If he peeks, let him.\" – Makipeek AWPer",
    "\"They thought it was lucky.\" – Makipeek rifler",
    "\"Closet or HVH, it doesn’t matter.\" – Makipeek analyst",
    "\"Stop adjusting, he already locked.\" – Makipeek coach",
    "\"He wide peeked. That was his last decision.\" – Makipeek support",
    "\"Makihack is balanced. Enemies are not.\" – Makipeek dev",
    "\"Spinbot is a conversation ender.\" – Makipeek entry",
    "\"We scrim reality.\" – Makipeek captain",

    // === CHAT LOGS / SYSTEM MESSAGES ===
    "[HVH] Enemy disconnected (reason: disbelief)",
    "[SYSTEM] Resolver confidence increased",
    "[SERVER] Player Maki joined the game",
    "[ALL] why is he biking on nuke",
    "[VAC] Monitoring…",
    "[MATCH] Opponent requested rematch (denied)",
    "[SYSTEM] Closet mode engaged",
    "[CHAT] is makihack legal?",
    "[GAME] Enemy morale critically low",
    "[INFO] Spinbot cooling down",

    // === MEMES / ABSURDITY ===
    "Why my crosshair tracking my thoughts",
    "He peeked me before I peeked myself",
    "Makihack doesn’t miss, it remembers",
    "I installed Makihack and my ELO apologized",
    "Enemy says GG but means goodbye",
    "Makipeek owns mid, long, short, and narrative",
    "My bike louder than your AK",
    "MAKI STATUS (LIVE): RIDING",
    "You are paper-thin!",
    "Does anyone even legit anymore?",

    // === FINAL WARNINGS ===
    "We don't talk about non-Makihack users",
    "All other cheats are considered vintage",
    "This match is protected by Makihack",
    "Make demos",
    "Urban legend confirmed"
];


let currentIndex = stories.length;
while (currentIndex != 0){
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [stories[currentIndex], stories[randomIndex]] = [stories[randomIndex], stories[currentIndex]];
}

const news = document.getElementById("news")

news.innerText = "";
for (story of stories) {
    const storyElm = document.createElement("div");
    storyElm.innerText = story;
    news.append(storyElm);
}
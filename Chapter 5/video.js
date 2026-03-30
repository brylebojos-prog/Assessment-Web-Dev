function playSound(id) {
    const audio = document.getElementById(id);

    if (!audio) {
        console.log("Audio not found:", id);
        return;
    }

    audio.pause();        // stop overlap
    audio.currentTime = 0;

    audio.play().catch(err => {
        console.log("Play error:", err);
    });
}

function speakText() {
    const text = document.getElementById("text").value;

    if (!text.trim()) return;

    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}

window.addEventListener("load", () => {
    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
        audio.addEventListener("loadedmetadata", () => {
            const span = document.getElementById(audio.id + "-length");

            if (span) {
                span.innerText = Math.floor(audio.duration) + "s";
            }
        });
    });
});
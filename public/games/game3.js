const gameArea = document.querySelector(".gameArea");
gameArea.innerHTML = ` <div class="container">
        <div class="box" data-key="65">A
            <p class="name">Boom</p>
        </div>
        <div class="box" data-key="83">S
            <p class="name">Clap</p>
        </div>
        <div class="box" data-key="68">D
            <p class="name">Hithat</p>
        </div>
        <div class="box" data-key="70">F
            <p class="name">Kick</p>
        </div>
        <div class="box" data-key="71">G
            <p class="name">openhat</p>
        </div>
        <div class="box" data-key="72">H
            <p class="name">Ride</p>
        </div>
        <div class="box" data-key="74">J
            <p class="name">Snare</p>
        </div>
        <div class="box" data-key="75">K
            <p class="name">Tink</p>
        </div>
        <div class="box" data-key="76">L
            <p class="name">Tom</p>
        </div>
    </div>

    <audio data-key="65" src="/audio/boom.wav"></audio>
    <audio data-key="83" src="/audio/clap.wav"></audio>
    <audio data-key="68" src="/audio/hihat.wav"></audio>
    <audio data-key="70" src="/audio/kick.wav"></audio>
    <audio data-key="71" src="/audio/openhat.wav"></audio>
    <audio data-key="72" src="/audio/ride.wav"></audio>
    <audio data-key="74" src="/audio/snare.wav"></audio>
    <audio data-key="75" src="/audio/tink.wav"></audio>
    <audio data-key="76" src="/audio/tom.wav"></audio>`;

function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);

    if (!audio) {
        return;
    }; 

    audio.currentTime = 0;
    audio.play();
    key.classList.add("clicked");
};

const removeTransition = (e) => {
    if (e.propertyName !== "transform") {
        return;
    };
    e.currentTarget.classList.remove("clicked");
};

const keys = document.querySelectorAll(".box");

keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
});


window.addEventListener("keydown", playsound);


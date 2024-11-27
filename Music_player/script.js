const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songTitle = document.getElementById('song-title');
const cover = document.getElementById('cover');
const songInfo = document.getElementById('song-info');

let isPlaying = false;
let currentSongIndex = 0;

const songs = [
    {
        title: "Song 1",
        file: "./songs/song1.mp3",
        cover: "./Image/image1.png",
        info: " LUIS FONSI | Despacito"
    },
    {
        title: "Song 2",
        file: "./songs/song2.mp3",
        cover: "./Image/image2.png",
        info: "Ed Sheeran | Shape Of You"
    },
    {
        title: "Song 3",
        file: "./songs/song3.mp3",
        cover: "./Image/image3.png",
        info: "RAUF & FAIK | LeLa LeLa Song"
    }
];

function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    songInfo.textContent = song.info;
    cover.src = song.cover;
    audio.src = song.file;
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = '▶';
    } else {
        audio.play();
        playBtn.textContent = '⏸';
    }
    isPlaying = !isPlaying;
}

function changeSong(direction) {
    currentSongIndex += direction;
    if (currentSongIndex < 0) currentSongIndex = songs.length - 1;
    if (currentSongIndex >= songs.length) currentSongIndex = 0;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeSong(-1));
nextBtn.addEventListener('click', () => changeSong(1));

// Load the first song initially
loadSong(currentSongIndex);

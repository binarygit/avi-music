import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="music"
export default class extends Controller {
  static targets = ["audioContainer", "nowPlayingDisplayer"];

  play(e) {
    this.addCurrentSongClassTo(e.currentTarget)
    this.pauseCurrentSong();
    this.playSelectedSong(e.currentTarget.dataset.href);
    this.displayNowPlaying(e.currentTarget.dataset.href);
  }

  next() {
    let currentSong = document.querySelector(".current-song")
    if (!currentSong) return

    let nextSongId = Number(currentSong.dataset.id) + 1
    let nextSong = document.getElementById(`song_${nextSongId}`)
    if (!nextSong) return

    this.play({currentTarget: nextSong})
  }

  prev() {
    let currentSong = document.querySelector(".current-song")
    if (!currentSong) return

    let prevSongId = Number(currentSong.dataset.id) - 1
    let prevSong = document.getElementById(`song_${prevSongId}`)
    if (!prevSong) return

    this.play({currentTarget: prevSong})
  }

  // private
  pauseCurrentSong() {
    let existingAudioElem = document.querySelector("audio");
    existingAudioElem.remove();
  }

  playSelectedSong(songPath) {
    let newAudioElem = document.createElement("audio");

    newAudioElem.setAttribute("src", songPath);
    newAudioElem.setAttribute("controls", "");

    this.audioContainerTarget.appendChild(newAudioElem);

    newAudioElem.play();
  }

  displayNowPlaying(songName) {
    let html = `Now Playing: <span class='text-danger'>${songName}</span>`;
    this.nowPlayingDisplayerTarget.innerHTML = html;
  }

  addCurrentSongClassTo(elem) {
    let nowPlaying = document.querySelector('.current-song')
    if (nowPlaying) {
      nowPlaying.classList.remove('current-song')
    }
    elem.classList.add('current-song')
  }
}

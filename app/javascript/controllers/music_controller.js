import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="music"
export default class extends Controller {
  static targets = ["audioContainer"];

  connect() {
  }

  play(e) {
    e.preventDefault()
    this.pauseCurrentSong();
    this.playSelectedSong(e.currentTarget.dataset.href);
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
    console.log('hello')

    newAudioElem.play();
  }
}

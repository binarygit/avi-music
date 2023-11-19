import { Controller } from "@hotwired/stimulus";
import 'mediaelement'

// Connects to data-controller="mediaplayer"
export default class extends Controller {
  connect() {
    let player = new MediaElement(this.element, {
      success: function (mediaElement, originalNode) {
        // do things
      },
    });
  }
}

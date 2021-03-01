// Import our main CSS file
import './../scss/main.scss';

// Import libraries
import Hunt from 'huntjs';

// Create a default App class
class App {
  constructor() {
    // Set variables
    this._isTouch = window.matchMedia("(pointer: coarse)").matches;

    // Get elements
    this._$introText = document.querySelector('[data-mrt-intro]');
    this._$animateViewportElements = document.querySelectorAll('[data-mrt-enter-viewport]');

    // If there are animate viewport elements
    if(this._$animateViewportElements.length>0&&!this._isTouch) {
      // Add in view animation logic
      this._animateViewportElements();
    }
  }

  _animateViewportElements() {
    // Check when in view
    new Hunt(this._$animateViewportElements, {
      enter: ($el) => {
        // Add in viewport class
        $el.classList.add('mrt-animate--in-viewport');
      }
    });
  }
}

// Create a new instance
new App();

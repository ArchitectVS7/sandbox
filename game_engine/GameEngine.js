// Placeholder GameEngine class
class GameEngine {
  constructor(state = {}) {
    this.state = state; // holds player info, world status, etc.
    this.running = false;
  }

  start() {
    this.running = true;
    // TODO: implement game loop
  }

  stop() {
    this.running = false;
  }
}

module.exports = GameEngine;

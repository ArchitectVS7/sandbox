// Basic text adventure game engine
const readline = require('readline');

class GameEngine {
  constructor(options = {}) {
    // Holds the full game state (player info, world data, etc.)
    this.state = options.state || {
      player: { location: 'start' },
      world: {},
    };

    // Parser converts raw text to action objects
    this.parseInput = options.parser || ((text) => ({ type: 'unknown', raw: text }));

    // Action handlers (move, inspect, etc.)
    this.actions = options.actions || {};

    // Display/render callback
    this.render = options.render || ((msg) => console.log(msg));

    this.running = false;
  }

  registerAction(name, handler) {
    this.actions[name] = handler;
  }

  /**
   * Process a single turn of input.
   * Parses the text, dispatches to the correct action handler, updates state,
   * and renders the resulting output.
   */
  handleInput(text) {
    const action = this.parseInput(text);
    const handler = this.actions[action.type];

    if (!handler) {
      this.render(`I don't understand "${text}".`);
      return;
    }

    const result = handler(this.state, action.params || {});

    if (result && result.state) {
      this.state = result.state;
    }

    if (result && result.message) {
      this.render(result.message);
    }
  }

  /**
   * Start a basic CLI loop for testing. Each line of input is processed as a
   * turn. Call stop() to end the loop.
   */
  startCLI() {
    this.running = true;
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const prompt = () => {
      if (!this.running) {
        rl.close();
        return;
      }
      rl.question('> ', (answer) => {
        this.handleInput(answer);
        prompt();
      });
    };
    prompt();
  }

  stop() {
    this.running = false;
  }
}

module.exports = GameEngine;

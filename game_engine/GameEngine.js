// Basic text adventure game engine with helper utilities
const readline = require('readline');
const fs = require('fs');
const loadStoryModule = require('./StoryLoader');

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

  loadStory(filePath) {
    const storyState = loadStoryModule(filePath);
    this.state = {
      ...this.state,
      ...storyState,
      player: { ...this.state.player, ...storyState.player },
      world: { ...this.state.world, ...storyState.world },
    };
  }

  saveState(filePath) {
    fs.writeFileSync(filePath, JSON.stringify(this.state, null, 2));
  }

  loadState(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    this.state = JSON.parse(data);
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

    if (result && result.quit) {
      this.stop();
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

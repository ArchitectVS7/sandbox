const GameEngine = require('./GameEngine');
const parseInput = require('./InputParser');
const actions = require('./ActionHandlers');
const { render } = require('./Display');

// Example initialization
const engine = new GameEngine();

// Placeholder for connecting modules
module.exports = {
  engine,
  parseInput,
  actions,
  render,
};

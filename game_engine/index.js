const GameEngine = require('./GameEngine');
const parseInput = require('./InputParser');
const actionHandlers = require('./ActionHandlers');
const { render } = require('./Display');

// Create an engine instance wired with the default parser and display.
const engine = new GameEngine({
  parser: parseInput,
  actions: actionHandlers,
  render,
});

module.exports = {
  GameEngine,
  parseInput,
  actions: actionHandlers,
  render,
  engine,
};

// If executed directly via `node game_engine`, start the CLI loop.
if (require.main === module) {
  engine.render('Welcome to the text adventure!');
  engine.startCLI();
}

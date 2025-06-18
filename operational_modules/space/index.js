module.exports = {
  actions: {
    move: require('./actions/move'),
    attack: require('./actions/attack'),
    inspect: require('./actions/inspect'),
    pickup: require('./actions/pickup'),
  },
  parseInput: require('./parser'),
};

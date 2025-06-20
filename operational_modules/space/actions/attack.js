module.exports = function attack(state, params = {}) {
  const target = params.target || 'empty space';
  return { state, message: `You fire at ${target}, but nothing happens.` };
};

module.exports = function attack(state, params = {}) {
  const target = params.target || 'the darkness';
  return { state, message: `You attack ${target}, but nothing happens.` };
};

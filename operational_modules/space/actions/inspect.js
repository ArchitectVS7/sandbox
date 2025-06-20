module.exports = function inspect(state, params = {}) {
  const target = params.target;
  const ship = state.world.ships?.[state.player.ship];
  if (!target) {
    return { state, message: ship?.description || 'All systems nominal.' };
  }
  const item = ship?.items?.find(i => i.name === target);
  if (item) {
    return { state, message: item.description };
  }
  return { state, message: "Sensors detect nothing." };
};

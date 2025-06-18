module.exports = function move(state, params = {}) {
  const direction = params.direction;
  const ship = state.world.ships?.[state.player.ship];
  const next = ship?.routes?.[direction];
  if (!next) {
    return { state, message: "Course unavailable." };
  }
  state.player.ship = next;
  const desc = state.world.ships?.[next]?.description || `You travel ${direction}.`;
  return { state, message: desc };
};

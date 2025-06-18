module.exports = function move(state, params = {}) {
  const direction = params.direction;
  const room = state.world.rooms?.[state.player.location];
  const next = room?.exits?.[direction];
  if (!next) {
    return { state, message: "You can't go that way." };
  }
  state.player.location = next;
  const desc = state.world.rooms?.[next]?.description || `You move ${direction}.`;
  return { state, message: desc };
};

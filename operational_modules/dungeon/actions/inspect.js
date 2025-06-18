module.exports = function inspect(state, params = {}) {
  const target = params.target;
  const room = state.world.rooms?.[state.player.location];
  if (!target) {
    return { state, message: room?.description || 'There is nothing to see.' };
  }
  const item = room?.items?.find(i => i.name === target);
  if (item) {
    return { state, message: item.description };
  }
  return { state, message: "You don't see that here." };
};

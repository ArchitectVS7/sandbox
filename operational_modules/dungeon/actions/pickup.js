module.exports = function pickup(state, params = {}) {
  const itemName = params.item;
  const room = state.world.rooms?.[state.player.location];
  if (!itemName || !room) {
    return { state, message: 'Take what?' };
  }
  const index = room.items?.findIndex(i => i.name === itemName);
  if (index === -1 || index === undefined) {
    return { state, message: "You don't see that here." };
  }
  const [item] = room.items.splice(index, 1);
  state.player.inventory = state.player.inventory || [];
  state.player.inventory.push(item);
  return { state, message: `You pick up the ${item.name}.` };
};

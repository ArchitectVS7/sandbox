module.exports = function pickup(state, params = {}) {
  const itemName = params.item;
  const ship = state.world.ships?.[state.player.ship];
  if (!itemName || !ship) {
    return { state, message: 'Collect what?' };
  }
  const index = ship.items?.findIndex(i => i.name === itemName);
  if (index === -1 || index === undefined) {
    return { state, message: 'Item not found.' };
  }
  const [item] = ship.items.splice(index, 1);
  state.player.cargo = state.player.cargo || [];
  state.player.cargo.push(item);
  return { state, message: `Collected ${item.name}.` };
};

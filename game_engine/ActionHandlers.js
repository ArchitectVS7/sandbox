// Basic set of action handlers for the engine

const actions = {
  /**
   * Move the player to an adjacent room if possible.
   */
  move(state, params = {}) {
    const direction = params.direction;
    const room = state.world.rooms?.[state.player.location];
    const next = room?.exits?.[direction];

    if (!next) {
      return { state, message: "You can't go that way." };
    }

    state.player.location = next;
    const desc = state.world.rooms[next]?.description || 'You arrive somewhere.';
    return { state, message: desc };
  },

  /**
   * Inspect the current room or an item (very simple implementation).
   */
  inspect(state, params = {}) {
    const target = params.target;
    const room = state.world.rooms?.[state.player.location];

    if (!target) {
      return { state, message: room?.description || 'Nothing of interest.' };
    }

    const item = room?.items?.find((i) => i.name === target);
    if (item) {
      return { state, message: item.description };
    }

    return { state, message: "You don't see that here." };
  },

  /**
   * Pick up an item from the current room.
   */
  pickup(state, params = {}) {
    const itemName = params.item;
    const room = state.world.rooms?.[state.player.location];
    if (!itemName || !room) {
      return { state, message: "Take what?" };
    }

    const index = room.items?.findIndex((i) => i.name === itemName);
    if (index === -1 || index === undefined) {
      return { state, message: "You don't see that here." };
    }

    const [item] = room.items.splice(index, 1);
    state.player.inventory = state.player.inventory || [];
    state.player.inventory.push(item);
    return { state, message: `You pick up the ${item.name}.` };
  },
};

module.exports = actions;

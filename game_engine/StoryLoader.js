const fs = require('fs');

function loadStoryModule(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  const state = { world: {}, player: {} };

  if (data.rooms) {
    state.world.rooms = data.rooms;
    state.player.location = Object.keys(data.rooms)[0];
  }
  if (data.ships) {
    state.world.ships = data.ships;
    state.player.ship = Object.keys(data.ships)[0];
  }
  if (data.npcs) {
    state.world.npcs = data.npcs;
  }
  if (data.items) {
    state.world.items = data.items;
  }

  return state;
}

module.exports = loadStoryModule;

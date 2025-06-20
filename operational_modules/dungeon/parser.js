const synonyms = {
  move: ['go', 'move', 'walk'],
  attack: ['attack', 'hit', 'strike'],
  inspect: ['look', 'inspect', 'examine'],
  pickup: ['take', 'pickup', 'grab'],
  quit: ['quit', 'exit']
};

function parseInput(input = '') {
  const text = input.trim().toLowerCase();
  if (!text) return { type: 'none' };
  const [verb, ...rest] = text.split(/\s+/);
  const arg = rest.join(' ');
  for (const [type, words] of Object.entries(synonyms)) {
    if (words.includes(verb)) {
      const params = {};
      if (type === 'move') params.direction = rest[0];
      else if (type === 'attack') params.target = arg;
      else if (type === 'inspect') params.target = arg || null;
      else if (type === 'pickup') params.item = arg;
      return { type, params };
    }
  }
  return { type: 'unknown', raw: input };
}

module.exports = parseInput;

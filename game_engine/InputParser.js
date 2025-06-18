// Basic command parser for the text adventure engine

/**
 * Convert raw user text into an action object that the engine understands.
 * @param {string} input
 * @returns {{type: string, params: object}}
 */
function parseInput(input) {
  const text = (input || '').trim().toLowerCase();

  if (text === '') return { type: 'none' };

  const [verb, ...rest] = text.split(/\s+/);
  const arg = rest.join(' ');

  switch (verb) {
    case 'go':
    case 'move':
      return { type: 'move', params: { direction: rest[0] } };
    case 'look':
    case 'inspect':
      return { type: 'inspect', params: { target: arg || null } };
    case 'take':
    case 'pickup':
      return { type: 'pickup', params: { item: arg } };
    case 'attack':
    case 'hit':
      return { type: 'attack', params: { target: arg } };
    case 'quit':
      return { type: 'quit' };
    default:
      return { type: 'unknown', raw: input };
  }
}

module.exports = parseInput;

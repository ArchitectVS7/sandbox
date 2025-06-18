// Simple display layer used by the GameEngine

/**
 * Render output to the browser or console. If an element with id `output`
 * exists, append the text to it. Otherwise fall back to console.log.
 */
function render(output) {
  if (typeof document !== 'undefined') {
    const box = document.getElementById('output');
    if (box) {
      box.textContent += output + '\n';
      return;
    }
  }
  console.log(output);
}

module.exports = { render };

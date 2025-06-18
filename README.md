# Sandbox

This repository contains a small text adventure engine located in the `game_engine` directory. The engine supports a pluggable parser, action handlers and a basic display layer. Each file represents a major component of the architecture:

- `GameEngine.js`: central game loop and state container
- `InputParser.js`: command parser converting user text to actions
- `ActionHandlers.js`: default action resolution functions
- `Display.js`: output/rendering helper (console or DOM)
- `index.js`: convenience entry that wires the pieces together

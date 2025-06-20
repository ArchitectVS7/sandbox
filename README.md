# Sandbox

This repository contains a small text adventure engine located in the `game_engine` directory. The engine supports a pluggable parser, action handlers and a basic display layer. Each file represents a major component of the architecture:

- `GameEngine.js`: central game loop and state container
- `InputParser.js`: command parser converting user text to actions
- `ActionHandlers.js`: default action resolution functions
- `Display.js`: output/rendering helper (console or DOM)
- `StoryLoader.js`: helper to load story JSON files into engine state
- `index.js`: convenience entry that wires the pieces together

Additional operational modules are provided in the `operational_modules` folder. These demonstrate how different action sets and parsers can be swapped in:

- `dungeon`: classic fantasy commands (go, attack, look, take)
- `space`: space mission verbs (fly, shoot, scan, collect)

Story modules located in the `story_modules` folder define the worlds used for testing. Each JSON file lists rooms (or ships), starting items and NPCs.

- `dungeon.json`: small fantasy dungeon with rooms like the hall, armory and courtyard
- `space.json`: starship adventure featuring locations such as the bridge and engine room

A small `browser_bundle.js` and `index.html` demonstrate how the engine can run in a browser. The bundle exposes a global `TextAdventure` object used by the demo page.

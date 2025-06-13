import { eventBus } from './eventBus.js';
import { generateMaze } from '../algorithms/mazeGenerator.js';
import { WallFollower } from '../algorithms/aiNavigator.js';
import { initScene, updateAIPosition } from '../3d/scene.js';
import { CONFIG } from '../config.js';

let maze, ai;

function createControls() {
    const container = document.getElementById('controls');
    const genBtn = document.createElement('button');
    genBtn.textContent = 'Generate Maze';
    genBtn.onclick = () => {
        maze = generateMaze();
        initScene(maze);
        ai = new WallFollower(maze);
    };
    const stepBtn = document.createElement('button');
    stepBtn.textContent = 'AI Step';
    stepBtn.onclick = () => {
        if (ai) ai.step();
    };
    container.appendChild(genBtn);
    container.appendChild(stepBtn);
}

export function setupControls() {
    createControls();
    eventBus.on('aiStep', pos => updateAIPosition(pos.x, pos.y));
}

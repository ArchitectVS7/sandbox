import { createGrid, shuffle } from '../utils/mazeUtils.js';
import { CONFIG } from '../config.js';
import { eventBus } from '../ui/eventBus.js';

export function generateMaze() {
    const grid = createGrid(CONFIG.mazeWidth, CONFIG.mazeHeight);
    const stack = [];
    const start = grid[0][0];
    start.visited = true;
    stack.push(start);

    while (stack.length > 0) {
        const current = stack.pop();
        const neighbors = getUnvisitedNeighbors(current, grid);
        if (neighbors.length > 0) {
            stack.push(current);
            shuffle(neighbors);
            const next = neighbors[0];
            removeWall(current, next);
            next.visited = true;
            stack.push(next);
            eventBus.emit('mazeStep', { current, next });
        }
    }

    return grid;
}

function getUnvisitedNeighbors(cell, grid) {
    const neighbors = [];
    const { x, y } = cell;
    if (y > 0 && !grid[y-1][x].visited) neighbors.push(grid[y-1][x]);
    if (x < grid[0].length - 1 && !grid[y][x+1].visited) neighbors.push(grid[y][x+1]);
    if (y < grid.length - 1 && !grid[y+1][x].visited) neighbors.push(grid[y+1][x]);
    if (x > 0 && !grid[y][x-1].visited) neighbors.push(grid[y][x-1]);
    return neighbors;
}

function removeWall(a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    if (dx === 1) {
        a.walls[1] = false;
        b.walls[3] = false;
    } else if (dx === -1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (dy === 1) {
        a.walls[2] = false;
        b.walls[0] = false;
    } else if (dy === -1) {
        a.walls[0] = false;
        b.walls[2] = false;
    }
}

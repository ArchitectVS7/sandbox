import { eventBus } from '../ui/eventBus.js';
import { CONFIG } from '../config.js';

export class WallFollower {
    constructor(maze) {
        this.maze = maze;
        this.x = 0;
        this.y = 0;
        this.dir = 0; // 0: up, 1:right,2:down,3:left
        this.path = [];
    }

    step() {
        this.path.push({ x: this.x, y: this.y });
        for (let i = 0; i < 4; i++) {
            const dir = (this.dir + 3 + i) % 4; // turn left first
            if (!this.maze[this.y][this.x].walls[dir]) {
                this.move(dir);
                this.dir = dir;
                eventBus.emit('aiStep', { x: this.x, y: this.y });
                return;
            }
        }
    }

    move(dir) {
        if (dir === 0) this.y--; // up
        if (dir === 1) this.x++; // right
        if (dir === 2) this.y++; // down
        if (dir === 3) this.x--; // left
    }
}

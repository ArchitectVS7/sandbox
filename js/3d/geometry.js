import { CONFIG } from '../config.js';

export function createMazeMesh(maze) {
    const group = new THREE.Group();
    const wallGeo = new THREE.BoxGeometry(CONFIG.cellSize, 1, CONFIG.cellSize);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x5555ff });

    maze.forEach(row => {
        row.forEach(cell => {
            const { x, y, walls } = cell;
            const half = CONFIG.cellSize / 2;
            if (walls[0]) {
                const wall = new THREE.Mesh(wallGeo, wallMat);
                wall.position.set(x * CONFIG.cellSize, 0.5, y * CONFIG.cellSize - half);
                group.add(wall);
            }
            if (walls[1]) {
                const wall = new THREE.Mesh(wallGeo, wallMat);
                wall.position.set(x * CONFIG.cellSize + half, 0.5, y * CONFIG.cellSize);
                wall.rotation.y = Math.PI / 2;
                group.add(wall);
            }
            if (walls[2]) {
                const wall = new THREE.Mesh(wallGeo, wallMat);
                wall.position.set(x * CONFIG.cellSize, 0.5, y * CONFIG.cellSize + half);
                group.add(wall);
            }
            if (walls[3]) {
                const wall = new THREE.Mesh(wallGeo, wallMat);
                wall.position.set(x * CONFIG.cellSize - half, 0.5, y * CONFIG.cellSize);
                wall.rotation.y = Math.PI / 2;
                group.add(wall);
            }
        });
    });
    return group;
}

export function createAIMesh() {
    const geometry = new THREE.SphereGeometry(CONFIG.cellSize / 4, 16, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xff5555 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 0.5;
    return mesh;
}

import { CONFIG } from '../config.js';
import { createMazeMesh, createAIMesh } from './geometry.js';

let scene, camera, renderer, aiMesh;

export function initScene(maze) {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(CONFIG.mazeWidth, CONFIG.mazeHeight * 1.5, CONFIG.mazeWidth);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('renderer-container').appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    const mazeMesh = createMazeMesh(maze);
    scene.add(mazeMesh);

    aiMesh = createAIMesh();
    scene.add(aiMesh);

    window.addEventListener('resize', onWindowResize);
    animate();
}

export function updateAIPosition(x, y) {
    aiMesh.position.set(x * CONFIG.cellSize, 0.5, y * CONFIG.cellSize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

import * as THREE from './three.js';

// Crear una escena 
const scene = new THREE.Scene();
// Crear una cámara con una perspectiva
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// Crear un renderer 
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
// Crea el elemento HTML para visualizar la escena 3D
document.body.appendChild( renderer.domElement );
// Dibujar un cuboide
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// Crea un material para la geometría
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// Una vez obtenida la forma y el material, dibuja la malla
const cube = new THREE.Mesh( geometry, material );
// Agrega el cubo a la escena 
scene.add( cube );

camera.position.z = 5;

let currentColor = new THREE.Color(0x00ff00);
let targetColor = new THREE.Color(Math.random(), Math.random(), Math.random());
let lerpFactor = 0.0;

function animate() {
	// Rotar el cubo
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	// Interpolar el color
	lerpFactor += 0.003;
	if (lerpFactor > 1.0) {
		lerpFactor = 0.0;
		currentColor = targetColor;
		targetColor = new THREE.Color(Math.random(), Math.random(), Math.random());
	}
	material.color.copy(currentColor).lerp(targetColor, lerpFactor);

	// Renderizar la escena
	renderer.render( scene, camera );
}

// Iniciar la animación
animate();

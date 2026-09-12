
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

//cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xc91a1a } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//Set cube initial position
cube.position.x = 4.5;
cube.position.y = 4.5;


//icosahedron
const geometry2 = new THREE.RingGeometry( 1, 2, 20 );
const material2 = new THREE.MeshBasicMaterial( { color: 0x14e34b, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry2, material2 );
scene.add( mesh );

//tetrahedron
const geometry3 = new THREE.TetrahedronGeometry();
const material3 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const tetrahedron = new THREE.Mesh( geometry3, material3 );
scene.add( tetrahedron );

//Set tetrahedron initial position
tetrahedron.position.y -= 4.5;
tetrahedron.position.x -= 4.5;


//capsule
const geometry4 = new THREE.CapsuleGeometry( 1, 1, 4, 8, 1 );
const material4 = new THREE.MeshBasicMaterial( { color: 0x090699 } );
const capsule = new THREE.Mesh( geometry4, material4 );
scene.add( capsule );

//Set capsule initial position
capsule.position.x = 6.5;


//icosahedron
const geometry5 = new THREE.IcosahedronGeometry();
const material5 = new THREE.MeshBasicMaterial( { color: 0xb50e75 } );
const icosahedron = new THREE.Mesh( geometry5, material5 );
scene.add( icosahedron );


//Set icosahedron initial position
icosahedron.position.x = -6.5;



camera.position.z = 10;

function animate( time ) {

  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;


  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 2000;


  tetrahedron.rotation.x = time / 2000;
  tetrahedron.rotation.y = time / 2000;


  capsule.rotation.x = time / 2000;
  capsule.rotation.y = time / 2000;


  icosahedron.rotation.x = time / 2000;
  icosahedron.rotation.y = time / 2000;


  renderer.render( scene, camera );

}
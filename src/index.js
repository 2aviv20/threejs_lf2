
import * as THREE from 'three';
import {Controls} from './controls';

//global vars
let scene,camera,renderer;

const init = function(){
    scene = new THREE.Scene();
    // camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );    
    camera = new THREE.PerspectiveCamera( 75, 794 / 398, 0.1, 1000 );    
    camera.position.z = 5;
    renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setSize( 794,398 );
    document.body.appendChild( renderer.domElement );
    
}

const createBg = function (){
    // const map = new THREE.TextureLoader().load( "textures/level2bg.png" );
    // const material = new THREE.SpriteMaterial( { map: map, color: 0xffffff } );

    // const geometry = new THREE.PlaneGeometry( 5, 20, 32 );
    // const plane = new THREE.Mesh( geometry, material );
    // scene.add( plane );

    // const sprite = new THREE.Sprite( material );
    // sprite.scale.set(794,398,1);
    // sprite.center.set( 0.0, 1.0 );
    // scene.add( sprite );
     
    scene.background =  new THREE.TextureLoader().load( "textures/level2bg.png" );
}

const createSprite = function (){
    let spriteMap = new THREE.TextureLoader().load( 'textures/fighter.png' );
    let spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xf0f0f0 } );
    let sprite = new THREE.Sprite( spriteMaterial );

    sprite.scale.set(794,551,1);
    scene.add( sprite );
}

const createSquere = function (){
    const geometry = new THREE.PlaneGeometry( 20, 20, 1 );
    const map = new THREE.TextureLoader().load( "textures/level2bg.png" );
    // const material = new THREE.SpriteMaterial( { map: map, color: 0xffff00 } );
    const material = new THREE.MeshBasicMaterial( {map: map, color: 0xffff00} );
    const plane = new THREE.Mesh( geometry, material );
    scene.add( plane );
    
}

const animate = function () {
    requestAnimationFrame( animate );

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

init();
Controls();
createBg();
// createSquere();
// createSprite();
// createCube();
animate();

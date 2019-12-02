/**
 * Generated from 'examples/jsm/loaders/VRMLoader.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/GLTFLoader.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/GLTFLoader.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE));
}(this, function (exports, THREE, GLTFLoader_js) { 'use strict';

	/**
	 * @author Takahiro / https://github.com/takahirox
	 */

	// VRM Specification: https://dwango.github.io/vrm/vrm_spec/
	//
	// VRM is based on glTF 2.0 and VRM extension is defined
	// in top-level json.extensions.VRM

	var VRMLoader = ( function () {

		function VRMLoader( manager ) {

			if ( GLTFLoader_js.GLTFLoader === undefined ) {

				throw new Error( 'THREE.VRMLoader: Import GLTFLoader.' );

			}

			THREE.Loader.call( this, manager );

			this.gltfLoader = new GLTFLoader_js.GLTFLoader( this.manager );

		}

		VRMLoader.prototype = Object.assign( Object.create( THREE.Loader.prototype ), {

			constructor: VRMLoader,

			load: function ( url, onLoad, onProgress, onError ) {

				var scope = this;

				this.gltfLoader.load( url, function ( gltf ) {

					scope.parse( gltf, onLoad );

				}, onProgress, onError );

			},

			setDRACOLoader: function ( dracoLoader ) {

				this.glTFLoader.setDRACOLoader( dracoLoader );
				return this;

			},

			parse: function ( gltf, onLoad ) {

				// var gltfParser = gltf.parser;
				// var gltfExtensions = gltf.userData.gltfExtensions || {};
				// var vrmExtension = gltfExtensions.VRM || {};

				// handle VRM Extension here

				onLoad( gltf );

			}

		} );

		return VRMLoader;

	} )();

	exports.VRMLoader = VRMLoader;

}));

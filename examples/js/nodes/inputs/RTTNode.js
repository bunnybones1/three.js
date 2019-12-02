/**
 * Generated from 'examples/jsm/nodes/inputs/RTTNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeBuilder.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/NodeMaterial.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/TextureNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeBuilder.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/NodeMaterial.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/TextureNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, THREE, NodeBuilder_js, NodeMaterial_js, TextureNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function RTTNode( width, height, input, options ) {

		options = options || {};

		this.input = input;

		this.clear = options.clear !== undefined ? options.clear : true;

		this.renderTarget = new THREE.WebGLRenderTarget( width, height, options );

		this.material = new NodeMaterial_js.NodeMaterial();

		this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
		this.scene = new THREE.Scene();

		this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), this.material );
		this.quad.frustumCulled = false; // Avoid getting clipped
		this.scene.add( this.quad );

		this.render = true;

		TextureNode_js.TextureNode.call( this, this.renderTarget.texture );

	}

	RTTNode.prototype = Object.create( TextureNode_js.TextureNode.prototype );
	RTTNode.prototype.constructor = RTTNode;
	RTTNode.prototype.nodeType = "RTT";

	RTTNode.prototype.build = function ( builder, output, uuid ) {

		var rttBuilder = new NodeBuilder_js.NodeBuilder();
		rttBuilder.nodes = builder.nodes;
		rttBuilder.updaters = builder.updaters;

		this.material.fragment.value = this.input;
		this.material.build( { builder: rttBuilder } );

		return TextureNode_js.TextureNode.prototype.build.call( this, builder, output, uuid );

	};

	RTTNode.prototype.updateFramesaveTo = function ( frame ) {

		this.saveTo.render = false;

		if ( this.saveTo !== this.saveToCurrent ) {

			if ( this.saveToMaterial ) this.saveToMaterial.dispose();

			var material = new NodeMaterial_js.NodeMaterial();
			material.fragment.value = this;
			material.build();

			var scene = new THREE.Scene();

			var quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), material );
			quad.frustumCulled = false; // Avoid getting clipped
			scene.add( quad );

			this.saveToScene = scene;
			this.saveToMaterial = material;

		}

		this.saveToCurrent = this.saveTo;

		frame.renderer.setRenderTarget( this.saveTo.renderTarget );
		if ( this.saveTo.clear ) frame.renderer.clear();
		frame.renderer.render( this.saveToScene, this.camera );

	};

	RTTNode.prototype.updateFrame = function ( frame ) {

		if ( frame.renderer ) {

			// from the second frame

			if ( this.saveTo && this.saveTo.render === false ) {

				this.updateFramesaveTo( frame );

			}

			if ( this.render ) {

				if ( this.material.uniforms.renderTexture ) {

					this.material.uniforms.renderTexture.value = frame.renderTexture;

				}

				frame.renderer.setRenderTarget( this.renderTarget );
				if ( this.clear ) frame.renderer.clear();
				frame.renderer.render( this.scene, this.camera );

			}

			// first frame

			if ( this.saveTo && this.saveTo.render === true ) {

				this.updateFramesaveTo( frame );

			}

		} else {

			console.warn( "RTTNode need a renderer in NodeFrame" );

		}

	};

	RTTNode.prototype.copy = function ( source ) {

		TextureNode_js.TextureNode.prototype.copy.call( this, source );

		this.saveTo = source.saveTo;

		return this;

	};

	RTTNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = TextureNode_js.TextureNode.prototype.toJSON.call( this, meta );

			if ( this.saveTo ) data.saveTo = this.saveTo.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.RTTNode = RTTNode;

}));

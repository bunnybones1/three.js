/**
 * Generated from 'examples/jsm/nodes/postprocessing/NodePass.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/postprocessing/ShaderPass.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/NodeMaterial.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/ScreenNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/postprocessing/ShaderPass.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/NodeMaterial.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/ScreenNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, THREE, ShaderPass_js, NodeMaterial_js, ScreenNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function NodePass() {

		ShaderPass_js.ShaderPass.call( this );

		this.name = "";
		this.uuid = THREE.Math.generateUUID();

		this.userData = {};

		this.textureID = 'renderTexture';

		this.input = new ScreenNode_js.ScreenNode();

		this.material = new NodeMaterial_js.NodeMaterial();

		this.needsUpdate = true;

	}

	NodePass.prototype = Object.create( ShaderPass_js.ShaderPass.prototype );
	NodePass.prototype.constructor = NodePass;

	NodePass.prototype.render = function () {

		if ( this.needsUpdate ) {

			this.material.dispose();

			this.material.fragment.value = this.input;

			this.needsUpdate = false;

		}

		this.uniforms = this.material.uniforms;

		ShaderPass_js.ShaderPass.prototype.render.apply( this, arguments );

	};

	NodePass.prototype.copy = function ( source ) {

		this.input = source.input;

		return this;

	};

	NodePass.prototype.toJSON = function ( meta ) {

		var isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( isRootObject ) {

			meta = {
				nodes: {}
			};

		}

		if ( meta && ! meta.passes ) meta.passes = {};

		if ( ! meta.passes[ this.uuid ] ) {

			var data = {};

			data.uuid = this.uuid;
			data.type = "NodePass";

			meta.passes[ this.uuid ] = data;

			if ( this.name !== "" ) data.name = this.name;

			if ( JSON.stringify( this.userData ) !== '{}' ) data.userData = this.userData;

			data.input = this.input.toJSON( meta ).uuid;

		}

		meta.pass = this.uuid;

		return meta;

	};

	exports.NodePass = NodePass;

}));

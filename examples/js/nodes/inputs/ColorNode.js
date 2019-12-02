/**
 * Generated from 'examples/jsm/nodes/inputs/ColorNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE));
}(this, function (exports, THREE, InputNode_js, NodeUtils_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function ColorNode( color, g, b ) {

		InputNode_js.InputNode.call( this, 'c' );

		this.value = color instanceof THREE.Color ? color : new THREE.Color( color || 0, g, b );

	}

	ColorNode.prototype = Object.create( InputNode_js.InputNode.prototype );
	ColorNode.prototype.constructor = ColorNode;
	ColorNode.prototype.nodeType = "Color";

	NodeUtils_js.NodeUtils.addShortcuts( ColorNode.prototype, 'value', [ 'r', 'g', 'b' ] );

	ColorNode.prototype.generateReadonly = function ( builder, output, uuid, type/*, ns, needsUpdate */ ) {

		return builder.format( "vec3( " + this.r + ", " + this.g + ", " + this.b + " )", type, output );

	};

	ColorNode.prototype.copy = function ( source ) {

		InputNode_js.InputNode.prototype.copy.call( this, source );

		this.value.copy( source );

		return this;

	};

	ColorNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.r = this.r;
			data.g = this.g;
			data.b = this.b;

			if ( this.readonly === true ) data.readonly = true;

		}

		return data;

	};

	exports.ColorNode = ColorNode;

}));

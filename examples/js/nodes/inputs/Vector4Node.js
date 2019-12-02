/**
 * Generated from 'examples/jsm/nodes/inputs/Vector4Node.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE));
}(this, function (exports, THREE, InputNode_js, NodeUtils_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function Vector4Node( x, y, z, w ) {

		InputNode_js.InputNode.call( this, 'v4' );

		this.value = x instanceof THREE.Vector4 ? x : new THREE.Vector4( x, y, z, w );

	}

	Vector4Node.prototype = Object.create( InputNode_js.InputNode.prototype );
	Vector4Node.prototype.constructor = Vector4Node;
	Vector4Node.prototype.nodeType = "Vector4";

	NodeUtils_js.NodeUtils.addShortcuts( Vector4Node.prototype, 'value', [ 'x', 'y', 'z', 'w' ] );

	Vector4Node.prototype.generateReadonly = function ( builder, output, uuid, type/*, ns, needsUpdate*/ ) {

		return builder.format( "vec4( " + this.x + ", " + this.y + ", " + this.z + ", " + this.w + " )", type, output );

	};

	Vector4Node.prototype.copy = function ( source ) {

		InputNode_js.InputNode.prototype.copy.call( this, source );

		this.value.copy( source );

		return this;

	};

	Vector4Node.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.x = this.x;
			data.y = this.y;
			data.z = this.z;
			data.w = this.w;

			if ( this.readonly === true ) data.readonly = true;

		}

		return data;

	};

	exports.Vector4Node = Vector4Node;

}));

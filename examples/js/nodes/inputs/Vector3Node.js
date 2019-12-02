/**
 * Generated from 'examples/jsm/nodes/inputs/Vector3Node.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE));
}(this, function (exports, THREE, InputNode_js, NodeUtils_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function Vector3Node( x, y, z ) {

		InputNode_js.InputNode.call( this, 'v3' );

		this.value = x instanceof THREE.Vector3 ? x : new THREE.Vector3( x, y, z );

	}

	Vector3Node.prototype = Object.create( InputNode_js.InputNode.prototype );
	Vector3Node.prototype.constructor = Vector3Node;
	Vector3Node.prototype.nodeType = "Vector3";

	NodeUtils_js.NodeUtils.addShortcuts( Vector3Node.prototype, 'value', [ 'x', 'y', 'z' ] );

	Vector3Node.prototype.generateReadonly = function ( builder, output, uuid, type/*, ns, needsUpdate*/ ) {

		return builder.format( "vec3( " + this.x + ", " + this.y + ", " + this.z + " )", type, output );

	};

	Vector3Node.prototype.copy = function ( source ) {

		InputNode_js.InputNode.prototype.copy.call( this, source );

		this.value.copy( source );

		return this;

	};

	Vector3Node.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.x = this.x;
			data.y = this.y;
			data.z = this.z;

			if ( this.readonly === true ) data.readonly = true;

		}

		return data;

	};

	exports.Vector3Node = Vector3Node;

}));

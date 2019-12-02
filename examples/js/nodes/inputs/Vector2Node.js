/**
 * Generated from 'examples/jsm/nodes/inputs/Vector2Node.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE));
}(this, function (exports, THREE, InputNode_js, NodeUtils_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function Vector2Node( x, y ) {

		InputNode_js.InputNode.call( this, 'v2' );

		this.value = x instanceof THREE.Vector2 ? x : new THREE.Vector2( x, y );

	}

	Vector2Node.prototype = Object.create( InputNode_js.InputNode.prototype );
	Vector2Node.prototype.constructor = Vector2Node;
	Vector2Node.prototype.nodeType = "Vector2";

	NodeUtils_js.NodeUtils.addShortcuts( Vector2Node.prototype, 'value', [ 'x', 'y' ] );

	Vector2Node.prototype.generateReadonly = function ( builder, output, uuid, type/*, ns, needsUpdate*/ ) {

		return builder.format( "vec2( " + this.x + ", " + this.y + " )", type, output );

	};

	Vector2Node.prototype.copy = function ( source ) {

		InputNode_js.InputNode.prototype.copy.call( this, source );

		this.value.copy( source );

		return this;

	};

	Vector2Node.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.x = this.x;
			data.y = this.y;

			if ( this.readonly === true ) data.readonly = true;

		}

		return data;

	};

	exports.Vector2Node = Vector2Node;

}));

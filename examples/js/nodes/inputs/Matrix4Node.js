/**
 * Generated from 'examples/jsm/nodes/inputs/Matrix4Node.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE));
}(this, function (exports, THREE, InputNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function Matrix4Node( matrix ) {

		InputNode_js.InputNode.call( this, 'm4' );

		this.value = matrix || new THREE.Matrix4();

	}

	Matrix4Node.prototype = Object.create( InputNode_js.InputNode.prototype );
	Matrix4Node.prototype.constructor = Matrix4Node;
	Matrix4Node.prototype.nodeType = "Matrix4";

	Object.defineProperties( Matrix4Node.prototype, {

		elements: {

			set: function ( val ) {

				this.value.elements = val;

			},

			get: function () {

				return this.value.elements;

			}

		}

	} );

	Matrix4Node.prototype.generateReadonly = function ( builder, output, uuid, type /*, ns, needsUpdate */ ) {

		return builder.format( "mat4( " + this.value.elements.join( ", " ) + " )", type, output );

	};

	Matrix4Node.prototype.copy = function ( source ) {

		InputNode_js.InputNode.prototype.copy.call( this, source );

		this.scope.value.fromArray( source.elements );

		return this;

	};

	Matrix4Node.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.elements = this.value.elements.concat();

		}

		return data;

	};

	exports.Matrix4Node = Matrix4Node;

}));

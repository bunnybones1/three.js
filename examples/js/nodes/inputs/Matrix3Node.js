/**
 * Generated from 'examples/jsm/nodes/inputs/Matrix3Node.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE));
}(this, function (exports, THREE, InputNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function Matrix3Node( matrix ) {

		InputNode_js.InputNode.call( this, 'm3' );

		this.value = matrix || new THREE.Matrix3();

	}

	Matrix3Node.prototype = Object.create( InputNode_js.InputNode.prototype );
	Matrix3Node.prototype.constructor = Matrix3Node;
	Matrix3Node.prototype.nodeType = "Matrix3";

	Object.defineProperties( Matrix3Node.prototype, {

		elements: {

			set: function ( val ) {

				this.value.elements = val;

			},

			get: function () {

				return this.value.elements;

			}

		}

	} );

	Matrix3Node.prototype.generateReadonly = function ( builder, output, uuid, type/*, ns, needsUpdate */ ) {

		return builder.format( "mat3( " + this.value.elements.join( ", " ) + " )", type, output );

	};


	Matrix3Node.prototype.copy = function ( source ) {

		InputNode_js.InputNode.prototype.copy.call( this, source );

		this.value.fromArray( source.elements );

		return this;

	};

	Matrix3Node.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.elements = this.value.elements.concat();

		}

		return data;

	};

	exports.Matrix3Node = Matrix3Node;

}));

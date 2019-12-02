/**
 * Generated from 'examples/jsm/nodes/inputs/IntNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, InputNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function IntNode( value ) {

		InputNode_js.InputNode.call( this, 'i' );

		this.value = Math.floor( value || 0 );

	}

	IntNode.prototype = Object.create( InputNode_js.InputNode.prototype );
	IntNode.prototype.constructor = IntNode;
	IntNode.prototype.nodeType = "Int";

	IntNode.prototype.generateReadonly = function ( builder, output, uuid, type/*, ns, needsUpdate */ ) {

		return builder.format( this.value, type, output );

	};

	IntNode.prototype.copy = function ( source ) {

		InputNode_js.InputNode.prototype.copy.call( this, source );

		this.value = source.value;

		return this;

	};

	IntNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.value = this.value;

			if ( this.readonly === true ) data.readonly = true;

		}

		return data;

	};

	exports.IntNode = IntNode;

}));

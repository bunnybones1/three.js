/**
 * Generated from 'examples/jsm/nodes/inputs/BoolNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, InputNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function BoolNode( value ) {

		InputNode_js.InputNode.call( this, 'b' );

		this.value = Boolean( value );

	}

	BoolNode.prototype = Object.create( InputNode_js.InputNode.prototype );
	BoolNode.prototype.constructor = BoolNode;
	BoolNode.prototype.nodeType = "Bool";

	BoolNode.prototype.generateReadonly = function ( builder, output, uuid, type/*, ns, needsUpdate */ ) {

		return builder.format( this.value, type, output );

	};

	BoolNode.prototype.copy = function ( source ) {

		InputNode_js.InputNode.prototype.copy.call( this, source );

		this.value = source.value;

		return this;

	};

	BoolNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.value = this.value;

			if ( this.readonly === true ) data.readonly = true;

		}

		return data;

	};

	exports.BoolNode = BoolNode;

}));

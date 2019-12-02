/**
 * Generated from 'examples/jsm/nodes/materials/nodes/RawNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/Node.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/Node.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, Node_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function RawNode( value ) {

		Node_js.Node.call( this, 'v4' );

		this.value = value;

	}

	RawNode.prototype = Object.create( Node_js.Node.prototype );
	RawNode.prototype.constructor = RawNode;
	RawNode.prototype.nodeType = "Raw";

	RawNode.prototype.generate = function ( builder ) {

		var data = this.value.analyzeAndFlow( builder, this.type ),
			code = data.code + '\n';

		if ( builder.isShader( 'vertex' ) ) {

			code += 'gl_Position = ' + data.result + ';';

		} else {

			code += 'gl_FragColor = ' + data.result + ';';

		}

		return code;

	};

	RawNode.prototype.copy = function ( source ) {

		Node_js.Node.prototype.copy.call( this, source );

		this.value = source.value;

		return this;

	};

	RawNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.value = this.value.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.RawNode = RawNode;

}));

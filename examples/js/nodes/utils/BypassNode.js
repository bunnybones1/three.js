/**
 * Generated from 'examples/jsm/nodes/utils/BypassNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/Node.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/Node.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, Node_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function BypassNode( code, value ) {

		Node_js.Node.call( this );

		this.code = code;
		this.value = value;

	}

	BypassNode.prototype = Object.create( Node_js.Node.prototype );
	BypassNode.prototype.constructor = BypassNode;
	BypassNode.prototype.nodeType = "Bypass";

	BypassNode.prototype.getType = function ( builder ) {

		if ( this.value ) {

			return this.value.getType( builder );

		} else if ( builder.isShader( 'fragment' ) ) {

			return 'f';

		}

		return 'void';

	};

	BypassNode.prototype.generate = function ( builder, output ) {

		var code = this.code.build( builder, output ) + ';';

		builder.addNodeCode( code );

		if ( builder.isShader( 'vertex' ) ) {

			if ( this.value ) {

				return this.value.build( builder, output );

			}

		} else {

			return this.value ? this.value.build( builder, output ) : builder.format( '0.0', 'f', output );

		}

	};

	BypassNode.prototype.copy = function ( source ) {

		Node_js.Node.prototype.copy.call( this, source );

		this.code = source.code;
		this.value = source.value;

		return this;

	};

	BypassNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.code = this.code.toJSON( meta ).uuid;

			if ( this.value ) data.value = this.value.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.BypassNode = BypassNode;

}));

/**
 * Generated from 'examples/jsm/nodes/core/VarNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/Node.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/Node.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, Node_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function VarNode( type, value ) {

		Node_js.Node.call( this, type );

		this.value = value;

	}

	VarNode.prototype = Object.create( Node_js.Node.prototype );
	VarNode.prototype.constructor = VarNode;
	VarNode.prototype.nodeType = "Var";

	VarNode.prototype.getType = function ( builder ) {

		return builder.getTypeByFormat( this.type );

	};

	VarNode.prototype.generate = function ( builder, output ) {

		var varying = builder.getVar( this.uuid, this.type );

		if ( this.value && builder.isShader( 'vertex' ) ) {

			builder.addNodeCode( varying.name + ' = ' + this.value.build( builder, this.getType( builder ) ) + ';' );

		}

		return builder.format( varying.name, this.getType( builder ), output );

	};

	VarNode.prototype.copy = function ( source ) {

		Node_js.Node.prototype.copy.call( this, source );

		this.type = source.type;
		this.value = source.value;

		return this;

	};

	VarNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.type = this.type;

			if ( this.value ) data.value = this.value.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.VarNode = VarNode;

}));

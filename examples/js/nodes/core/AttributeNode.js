/**
 * Generated from 'examples/jsm/nodes/core/AttributeNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/Node.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/Node.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, Node_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function AttributeNode( name, type ) {

		Node_js.Node.call( this, type );

		this.name = name;

	}

	AttributeNode.prototype = Object.create( Node_js.Node.prototype );
	AttributeNode.prototype.constructor = AttributeNode;
	AttributeNode.prototype.nodeType = "Attribute";

	AttributeNode.prototype.getAttributeType = function ( builder ) {

		return typeof this.type === 'number' ? builder.getConstructorFromLength( this.type ) : this.type;

	};

	AttributeNode.prototype.getType = function ( builder ) {

		var type = this.getAttributeType( builder );

		return builder.getTypeByFormat( type );

	};

	AttributeNode.prototype.generate = function ( builder, output ) {

		var type = this.getAttributeType( builder );

		var attribute = builder.getAttribute( this.name, type ),
			name = builder.isShader( 'vertex' ) ? this.name : attribute.varying.name;

		return builder.format( name, this.getType( builder ), output );

	};

	AttributeNode.prototype.copy = function ( source ) {

		Node_js.Node.prototype.copy.call( this, source );

		this.type = source.type;

		return this;

	};

	AttributeNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.type = this.type;

		}

		return data;

	};

	exports.AttributeNode = AttributeNode;

}));

/**
 * Generated from 'examples/jsm/nodes/utils/UVTransformNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ExpressionNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Matrix3Node.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ExpressionNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Matrix3Node.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE));
}(this, function (exports, ExpressionNode_js, Matrix3Node_js, UVNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function UVTransformNode( uv, position ) {

		ExpressionNode_js.ExpressionNode.call( this, "( uvTransform * vec3( uvNode, 1 ) ).xy", "vec2" );

		this.uv = uv || new UVNode_js.UVNode();
		this.position = position || new Matrix3Node_js.Matrix3Node();

	}

	UVTransformNode.prototype = Object.create( ExpressionNode_js.ExpressionNode.prototype );
	UVTransformNode.prototype.constructor = UVTransformNode;
	UVTransformNode.prototype.nodeType = "UVTransform";

	UVTransformNode.prototype.generate = function ( builder, output ) {

		this.keywords[ "uvNode" ] = this.uv;
		this.keywords[ "uvTransform" ] = this.position;

		return ExpressionNode_js.ExpressionNode.prototype.generate.call( this, builder, output );

	};

	UVTransformNode.prototype.setUvTransform = function ( tx, ty, sx, sy, rotation, cx, cy ) {

		cx = cx !== undefined ? cx : .5;
		cy = cy !== undefined ? cy : .5;

		this.position.value.setUvTransform( tx, ty, sx, sy, rotation, cx, cy );

	};

	UVTransformNode.prototype.copy = function ( source ) {

		ExpressionNode_js.ExpressionNode.prototype.copy.call( this, source );

		this.uv = source.uv;
		this.position = source.position;

		return this;

	};

	UVTransformNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.uv = this.uv.toJSON( meta ).uuid;
			data.position = this.position.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.UVTransformNode = UVTransformNode;

}));

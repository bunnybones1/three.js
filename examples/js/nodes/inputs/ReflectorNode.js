/**
 * Generated from 'examples/jsm/nodes/inputs/ReflectorNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/PositionNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/math/OperatorNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/TextureNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Matrix4Node.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/PositionNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/math/OperatorNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/TextureNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Matrix4Node.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, TempNode_js, InputNode_js, PositionNode_js, OperatorNode_js, TextureNode_js, Matrix4Node_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function ReflectorNode( mirror ) {

		TempNode_js.TempNode.call( this, 'v4' );

		if ( mirror ) this.setMirror( mirror );

	}

	ReflectorNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	ReflectorNode.prototype.constructor = ReflectorNode;
	ReflectorNode.prototype.nodeType = "Reflector";

	ReflectorNode.prototype.setMirror = function ( mirror ) {

		this.mirror = mirror;

		this.textureMatrix = new Matrix4Node_js.Matrix4Node( this.mirror.material.uniforms.textureMatrix.value );

		this.localPosition = new PositionNode_js.PositionNode( PositionNode_js.PositionNode.LOCAL );

		this.uv = new OperatorNode_js.OperatorNode( this.textureMatrix, this.localPosition, OperatorNode_js.OperatorNode.MUL );
		this.uvResult = new OperatorNode_js.OperatorNode( null, this.uv, OperatorNode_js.OperatorNode.ADD );

		this.texture = new TextureNode_js.TextureNode( this.mirror.material.uniforms.tDiffuse.value, this.uv, null, true );

	};

	ReflectorNode.prototype.generate = function ( builder, output ) {

		if ( builder.isShader( 'fragment' ) ) {

			this.uvResult.a = this.offset;
			this.texture.uv = this.offset ? this.uvResult : this.uv;

			if ( output === 'sampler2D' ) {

				return this.texture.build( builder, output );

			}

			return builder.format( this.texture.build( builder, this.type ), this.type, output );

		} else {

			console.warn( "THREE.ReflectorNode is not compatible with " + builder.shader + " shader." );

			return builder.format( 'vec4( 0.0 )', this.type, output );

		}

	};

	ReflectorNode.prototype.copy = function ( source ) {

		InputNode_js.InputNode.prototype.copy.call( this, source );

		this.scope.mirror = source.mirror;

		return this;

	};

	ReflectorNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.mirror = this.mirror.uuid;

			if ( this.offset ) data.offset = this.offset.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.ReflectorNode = ReflectorNode;

}));

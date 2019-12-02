/**
 * Generated from 'examples/jsm/nodes/inputs/CubeTextureNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ReflectNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/ColorSpaceNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ExpressionNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ReflectNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/ColorSpaceNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ExpressionNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, InputNode_js, ReflectNode_js, ColorSpaceNode_js, ExpressionNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function CubeTextureNode( value, uv, bias ) {

		InputNode_js.InputNode.call( this, 'v4', { shared: true } );

		this.value = value;
		this.uv = uv || new ReflectNode_js.ReflectNode();
		this.bias = bias;

	}

	CubeTextureNode.prototype = Object.create( InputNode_js.InputNode.prototype );
	CubeTextureNode.prototype.constructor = CubeTextureNode;
	CubeTextureNode.prototype.nodeType = "CubeTexture";

	CubeTextureNode.prototype.getTexture = function ( builder, output ) {

		return InputNode_js.InputNode.prototype.generate.call( this, builder, output, this.value.uuid, 'tc' );

	};

	CubeTextureNode.prototype.generate = function ( builder, output ) {

		if ( output === 'samplerCube' ) {

			return this.getTexture( builder, output );

		}

		var cubetex = this.getTexture( builder, output );
		var uv = this.uv.build( builder, 'v3' );
		var bias = this.bias ? this.bias.build( builder, 'f' ) : undefined;

		if ( bias === undefined && builder.context.bias ) {

			bias = builder.context.bias.setTexture( this ).build( builder, 'f' );

		}

		var code;

		if ( bias ) code = 'texCubeBias( ' + cubetex + ', ' + uv + ', ' + bias + ' )';
		else code = 'texCube( ' + cubetex + ', ' + uv + ' )';

		// add a custom context for fix incompatibility with the core
		// include ColorSpace function only for vertex shader (in fragment shader color space functions is added automatically by core)
		// this should be removed in the future
		// context.include =: is used to include or not functions if used FunctionNode
		// context.ignoreCache =: not create variables temp nodeT0..9 to optimize the code
		var context = { include: builder.isShader( 'vertex' ), ignoreCache: true };
		var outputType = this.getType( builder );

		builder.addContext( context );

		this.colorSpace = this.colorSpace || new ColorSpaceNode_js.ColorSpaceNode( new ExpressionNode_js.ExpressionNode( '', outputType ) );
		this.colorSpace.fromDecoding( builder.getTextureEncodingFromMap( this.value ) );
		this.colorSpace.input.parse( code );

		code = this.colorSpace.build( builder, outputType );

		// end custom context

		builder.removeContext();

		return builder.format( code, outputType, output );

	};

	CubeTextureNode.prototype.copy = function ( source ) {

		InputNode_js.InputNode.prototype.copy.call( this, source );

		if ( source.value ) this.value = source.value;

		this.uv = source.uv;

		if ( source.bias ) this.bias = source.bias;

		return this;

	};

	CubeTextureNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.value = this.value.uuid;
			data.uv = this.uv.toJSON( meta ).uuid;

			if ( this.bias ) data.bias = this.bias.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.CubeTextureNode = CubeTextureNode;

}));

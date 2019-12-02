/**
 * Generated from 'examples/jsm/nodes/inputs/TextureNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/ColorSpaceNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ExpressionNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/ColorSpaceNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ExpressionNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, InputNode_js, UVNode_js, ColorSpaceNode_js, ExpressionNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function TextureNode( value, uv, bias, project ) {

		InputNode_js.InputNode.call( this, 'v4', { shared: true } );

		this.value = value;
		this.uv = uv || new UVNode_js.UVNode();
		this.bias = bias;
		this.project = project !== undefined ? project : false;

	}

	TextureNode.prototype = Object.create( InputNode_js.InputNode.prototype );
	TextureNode.prototype.constructor = TextureNode;
	TextureNode.prototype.nodeType = "Texture";

	TextureNode.prototype.getTexture = function ( builder, output ) {

		return InputNode_js.InputNode.prototype.generate.call( this, builder, output, this.value.uuid, 't' );

	};

	TextureNode.prototype.generate = function ( builder, output ) {

		if ( output === 'sampler2D' ) {

			return this.getTexture( builder, output );

		}

		var tex = this.getTexture( builder, output ),
			uv = this.uv.build( builder, this.project ? 'v4' : 'v2' ),
			bias = this.bias ? this.bias.build( builder, 'f' ) : undefined;

		if ( bias === undefined && builder.context.bias ) {

			bias = builder.context.bias.setTexture( this ).build( builder, 'f' );

		}

		var method, code;

		if ( this.project ) method = 'texture2DProj';
		else method = bias ? 'tex2DBias' : 'tex2D';

		if ( bias ) code = method + '( ' + tex + ', ' + uv + ', ' + bias + ' )';
		else code = method + '( ' + tex + ', ' + uv + ' )';

		// add a custom context for fix incompatibility with the core
		// include ColorSpace function only for vertex shader (in fragment shader color space functions is added automatically by core)
		// this should be removed in the future
		// context.include is used to include or not functions if used FunctionNode
		// context.ignoreCache =: not create temp variables nodeT0..9 to optimize the code
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

	TextureNode.prototype.copy = function ( source ) {

		InputNode_js.InputNode.prototype.copy.call( this, source );

		if ( source.value ) this.value = source.value;

		this.uv = source.uv;

		if ( source.bias ) this.bias = source.bias;
		if ( source.project !== undefined ) this.project = source.project;

		return this;

	};

	TextureNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			if ( this.value ) data.value = this.value.uuid;

			data.uv = this.uv.toJSON( meta ).uuid;
			data.project = this.project;

			if ( this.bias ) data.bias = this.bias.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.TextureNode = TextureNode;

}));

/**
 * Generated from 'examples/jsm/nodes/misc/TextureCubeNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ExpressionNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/TextureCubeUVNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ReflectNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/NormalNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/ColorSpaceNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ExpressionNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/TextureCubeUVNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ReflectNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/NormalNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/ColorSpaceNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, TempNode_js, FloatNode_js, ExpressionNode_js, TextureCubeUVNode_js, ReflectNode_js, NormalNode_js, ColorSpaceNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function TextureCubeNode( value, textureSize, uv, bias ) {

		TempNode_js.TempNode.call( this, 'v4' );

		this.value = value;

		textureSize = textureSize || new FloatNode_js.FloatNode( 1024 );

		this.radianceCache = { uv: new TextureCubeUVNode_js.TextureCubeUVNode(
			uv || new ReflectNode_js.ReflectNode( ReflectNode_js.ReflectNode.VECTOR ),
			textureSize,
			// bias should be replaced in builder.context in build process
			bias
		) };

		this.irradianceCache = { uv: new TextureCubeUVNode_js.TextureCubeUVNode(
			new NormalNode_js.NormalNode( NormalNode_js.NormalNode.WORLD ),
			textureSize,
			new FloatNode_js.FloatNode( 1 ).setReadonly( true )
		) };

	}

	TextureCubeNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	TextureCubeNode.prototype.constructor = TextureCubeNode;
	TextureCubeNode.prototype.nodeType = "TextureCube";

	TextureCubeNode.prototype.generateTextureCubeUV = function ( builder, cache ) {

		var uv_10 = cache.uv.build( builder ) + '.uv_10',
			uv_20 = cache.uv.build( builder ) + '.uv_20',
			t = cache.uv.build( builder ) + '.t';

		var color10 = 'texture2D( ' + this.value.build( builder, 'sampler2D' ) + ', ' + uv_10 + ' )',
			color20 = 'texture2D( ' + this.value.build( builder, 'sampler2D' ) + ', ' + uv_20 + ' )';

		// add a custom context for fix incompatibility with the core
		// include ColorSpace function only for vertex shader (in fragment shader color space functions is added automatically by core)
		// this should be removed in the future
		// context.include =: is used to include or not functions if used FunctionNode
		// context.ignoreCache =: not create temp variables nodeT0..9 to optimize the code
		var context = { include: builder.isShader( 'vertex' ), ignoreCache: true };
		var outputType = this.getType( builder );

		builder.addContext( context );

		cache.colorSpace10 = cache.colorSpace10 || new ColorSpaceNode_js.ColorSpaceNode( new ExpressionNode_js.ExpressionNode( '', outputType ) );
		cache.colorSpace10.fromDecoding( builder.getTextureEncodingFromMap( this.value.value ) );
		cache.colorSpace10.input.parse( color10 );

		color10 = cache.colorSpace10.build( builder, outputType );

		cache.colorSpace20 = cache.colorSpace20 || new ColorSpaceNode_js.ColorSpaceNode( new ExpressionNode_js.ExpressionNode( '', outputType ) );
		cache.colorSpace20.fromDecoding( builder.getTextureEncodingFromMap( this.value.value ) );
		cache.colorSpace20.input.parse( color20 );

		color20 = cache.colorSpace20.build( builder, outputType );

		// end custom context

		builder.removeContext();

		return 'mix( ' + color10 + ', ' + color20 + ', ' + t + ' ).rgb';

	};

	TextureCubeNode.prototype.generate = function ( builder, output ) {

		if ( builder.isShader( 'fragment' ) ) {

			builder.require( 'irradiance' );

			if ( builder.context.bias ) {

				builder.context.bias.setTexture( this.value );

			}

			var cache = builder.slot === 'irradiance' ? this.irradianceCache : this.radianceCache;
			var result = this.generateTextureCubeUV( builder, cache );

			return builder.format( 'vec4( ' + result + ', 1.0 )', this.getType( builder ), output );

		} else {

			console.warn( "THREE.TextureCubeNode is not compatible with " + builder.shader + " shader." );

			return builder.format( 'vec4( 0.0 )', this.getType( builder ), output );

		}

	};

	TextureCubeNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		this.value = source.value;

		return this;

	};

	TextureCubeNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.value = this.value.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.TextureCubeNode = TextureCubeNode;

}));

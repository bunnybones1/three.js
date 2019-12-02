/**
 * Generated from 'examples/jsm/nodes/effects/BlurNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Vector2Node.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Vector2Node.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, THREE, TempNode_js, FunctionNode_js, FloatNode_js, Vector2Node_js, UVNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function BlurNode( value, uv, radius, size ) {

		TempNode_js.TempNode.call( this, 'v4' );

		this.value = value;
		this.uv = uv || new UVNode_js.UVNode();
		this.radius = radius || new Vector2Node_js.Vector2Node( 1, 1 );

		this.size = size;

		this.blurX = true;
		this.blurY = true;

		this.horizontal = new FloatNode_js.FloatNode( 1 / 64 );
		this.vertical = new FloatNode_js.FloatNode( 1 / 64 );

	}

	BlurNode.Nodes = ( function () {

		var blurX = new FunctionNode_js.FunctionNode( [
			"vec4 blurX( sampler2D texture, vec2 uv, float s ) {",
			"	vec4 sum = vec4( 0.0 );",
			"	sum += texture2D( texture, vec2( uv.x - 4.0 * s, uv.y ) ) * 0.051;",
			"	sum += texture2D( texture, vec2( uv.x - 3.0 * s, uv.y ) ) * 0.0918;",
			"	sum += texture2D( texture, vec2( uv.x - 2.0 * s, uv.y ) ) * 0.12245;",
			"	sum += texture2D( texture, vec2( uv.x - 1.0 * s, uv.y ) ) * 0.1531;",
			"	sum += texture2D( texture, vec2( uv.x, uv.y ) ) * 0.1633;",
			"	sum += texture2D( texture, vec2( uv.x + 1.0 * s, uv.y ) ) * 0.1531;",
			"	sum += texture2D( texture, vec2( uv.x + 2.0 * s, uv.y ) ) * 0.12245;",
			"	sum += texture2D( texture, vec2( uv.x + 3.0 * s, uv.y ) ) * 0.0918;",
			"	sum += texture2D( texture, vec2( uv.x + 4.0 * s, uv.y ) ) * 0.051;",
			"	return sum * .667;",
			"}"
		].join( "\n" ) );

		var blurY = new FunctionNode_js.FunctionNode( [
			"vec4 blurY( sampler2D texture, vec2 uv, float s ) {",
			"	vec4 sum = vec4( 0.0 );",
			"	sum += texture2D( texture, vec2( uv.x, uv.y - 4.0 * s ) ) * 0.051;",
			"	sum += texture2D( texture, vec2( uv.x, uv.y - 3.0 * s ) ) * 0.0918;",
			"	sum += texture2D( texture, vec2( uv.x, uv.y - 2.0 * s ) ) * 0.12245;",
			"	sum += texture2D( texture, vec2( uv.x, uv.y - 1.0 * s ) ) * 0.1531;",
			"	sum += texture2D( texture, vec2( uv.x, uv.y ) ) * 0.1633;",
			"	sum += texture2D( texture, vec2( uv.x, uv.y + 1.0 * s ) ) * 0.1531;",
			"	sum += texture2D( texture, vec2( uv.x, uv.y + 2.0 * s ) ) * 0.12245;",
			"	sum += texture2D( texture, vec2( uv.x, uv.y + 3.0 * s ) ) * 0.0918;",
			"	sum += texture2D( texture, vec2( uv.x, uv.y + 4.0 * s ) ) * 0.051;",
			"	return sum * .667;",
			"}"
		].join( "\n" ) );

		return {
			blurX: blurX,
			blurY: blurY
		};

	} )();


	BlurNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	BlurNode.prototype.constructor = BlurNode;
	BlurNode.prototype.nodeType = "Blur";

	BlurNode.prototype.updateFrame = function ( /* frame */ ) {

		if ( this.size ) {

			this.horizontal.value = this.radius.x / this.size.x;
			this.vertical.value = this.radius.y / this.size.y;

		} else if ( this.value.value && this.value.value.image ) {

			var image = this.value.value.image;

			this.horizontal.value = this.radius.x / image.width;
			this.vertical.value = this.radius.y / image.height;

		}

	};

	BlurNode.prototype.generate = function ( builder, output ) {

		if ( builder.isShader( 'fragment' ) ) {

			var blurCode = [], code;

			var blurX = builder.include( BlurNode.Nodes.blurX ),
				blurY = builder.include( BlurNode.Nodes.blurY );

			if ( this.blurX ) {

				blurCode.push( blurX + '( ' + this.value.build( builder, 'sampler2D' ) + ', ' + this.uv.build( builder, 'v2' ) + ', ' + this.horizontal.build( builder, 'f' ) + ' )' );

			}

			if ( this.blurY ) {

				blurCode.push( blurY + '( ' + this.value.build( builder, 'sampler2D' ) + ', ' + this.uv.build( builder, 'v2' ) + ', ' + this.vertical.build( builder, 'f' ) + ' )' );

			}

			if ( blurCode.length == 2 ) code = '( ' + blurCode.join( ' + ' ) + ' / 2.0 )';
			else if ( blurCode.length ) code = '( ' + blurCode[ 0 ] + ' )';
			else code = 'vec4( 0.0 )';

			return builder.format( code, this.getType( builder ), output );

		} else {

			console.warn( "THREE.BlurNode is not compatible with " + builder.shader + " shader." );

			return builder.format( 'vec4( 0.0 )', this.getType( builder ), output );

		}

	};

	BlurNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		this.value = source.value;
		this.uv = source.uv;
		this.radius = source.radius;

		if ( source.size !== undefined ) this.size = new THREE.Vector2( source.size.x, source.size.y );

		this.blurX = source.blurX;
		this.blurY = source.blurY;

		return this;

	};

	BlurNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.value = this.value.toJSON( meta ).uuid;
			data.uv = this.uv.toJSON( meta ).uuid;
			data.radius = this.radius.toJSON( meta ).uuid;

			if ( this.size ) data.size = { x: this.size.x, y: this.size.y };

			data.blurX = this.blurX;
			data.blurY = this.blurY;

		}

		return data;

	};

	exports.BlurNode = BlurNode;

}));

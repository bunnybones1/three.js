/**
 * Generated from 'examples/jsm/nodes/procedural/NoiseNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE));
}(this, function (exports, TempNode_js, FunctionNode_js, UVNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function NoiseNode( uv ) {

		TempNode_js.TempNode.call( this, 'f' );

		this.uv = uv || new UVNode_js.UVNode();

	}

	NoiseNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	NoiseNode.prototype.constructor = NoiseNode;
	NoiseNode.prototype.nodeType = "Noise";

	NoiseNode.Nodes = ( function () {

		var snoise = new FunctionNode_js.FunctionNode( [
			"float snoise(vec2 co) {",

			"	return fract( sin( dot( co.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );",

			"}"
		].join( "\n" ) );

		return {
			snoise: snoise
		};

	} )();

	NoiseNode.prototype.generate = function ( builder, output ) {

		var snoise = builder.include( NoiseNode.Nodes.snoise );

		return builder.format( snoise + '( ' + this.uv.build( builder, 'v2' ) + ' )', this.getType( builder ), output );

	};

	NoiseNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		this.uv = source.uv;

		return this;

	};

	NoiseNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.uv = this.uv.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.NoiseNode = NoiseNode;

}));

/**
 * Generated from 'examples/jsm/nodes/effects/LuminanceNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ConstNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ConstNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE));
}(this, function (exports, TempNode_js, ConstNode_js, FunctionNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function LuminanceNode( rgb ) {

		TempNode_js.TempNode.call( this, 'f' );

		this.rgb = rgb;

	}

	LuminanceNode.Nodes = ( function () {

		var LUMA = new ConstNode_js.ConstNode( "vec3 LUMA vec3( 0.2125, 0.7154, 0.0721 )" );

		var luminance = new FunctionNode_js.FunctionNode( [
			// Algorithm from Chapter 10 of Graphics Shaders
			"float luminance( vec3 rgb ) {",

			"	return dot( rgb, LUMA );",

			"}"
		].join( "\n" ), [ LUMA ] );

		return {
			LUMA: LUMA,
			luminance: luminance
		};

	} )();

	LuminanceNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	LuminanceNode.prototype.constructor = LuminanceNode;
	LuminanceNode.prototype.nodeType = "Luminance";

	LuminanceNode.prototype.generate = function ( builder, output ) {

		var luminance = builder.include( LuminanceNode.Nodes.luminance );

		return builder.format( luminance + '( ' + this.rgb.build( builder, 'v3' ) + ' )', this.getType( builder ), output );

	};

	LuminanceNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		this.rgb = source.rgb;

		return this;

	};

	LuminanceNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.rgb = this.rgb.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.LuminanceNode = LuminanceNode;

}));

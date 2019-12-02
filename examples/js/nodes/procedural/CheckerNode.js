/**
 * Generated from 'examples/jsm/nodes/procedural/CheckerNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE));
}(this, function (exports, TempNode_js, FunctionNode_js, UVNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function CheckerNode( uv ) {

		TempNode_js.TempNode.call( this, 'f' );

		this.uv = uv || new UVNode_js.UVNode();

	}

	CheckerNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	CheckerNode.prototype.constructor = CheckerNode;
	CheckerNode.prototype.nodeType = "Noise";

	CheckerNode.Nodes = ( function () {

		// https://github.com/mattdesl/glsl-checker/blob/master/index.glsl

		var checker = new FunctionNode_js.FunctionNode( [
			"float checker( vec2 uv ) {",

			"	float cx = floor( uv.x );",
			"	float cy = floor( uv.y ); ",
			"	float result = mod( cx + cy, 2.0 );",

			"	return sign( result );",

			"}"
		].join( "\n" ) );

		return {
			checker: checker
		};

	} )();

	CheckerNode.prototype.generate = function ( builder, output ) {

		var snoise = builder.include( CheckerNode.Nodes.checker );

		return builder.format( snoise + '( ' + this.uv.build( builder, 'v2' ) + ' )', this.getType( builder ), output );

	};

	CheckerNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		this.uv = source.uv;

		return this;

	};

	CheckerNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.uv = this.uv.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.CheckerNode = CheckerNode;

}));

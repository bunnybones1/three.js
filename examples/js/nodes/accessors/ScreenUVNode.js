/**
 * Generated from 'examples/jsm/nodes/accessors/ScreenUVNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ResolutionNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ResolutionNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE));
}(this, function (exports, TempNode_js, ResolutionNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function ScreenUVNode( resolution ) {

		TempNode_js.TempNode.call( this, 'v2' );

		this.resolution = resolution || new ResolutionNode_js.ResolutionNode();

	}

	ScreenUVNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	ScreenUVNode.prototype.constructor = ScreenUVNode;
	ScreenUVNode.prototype.nodeType = "ScreenUV";

	ScreenUVNode.prototype.generate = function ( builder, output ) {

		var result;

		if ( builder.isShader( 'fragment' ) ) {

			result = '( gl_FragCoord.xy / ' + this.resolution.build( builder, 'v2' ) + ')';

		} else {

			console.warn( "THREE.ScreenUVNode is not compatible with " + builder.shader + " shader." );

			result = 'vec2( 0.0 )';

		}

		return builder.format( result, this.getType( builder ), output );

	};

	ScreenUVNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		this.resolution = source.resolution;

		return this;

	};

	ScreenUVNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.resolution = this.resolution.toJSON( meta ).uuid;

		}

		return data;

	};

	exports.ScreenUVNode = ScreenUVNode;

}));

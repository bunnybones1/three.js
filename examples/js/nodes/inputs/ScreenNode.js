/**
 * Generated from 'examples/jsm/nodes/inputs/ScreenNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/TextureNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/TextureNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE));
}(this, function (exports, InputNode_js, TextureNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function ScreenNode( uv ) {

		TextureNode_js.TextureNode.call( this, undefined, uv );

	}

	ScreenNode.prototype = Object.create( TextureNode_js.TextureNode.prototype );
	ScreenNode.prototype.constructor = ScreenNode;
	ScreenNode.prototype.nodeType = "Screen";

	ScreenNode.prototype.getUnique = function () {

		return true;

	};

	ScreenNode.prototype.getTexture = function ( builder, output ) {

		return InputNode_js.InputNode.prototype.generate.call( this, builder, output, this.getUuid(), 't', 'renderTexture' );

	};

	exports.ScreenNode = ScreenNode;

}));

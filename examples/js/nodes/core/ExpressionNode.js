/**
 * Generated from 'examples/jsm/nodes/core/ExpressionNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, FunctionNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function ExpressionNode( src, type, keywords, extensions, includes ) {

		FunctionNode_js.FunctionNode.call( this, src, includes, extensions, keywords, type );

	}

	ExpressionNode.prototype = Object.create( FunctionNode_js.FunctionNode.prototype );
	ExpressionNode.prototype.constructor = ExpressionNode;
	ExpressionNode.prototype.nodeType = "Expression";

	exports.ExpressionNode = ExpressionNode;

}));

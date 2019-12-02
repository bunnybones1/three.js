/**
 * Generated from 'examples/jsm/nodes/core/NodeUniform.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}));
}(this, function (exports) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function NodeUniform( params ) {

		params = params || {};

		this.name = params.name;
		this.type = params.type;
		this.node = params.node;
		this.needsUpdate = params.needsUpdate;

	}

	Object.defineProperties( NodeUniform.prototype, {

		value: {

			get: function () {

				return this.node.value;

			},

			set: function ( val ) {

				this.node.value = val;

			}

		}

	} );

	exports.NodeUniform = NodeUniform;

}));

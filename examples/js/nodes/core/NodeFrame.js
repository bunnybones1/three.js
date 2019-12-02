/**
 * Generated from 'examples/jsm/nodes/core/NodeFrame.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}));
}(this, function (exports) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function NodeFrame( time ) {

		this.time = time !== undefined ? time : 0;

		this.id = 0;

	}

	NodeFrame.prototype = {

		constructor: NodeFrame,

		update: function ( delta ) {

			++ this.id;

			this.time += delta;
			this.delta = delta;

			return this;

		},

		setRenderer: function ( renderer ) {

			this.renderer = renderer;

			return this;

		},

		setRenderTexture: function ( renderTexture ) {

			this.renderTexture = renderTexture;

			return this;

		},

		updateNode: function ( node ) {

			if ( node.frameId === this.id ) return this;

			node.updateFrame( this );

			node.frameId = this.id;

			return this;

		}

	};

	exports.NodeFrame = NodeFrame;

}));

/**
 * Generated from 'examples/jsm/nodes/utils/MaxMIPLevelNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, FloatNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function MaxMIPLevelNode( texture ) {

		FloatNode_js.FloatNode.call( this );

		this.texture = texture;

		this.maxMIPLevel = 0;

	}

	MaxMIPLevelNode.prototype = Object.create( FloatNode_js.FloatNode.prototype );
	MaxMIPLevelNode.prototype.constructor = MaxMIPLevelNode;
	MaxMIPLevelNode.prototype.nodeType = "MaxMIPLevel";

	Object.defineProperties( MaxMIPLevelNode.prototype, {

		value: {

			get: function () {

				if ( this.maxMIPLevel === 0 ) {

					var image = this.texture.value.image;

					if ( Array.isArray( image ) ) image = image[ 0 ];

					this.maxMIPLevel = image !== undefined ? Math.log( Math.max( image.width, image.height ) ) * Math.LOG2E : 0;

				}

				return this.maxMIPLevel;

			},

			set: function () { }

		}

	} );

	MaxMIPLevelNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.texture = this.texture.uuid;

		}

		return data;

	};

	exports.MaxMIPLevelNode = MaxMIPLevelNode;

}));

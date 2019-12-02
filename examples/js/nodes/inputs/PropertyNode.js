/**
 * Generated from 'examples/jsm/nodes/inputs/PropertyNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, InputNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function PropertyNode( object, property, type ) {

		InputNode_js.InputNode.call( this, type );

		this.object = object;
		this.property = property;

	}

	PropertyNode.prototype = Object.create( InputNode_js.InputNode.prototype );
	PropertyNode.prototype.constructor = PropertyNode;
	PropertyNode.prototype.nodeType = "Property";

	Object.defineProperties( PropertyNode.prototype, {

		value: {

			get: function () {

				return this.object[ this.property ];

			},

			set: function ( val ) {

				this.object[ this.property ] = val;

			}

		}

	} );

	PropertyNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.value = this.value;
			data.property = this.property;

		}

		return data;

	};

	exports.PropertyNode = PropertyNode;

}));

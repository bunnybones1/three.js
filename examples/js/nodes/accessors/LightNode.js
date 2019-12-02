/**
 * Generated from 'examples/jsm/nodes/accessors/LightNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, TempNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function LightNode( scope ) {

		TempNode_js.TempNode.call( this, 'v3', { shared: false } );

		this.scope = scope || LightNode.TOTAL;

	}

	LightNode.TOTAL = 'total';

	LightNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	LightNode.prototype.constructor = LightNode;
	LightNode.prototype.nodeType = "Light";

	LightNode.prototype.generate = function ( builder, output ) {

		if ( builder.isCache( 'light' ) ) {

			return builder.format( 'reflectedLight.directDiffuse', this.type, output );

		} else {

			console.warn( "THREE.LightNode is only compatible in \"light\" channel." );

			return builder.format( 'vec3( 0.0 )', this.type, output );

		}

	};

	LightNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		this.scope = source.scope;

		return this;

	};

	LightNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.scope = this.scope;

		}

		return data;

	};

	exports.LightNode = LightNode;

}));

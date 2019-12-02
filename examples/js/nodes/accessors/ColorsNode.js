/**
 * Generated from 'examples/jsm/nodes/accessors/ColorsNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, TempNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	var vertexDict = [ 'color', 'color2' ],
		fragmentDict = [ 'vColor', 'vColor2' ];

	function ColorsNode( index ) {

		TempNode_js.TempNode.call( this, 'v4', { shared: false } );

		this.index = index || 0;

	}

	ColorsNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	ColorsNode.prototype.constructor = ColorsNode;
	ColorsNode.prototype.nodeType = "Colors";

	ColorsNode.prototype.generate = function ( builder, output ) {

		builder.requires.color[ this.index ] = true;

		var result = builder.isShader( 'vertex' ) ? vertexDict[ this.index ] : fragmentDict[ this.index ];

		return builder.format( result, this.getType( builder ), output );

	};

	ColorsNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		this.index = source.index;

		return this;

	};

	ColorsNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.index = this.index;

		}

		return data;

	};

	exports.ColorsNode = ColorsNode;

}));

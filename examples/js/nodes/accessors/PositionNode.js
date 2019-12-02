/**
 * Generated from 'examples/jsm/nodes/accessors/PositionNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeLib.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeLib.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE));
}(this, function (exports, TempNode_js, NodeLib_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function PositionNode( scope ) {

		TempNode_js.TempNode.call( this, 'v3' );

		this.scope = scope || PositionNode.LOCAL;

	}

	PositionNode.LOCAL = 'local';
	PositionNode.WORLD = 'world';
	PositionNode.VIEW = 'view';
	PositionNode.PROJECTION = 'projection';

	PositionNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	PositionNode.prototype.constructor = PositionNode;
	PositionNode.prototype.nodeType = "Position";

	PositionNode.prototype.getType = function ( ) {

		switch ( this.scope ) {

			case PositionNode.PROJECTION:

				return 'v4';

		}

		return this.type;

	};

	PositionNode.prototype.getShared = function ( /* builder */ ) {

		switch ( this.scope ) {

			case PositionNode.LOCAL:
			case PositionNode.WORLD:

				return false;

		}

		return true;

	};

	PositionNode.prototype.generate = function ( builder, output ) {

		var result;

		switch ( this.scope ) {

			case PositionNode.LOCAL:

				if ( builder.isShader( 'vertex' ) ) {

					result = 'transformed';

				} else {

					builder.requires.position = true;

					result = 'vPosition';

				}

				break;

			case PositionNode.WORLD:

				if ( builder.isShader( 'vertex' ) ) {

					return '( modelMatrix * vec4( transformed, 1.0 ) ).xyz';

				} else {

					builder.requires.worldPosition = true;

					result = 'vWPosition';

				}

				break;

			case PositionNode.VIEW:

				result = builder.isShader( 'vertex' ) ? '-mvPosition.xyz' : 'vViewPosition';

				break;

			case PositionNode.PROJECTION:

				result = builder.isShader( 'vertex' ) ? '( projectionMatrix * modelViewMatrix * vec4( position, 1.0 ) )' : 'vec4( 0.0 )';

				break;

		}

		return builder.format( result, this.getType( builder ), output );

	};

	PositionNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		this.scope = source.scope;

		return this;

	};

	PositionNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.scope = this.scope;

		}

		return data;

	};

	NodeLib_js.NodeLib.addKeyword( 'position', function () {

		return new PositionNode();

	} );

	NodeLib_js.NodeLib.addKeyword( 'worldPosition', function () {

		return new PositionNode( PositionNode.WORLD );

	} );

	NodeLib_js.NodeLib.addKeyword( 'viewPosition', function () {

		return new PositionNode( PositionNode.VIEW );

	} );

	exports.PositionNode = PositionNode;

}));

/**
 * Generated from 'examples/jsm/nodes/utils/JoinNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE));
}(this, function (exports, TempNode_js, NodeUtils_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	var inputs = NodeUtils_js.NodeUtils.elements;

	function JoinNode( x, y, z, w ) {

		TempNode_js.TempNode.call( this, 'f' );

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

	}

	JoinNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	JoinNode.prototype.constructor = JoinNode;
	JoinNode.prototype.nodeType = "Join";

	JoinNode.prototype.getNumElements = function () {

		var i = inputs.length;

		while ( i -- ) {

			if ( this[ inputs[ i ] ] !== undefined ) {

				++ i;

				break;

			}

		}

		return Math.max( i, 2 );

	};

	JoinNode.prototype.getType = function ( builder ) {

		return builder.getTypeFromLength( this.getNumElements() );

	};

	JoinNode.prototype.generate = function ( builder, output ) {

		var type = this.getType( builder ),
			length = this.getNumElements(),
			outputs = [];

		for ( var i = 0; i < length; i ++ ) {

			var elm = this[ inputs[ i ] ];

			outputs.push( elm ? elm.build( builder, 'f' ) : '0.0' );

		}

		var code = ( length > 1 ? builder.getConstructorFromLength( length ) : '' ) + '( ' + outputs.join( ', ' ) + ' )';

		return builder.format( code, type, output );

	};

	JoinNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		for ( var prop in source.inputs ) {

			this[ prop ] = source.inputs[ prop ];

		}

		return this;

	};

	JoinNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.inputs = {};

			var length = this.getNumElements();

			for ( var i = 0; i < length; i ++ ) {

				var elm = this[ inputs[ i ] ];

				if ( elm ) {

					data.inputs[ inputs[ i ] ] = elm.toJSON( meta ).uuid;

				}

			}


		}

		return data;

	};

	exports.JoinNode = JoinNode;

}));

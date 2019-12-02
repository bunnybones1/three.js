/**
 * Generated from 'examples/jsm/nodes/utils/SubSlotNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, TempNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function SubSlotNode( slots ) {

		TempNode_js.TempNode.call( this );

		this.slots = slots || {};

	}

	SubSlotNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	SubSlotNode.prototype.constructor = SubSlotNode;
	SubSlotNode.prototype.nodeType = "SubSlot";

	SubSlotNode.prototype.getType = function ( builder, output ) {

		return output;

	};

	SubSlotNode.prototype.generate = function ( builder, output ) {

		if ( this.slots[ builder.slot ] ) {

			return this.slots[ builder.slot ].build( builder, output );

		}

		return builder.format( '0.0', 'f', output );

	};

	SubSlotNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		for ( var prop in source.slots ) {

			this.slots[ prop ] = source.slots[ prop ];

		}

		return this;

	};

	SubSlotNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.slots = {};

			for ( var prop in this.slots ) {

				var slot = this.slots[ prop ];

				if ( slot ) {

					data.slots[ prop ] = slot.toJSON( meta ).uuid;

				}

			}

		}

		return data;

	};

	exports.SubSlotNode = SubSlotNode;

}));

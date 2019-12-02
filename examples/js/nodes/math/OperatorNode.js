/**
 * Generated from 'examples/jsm/nodes/math/OperatorNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, TempNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function OperatorNode( a, b, op ) {

		TempNode_js.TempNode.call( this );

		this.a = a;
		this.b = b;
		this.op = op;

	}

	OperatorNode.ADD = '+';
	OperatorNode.SUB = '-';
	OperatorNode.MUL = '*';
	OperatorNode.DIV = '/';

	OperatorNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	OperatorNode.prototype.constructor = OperatorNode;
	OperatorNode.prototype.nodeType = "Operator";

	OperatorNode.prototype.getType = function ( builder ) {

		var a = this.a.getType( builder ),
			b = this.b.getType( builder );

		if ( builder.isTypeMatrix( a ) ) {

			return 'v4';

		} else if ( builder.getTypeLength( b ) > builder.getTypeLength( a ) ) {

			// use the greater length vector

			return b;

		}

		return a;

	};

	OperatorNode.prototype.generate = function ( builder, output ) {

		var type = this.getType( builder );

		var a = this.a.build( builder, type ),
			b = this.b.build( builder, type );

		return builder.format( '( ' + a + ' ' + this.op + ' ' + b + ' )', type, output );

	};

	OperatorNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		this.a = source.a;
		this.b = source.b;
		this.op = source.op;

		return this;

	};

	OperatorNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.a = this.a.toJSON( meta ).uuid;
			data.b = this.b.toJSON( meta ).uuid;
			data.op = this.op;

		}

		return data;

	};

	exports.OperatorNode = OperatorNode;

}));

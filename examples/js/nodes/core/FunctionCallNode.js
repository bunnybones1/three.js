/**
 * Generated from 'examples/jsm/nodes/core/FunctionCallNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, TempNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function FunctionCallNode( func, inputs ) {

		TempNode_js.TempNode.call( this );

		this.setFunction( func, inputs );

	}

	FunctionCallNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	FunctionCallNode.prototype.constructor = FunctionCallNode;
	FunctionCallNode.prototype.nodeType = "FunctionCall";

	FunctionCallNode.prototype.setFunction = function ( func, inputs ) {

		this.value = func;
		this.inputs = inputs || [];

	};

	FunctionCallNode.prototype.getFunction = function () {

		return this.value;

	};

	FunctionCallNode.prototype.getType = function ( builder ) {

		return this.value.getType( builder );

	};

	FunctionCallNode.prototype.generate = function ( builder, output ) {

		var type = this.getType( builder ),
			func = this.value;

		var code = func.build( builder, output ) + '( ',
			params = [];

		for ( var i = 0; i < func.inputs.length; i ++ ) {

			var inpt = func.inputs[ i ],
				param = this.inputs[ i ] || this.inputs[ inpt.name ];

			params.push( param.build( builder, builder.getTypeByFormat( inpt.type ) ) );

		}

		code += params.join( ', ' ) + ' )';

		return builder.format( code, type, output );

	};

	FunctionCallNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		for ( var prop in source.inputs ) {

			this.inputs[ prop ] = source.inputs[ prop ];

		}

		this.value = source.value;

		return this;

	};

	FunctionCallNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			var func = this.value;

			data = this.createJSONNode( meta );

			data.value = this.value.toJSON( meta ).uuid;

			if ( func.inputs.length ) {

				data.inputs = {};

				for ( var i = 0; i < func.inputs.length; i ++ ) {

					var inpt = func.inputs[ i ],
						node = this.inputs[ i ] || this.inputs[ inpt.name ];

					data.inputs[ inpt.name ] = node.toJSON( meta ).uuid;

				}

			}

		}

		return data;

	};

	exports.FunctionCallNode = FunctionCallNode;

}));

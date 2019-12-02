/**
 * Generated from 'examples/jsm/nodes/core/InputNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE));
}(this, function (exports, TempNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function InputNode( type, params ) {

		params = params || {};
		params.shared = params.shared !== undefined ? params.shared : false;

		TempNode_js.TempNode.call( this, type, params );

		this.readonly = false;

	}

	InputNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	InputNode.prototype.constructor = InputNode;

	InputNode.prototype.setReadonly = function ( value ) {

		this.readonly = value;

		return this;

	};

	InputNode.prototype.getReadonly = function ( /* builder */ ) {

		return this.readonly;

	};

	InputNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		if ( source.readonly !== undefined ) this.readonly = source.readonly;

		return this;

	};

	InputNode.prototype.createJSONNode = function ( meta ) {

		var data = TempNode_js.TempNode.prototype.createJSONNode.call( this, meta );

		if ( this.readonly === true ) data.readonly = this.readonly;

		return data;

	};

	InputNode.prototype.generate = function ( builder, output, uuid, type, ns, needsUpdate ) {

		uuid = builder.getUuid( uuid || this.getUuid() );
		type = type || this.getType( builder );

		var data = builder.getNodeData( uuid ),
			readonly = this.getReadonly( builder ) && this.generateReadonly !== undefined;

		if ( readonly ) {

			return this.generateReadonly( builder, output, uuid, type, ns, needsUpdate );

		} else {

			if ( builder.isShader( 'vertex' ) ) {

				if ( ! data.vertex ) {

					data.vertex = builder.createVertexUniform( type, this, ns, needsUpdate, this.getLabel() );

				}

				return builder.format( data.vertex.name, type, output );

			} else {

				if ( ! data.fragment ) {

					data.fragment = builder.createFragmentUniform( type, this, ns, needsUpdate, this.getLabel() );

				}

				return builder.format( data.fragment.name, type, output );

			}

		}

	};

	exports.InputNode = InputNode;

}));

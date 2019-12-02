/**
 * Generated from 'examples/jsm/nodes/accessors/CameraNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/PositionNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/PositionNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, TempNode_js, FunctionNode_js, FloatNode_js, PositionNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function CameraNode( scope, camera ) {

		TempNode_js.TempNode.call( this, 'v3' );

		this.setScope( scope || CameraNode.POSITION );
		this.setCamera( camera );

	}

	CameraNode.Nodes = ( function () {

		var depthColor = new FunctionNode_js.FunctionNode( [
			"float depthColor( float mNear, float mFar ) {",

			"	#ifdef USE_LOGDEPTHBUF_EXT",

			"		float depth = gl_FragDepthEXT / gl_FragCoord.w;",

			"	#else",

			"		float depth = gl_FragCoord.z / gl_FragCoord.w;",

			"	#endif",

			"	return 1.0 - smoothstep( mNear, mFar, depth );",

			"}"
		].join( "\n" ) );

		return {
			depthColor: depthColor
		};

	} )();

	CameraNode.POSITION = 'position';
	CameraNode.DEPTH = 'depth';
	CameraNode.TO_VERTEX = 'toVertex';

	CameraNode.prototype = Object.create( TempNode_js.TempNode.prototype );
	CameraNode.prototype.constructor = CameraNode;
	CameraNode.prototype.nodeType = "Camera";

	CameraNode.prototype.setCamera = function ( camera ) {

		this.camera = camera;
		this.updateFrame = camera !== undefined ? this.onUpdateFrame : undefined;

	};

	CameraNode.prototype.setScope = function ( scope ) {

		switch ( this.scope ) {

			case CameraNode.DEPTH:

				delete this.near;
				delete this.far;

				break;

		}

		this.scope = scope;

		switch ( scope ) {

			case CameraNode.DEPTH:

				var camera = this.camera;

				this.near = new FloatNode_js.FloatNode( camera ? camera.near : 1 );
				this.far = new FloatNode_js.FloatNode( camera ? camera.far : 1200 );

				break;

		}

	};

	CameraNode.prototype.getType = function ( /* builder */ ) {

		switch ( this.scope ) {

			case CameraNode.DEPTH:

				return 'f';

		}

		return this.type;

	};

	CameraNode.prototype.getUnique = function ( /* builder */ ) {

		switch ( this.scope ) {

			case CameraNode.DEPTH:
			case CameraNode.TO_VERTEX:

				return true;

		}

		return false;

	};

	CameraNode.prototype.getShared = function ( /* builder */ ) {

		switch ( this.scope ) {

			case CameraNode.POSITION:

				return false;

		}

		return true;

	};

	CameraNode.prototype.generate = function ( builder, output ) {

		var result;

		switch ( this.scope ) {

			case CameraNode.POSITION:

				result = 'cameraPosition';

				break;

			case CameraNode.DEPTH:

				var depthColor = builder.include( CameraNode.Nodes.depthColor );

				result = depthColor + '( ' + this.near.build( builder, 'f' ) + ', ' + this.far.build( builder, 'f' ) + ' )';

				break;

			case CameraNode.TO_VERTEX:

				result = 'normalize( ' + new PositionNode_js.PositionNode( PositionNode_js.PositionNode.WORLD ).build( builder, 'v3' ) + ' - cameraPosition )';

				break;

		}

		return builder.format( result, this.getType( builder ), output );

	};

	CameraNode.prototype.onUpdateFrame = function ( /* frame */ ) {

		switch ( this.scope ) {

			case CameraNode.DEPTH:

				var camera = this.camera;

				this.near.value = camera.near;
				this.far.value = camera.far;

				break;

		}

	};

	CameraNode.prototype.copy = function ( source ) {

		TempNode_js.TempNode.prototype.copy.call( this, source );

		this.setScope( source.scope );

		if ( source.camera ) {

			this.setCamera( source.camera );

		}

		switch ( source.scope ) {

			case CameraNode.DEPTH:

				this.near.number = source.near;
				this.far.number = source.far;

				break;

		}

		return this;

	};

	CameraNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.scope = this.scope;

			if ( this.camera ) data.camera = this.camera.uuid;

			switch ( this.scope ) {

				case CameraNode.DEPTH:

					data.near = this.near.value;
					data.far = this.far.value;

					break;

			}

		}

		return data;

	};

	exports.CameraNode = CameraNode;

}));

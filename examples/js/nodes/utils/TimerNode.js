/**
 * Generated from 'examples/jsm/nodes/utils/TimerNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeLib.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeLib.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE));
}(this, function (exports, FloatNode_js, NodeLib_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function TimerNode( scale, scope, timeScale ) {

		FloatNode_js.FloatNode.call( this );

		this.scale = scale !== undefined ? scale : 1;
		this.scope = scope || TimerNode.GLOBAL;

		this.timeScale = timeScale !== undefined ? timeScale : scale !== undefined;

	}

	TimerNode.GLOBAL = 'global';
	TimerNode.LOCAL = 'local';
	TimerNode.DELTA = 'delta';

	TimerNode.prototype = Object.create( FloatNode_js.FloatNode.prototype );
	TimerNode.prototype.constructor = TimerNode;
	TimerNode.prototype.nodeType = "Timer";

	TimerNode.prototype.getReadonly = function () {

		// never use TimerNode as readonly but aways as "uniform"

		return false;

	};

	TimerNode.prototype.getUnique = function () {

		// share TimerNode "uniform" input if is used on more time with others TimerNode

		return this.timeScale && ( this.scope === TimerNode.GLOBAL || this.scope === TimerNode.DELTA );

	};

	TimerNode.prototype.updateFrame = function ( frame ) {

		var scale = this.timeScale ? this.scale : 1;

		switch ( this.scope ) {

			case TimerNode.LOCAL:

				this.value += frame.delta * scale;

				break;

			case TimerNode.DELTA:

				this.value = frame.delta * scale;

				break;

			default:

				this.value = frame.time * scale;

		}

	};

	TimerNode.prototype.copy = function ( source ) {

		FloatNode_js.FloatNode.prototype.copy.call( this, source );

		this.scope = source.scope;
		this.scale = source.scale;

		this.timeScale = source.timeScale;

		return this;

	};

	TimerNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			data.scope = this.scope;
			data.scale = this.scale;

			data.timeScale = this.timeScale;

		}

		return data;

	};

	NodeLib_js.NodeLib.addKeyword( 'time', function () {

		return new TimerNode();

	} );

	exports.TimerNode = TimerNode;

}));

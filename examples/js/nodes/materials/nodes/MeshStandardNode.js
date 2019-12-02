/**
 * Generated from 'examples/jsm/nodes/materials/nodes/MeshStandardNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/StandardNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/PropertyNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/math/OperatorNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/SwitchNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/NormalMapNode.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/StandardNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/PropertyNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/math/OperatorNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/SwitchNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/NormalMapNode.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, THREE, StandardNode_js, PropertyNode_js, OperatorNode_js, SwitchNode_js, NormalMapNode_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function MeshStandardNode() {

		StandardNode_js.StandardNode.call( this );

		this.properties = {
			color: new THREE.Color( 0xffffff ),
			roughness: 0.5,
			metalness: 0.5,
			normalScale: new THREE.Vector2( 1, 1 )
		};

		this.inputs = {
			color: new PropertyNode_js.PropertyNode( this.properties, 'color', 'c' ),
			roughness: new PropertyNode_js.PropertyNode( this.properties, 'roughness', 'f' ),
			metalness: new PropertyNode_js.PropertyNode( this.properties, 'metalness', 'f' ),
			normalScale: new PropertyNode_js.PropertyNode( this.properties, 'normalScale', 'v2' )
		};

	}

	MeshStandardNode.prototype = Object.create( StandardNode_js.StandardNode.prototype );
	MeshStandardNode.prototype.constructor = MeshStandardNode;
	MeshStandardNode.prototype.nodeType = "MeshStandard";

	MeshStandardNode.prototype.build = function ( builder ) {

		var props = this.properties,
			inputs = this.inputs;

		if ( builder.isShader( 'fragment' ) ) {

			// slots
			// * color
			// * map

			var color = builder.findNode( props.color, inputs.color ),
				map = builder.resolve( props.map );

			this.color = map ? new OperatorNode_js.OperatorNode( color, map, OperatorNode_js.OperatorNode.MUL ) : color;

			// slots
			// * roughness
			// * roughnessMap

			var roughness = builder.findNode( props.roughness, inputs.roughness ),
				roughnessMap = builder.resolve( props.roughnessMap );

			this.roughness = roughnessMap ? new OperatorNode_js.OperatorNode( roughness, new SwitchNode_js.SwitchNode( roughnessMap, "g" ), OperatorNode_js.OperatorNode.MUL ) : roughness;

			// slots
			// * metalness
			// * metalnessMap

			var metalness = builder.findNode( props.metalness, inputs.metalness ),
				metalnessMap = builder.resolve( props.metalnessMap );

			this.metalness = metalnessMap ? new OperatorNode_js.OperatorNode( metalness, new SwitchNode_js.SwitchNode( metalnessMap, "b" ), OperatorNode_js.OperatorNode.MUL ) : metalness;

			// slots
			// * normalMap
			// * normalScale

			if ( props.normalMap ) {

				this.normal = new NormalMapNode_js.NormalMapNode( builder.resolve( props.normalMap ) );
				this.normal.scale = builder.findNode( props.normalScale, inputs.normalScale );

			} else {

				this.normal = undefined;

			}

			// slots
			// * envMap

			this.environment = builder.resolve( props.envMap );

		}

		// build code

		return StandardNode_js.StandardNode.prototype.build.call( this, builder );

	};

	MeshStandardNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			console.warn( ".toJSON not implemented in", this );

		}

		return data;

	};

	exports.MeshStandardNode = MeshStandardNode;

}));

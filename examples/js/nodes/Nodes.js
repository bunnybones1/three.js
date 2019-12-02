/**
 * Generated from 'examples/jsm/nodes/Nodes.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/Node.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ConstNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/VarNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/StructNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/AttributeNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ExpressionNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionCallNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeLib.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeFrame.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUniform.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeBuilder.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/BoolNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/IntNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Vector2Node.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Vector3Node.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Vector4Node.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/ColorNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Matrix3Node.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Matrix4Node.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/TextureNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/CubeTextureNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/ScreenNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/ReflectorNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/PropertyNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/RTTNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ColorsNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/PositionNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/NormalNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/CameraNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/LightNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ReflectNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ScreenUVNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ResolutionNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/math/MathNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/math/OperatorNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/math/CondNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/procedural/NoiseNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/procedural/CheckerNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/TextureCubeUVNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/TextureCubeNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/NormalMapNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/BumpMapNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/BypassNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/JoinNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/SwitchNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/TimerNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/VelocityNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/UVTransformNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/MaxMIPLevelNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/SpecularMIPLevelNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/ColorSpaceNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/SubSlotNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/effects/BlurNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/effects/ColorAdjustmentNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/effects/LuminanceNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/RawNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/SpriteNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/PhongNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/StandardNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/MeshStandardNode.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/NodeMaterial.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/SpriteNodeMaterial.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/PhongNodeMaterial.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/StandardNodeMaterial.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/MeshStandardNodeMaterial.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/postprocessing/NodePostProcessing.js')) :
	typeof define === 'function' && define.amd ? define(['exports', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/Node.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/TempNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/InputNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ConstNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/VarNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/StructNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/AttributeNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/ExpressionNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/FunctionCallNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeLib.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUtils.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeFrame.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeUniform.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/core/NodeBuilder.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/BoolNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/IntNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/FloatNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Vector2Node.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Vector3Node.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Vector4Node.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/ColorNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Matrix3Node.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/Matrix4Node.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/TextureNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/CubeTextureNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/ScreenNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/ReflectorNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/PropertyNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/inputs/RTTNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/UVNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ColorsNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/PositionNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/NormalNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/CameraNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/LightNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ReflectNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ScreenUVNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/accessors/ResolutionNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/math/MathNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/math/OperatorNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/math/CondNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/procedural/NoiseNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/procedural/CheckerNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/TextureCubeUVNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/TextureCubeNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/NormalMapNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/misc/BumpMapNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/BypassNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/JoinNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/SwitchNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/TimerNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/VelocityNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/UVTransformNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/MaxMIPLevelNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/SpecularMIPLevelNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/ColorSpaceNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/utils/SubSlotNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/effects/BlurNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/effects/ColorAdjustmentNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/effects/LuminanceNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/RawNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/SpriteNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/PhongNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/StandardNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/nodes/MeshStandardNode.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/NodeMaterial.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/SpriteNodeMaterial.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/PhongNodeMaterial.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/StandardNodeMaterial.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/materials/MeshStandardNodeMaterial.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/nodes/postprocessing/NodePostProcessing.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, Node_js, TempNode_js, InputNode_js, ConstNode_js, VarNode_js, StructNode_js, AttributeNode_js, FunctionNode_js, ExpressionNode_js, FunctionCallNode_js, NodeLib_js, NodeUtils_js, NodeFrame_js, NodeUniform_js, NodeBuilder_js, BoolNode_js, IntNode_js, FloatNode_js, Vector2Node_js, Vector3Node_js, Vector4Node_js, ColorNode_js, Matrix3Node_js, Matrix4Node_js, TextureNode_js, CubeTextureNode_js, ScreenNode_js, ReflectorNode_js, PropertyNode_js, RTTNode_js, UVNode_js, ColorsNode_js, PositionNode_js, NormalNode_js, CameraNode_js, LightNode_js, ReflectNode_js, ScreenUVNode_js, ResolutionNode_js, MathNode_js, OperatorNode_js, CondNode_js, NoiseNode_js, CheckerNode_js, TextureCubeUVNode_js, TextureCubeNode_js, NormalMapNode_js, BumpMapNode_js, BypassNode_js, JoinNode_js, SwitchNode_js, TimerNode_js, VelocityNode_js, UVTransformNode_js, MaxMIPLevelNode_js, SpecularMIPLevelNode_js, ColorSpaceNode_js, SubSlotNode_js, BlurNode_js, ColorAdjustmentNode_js, LuminanceNode_js, RawNode_js, SpriteNode_js, PhongNode_js, StandardNode_js, MeshStandardNode_js, NodeMaterial_js, SpriteNodeMaterial_js, PhongNodeMaterial_js, StandardNodeMaterial_js, MeshStandardNodeMaterial_js, NodePostProcessing_js) { 'use strict';

	// TODO: all nodes
	//export { NodePass } from './postprocessing/NodePass.js';

	Object.defineProperty(exports, 'Node', {
		enumerable: true,
		get: function () {
			return Node_js.Node;
		}
	});
	Object.defineProperty(exports, 'TempNode', {
		enumerable: true,
		get: function () {
			return TempNode_js.TempNode;
		}
	});
	Object.defineProperty(exports, 'InputNode', {
		enumerable: true,
		get: function () {
			return InputNode_js.InputNode;
		}
	});
	Object.defineProperty(exports, 'ConstNode', {
		enumerable: true,
		get: function () {
			return ConstNode_js.ConstNode;
		}
	});
	Object.defineProperty(exports, 'VarNode', {
		enumerable: true,
		get: function () {
			return VarNode_js.VarNode;
		}
	});
	Object.defineProperty(exports, 'StructNode', {
		enumerable: true,
		get: function () {
			return StructNode_js.StructNode;
		}
	});
	Object.defineProperty(exports, 'AttributeNode', {
		enumerable: true,
		get: function () {
			return AttributeNode_js.AttributeNode;
		}
	});
	Object.defineProperty(exports, 'FunctionNode', {
		enumerable: true,
		get: function () {
			return FunctionNode_js.FunctionNode;
		}
	});
	Object.defineProperty(exports, 'ExpressionNode', {
		enumerable: true,
		get: function () {
			return ExpressionNode_js.ExpressionNode;
		}
	});
	Object.defineProperty(exports, 'FunctionCallNode', {
		enumerable: true,
		get: function () {
			return FunctionCallNode_js.FunctionCallNode;
		}
	});
	Object.defineProperty(exports, 'NodeLib', {
		enumerable: true,
		get: function () {
			return NodeLib_js.NodeLib;
		}
	});
	Object.defineProperty(exports, 'NodeUtils', {
		enumerable: true,
		get: function () {
			return NodeUtils_js.NodeUtils;
		}
	});
	Object.defineProperty(exports, 'NodeFrame', {
		enumerable: true,
		get: function () {
			return NodeFrame_js.NodeFrame;
		}
	});
	Object.defineProperty(exports, 'NodeUniform', {
		enumerable: true,
		get: function () {
			return NodeUniform_js.NodeUniform;
		}
	});
	Object.defineProperty(exports, 'NodeBuilder', {
		enumerable: true,
		get: function () {
			return NodeBuilder_js.NodeBuilder;
		}
	});
	Object.defineProperty(exports, 'BoolNode', {
		enumerable: true,
		get: function () {
			return BoolNode_js.BoolNode;
		}
	});
	Object.defineProperty(exports, 'IntNode', {
		enumerable: true,
		get: function () {
			return IntNode_js.IntNode;
		}
	});
	Object.defineProperty(exports, 'FloatNode', {
		enumerable: true,
		get: function () {
			return FloatNode_js.FloatNode;
		}
	});
	Object.defineProperty(exports, 'Vector2Node', {
		enumerable: true,
		get: function () {
			return Vector2Node_js.Vector2Node;
		}
	});
	Object.defineProperty(exports, 'Vector3Node', {
		enumerable: true,
		get: function () {
			return Vector3Node_js.Vector3Node;
		}
	});
	Object.defineProperty(exports, 'Vector4Node', {
		enumerable: true,
		get: function () {
			return Vector4Node_js.Vector4Node;
		}
	});
	Object.defineProperty(exports, 'ColorNode', {
		enumerable: true,
		get: function () {
			return ColorNode_js.ColorNode;
		}
	});
	Object.defineProperty(exports, 'Matrix3Node', {
		enumerable: true,
		get: function () {
			return Matrix3Node_js.Matrix3Node;
		}
	});
	Object.defineProperty(exports, 'Matrix4Node', {
		enumerable: true,
		get: function () {
			return Matrix4Node_js.Matrix4Node;
		}
	});
	Object.defineProperty(exports, 'TextureNode', {
		enumerable: true,
		get: function () {
			return TextureNode_js.TextureNode;
		}
	});
	Object.defineProperty(exports, 'CubeTextureNode', {
		enumerable: true,
		get: function () {
			return CubeTextureNode_js.CubeTextureNode;
		}
	});
	Object.defineProperty(exports, 'ScreenNode', {
		enumerable: true,
		get: function () {
			return ScreenNode_js.ScreenNode;
		}
	});
	Object.defineProperty(exports, 'ReflectorNode', {
		enumerable: true,
		get: function () {
			return ReflectorNode_js.ReflectorNode;
		}
	});
	Object.defineProperty(exports, 'PropertyNode', {
		enumerable: true,
		get: function () {
			return PropertyNode_js.PropertyNode;
		}
	});
	Object.defineProperty(exports, 'RTTNode', {
		enumerable: true,
		get: function () {
			return RTTNode_js.RTTNode;
		}
	});
	Object.defineProperty(exports, 'UVNode', {
		enumerable: true,
		get: function () {
			return UVNode_js.UVNode;
		}
	});
	Object.defineProperty(exports, 'ColorsNode', {
		enumerable: true,
		get: function () {
			return ColorsNode_js.ColorsNode;
		}
	});
	Object.defineProperty(exports, 'PositionNode', {
		enumerable: true,
		get: function () {
			return PositionNode_js.PositionNode;
		}
	});
	Object.defineProperty(exports, 'NormalNode', {
		enumerable: true,
		get: function () {
			return NormalNode_js.NormalNode;
		}
	});
	Object.defineProperty(exports, 'CameraNode', {
		enumerable: true,
		get: function () {
			return CameraNode_js.CameraNode;
		}
	});
	Object.defineProperty(exports, 'LightNode', {
		enumerable: true,
		get: function () {
			return LightNode_js.LightNode;
		}
	});
	Object.defineProperty(exports, 'ReflectNode', {
		enumerable: true,
		get: function () {
			return ReflectNode_js.ReflectNode;
		}
	});
	Object.defineProperty(exports, 'ScreenUVNode', {
		enumerable: true,
		get: function () {
			return ScreenUVNode_js.ScreenUVNode;
		}
	});
	Object.defineProperty(exports, 'ResolutionNode', {
		enumerable: true,
		get: function () {
			return ResolutionNode_js.ResolutionNode;
		}
	});
	Object.defineProperty(exports, 'MathNode', {
		enumerable: true,
		get: function () {
			return MathNode_js.MathNode;
		}
	});
	Object.defineProperty(exports, 'OperatorNode', {
		enumerable: true,
		get: function () {
			return OperatorNode_js.OperatorNode;
		}
	});
	Object.defineProperty(exports, 'CondNode', {
		enumerable: true,
		get: function () {
			return CondNode_js.CondNode;
		}
	});
	Object.defineProperty(exports, 'NoiseNode', {
		enumerable: true,
		get: function () {
			return NoiseNode_js.NoiseNode;
		}
	});
	Object.defineProperty(exports, 'CheckerNode', {
		enumerable: true,
		get: function () {
			return CheckerNode_js.CheckerNode;
		}
	});
	Object.defineProperty(exports, 'TextureCubeUVNode', {
		enumerable: true,
		get: function () {
			return TextureCubeUVNode_js.TextureCubeUVNode;
		}
	});
	Object.defineProperty(exports, 'TextureCubeNode', {
		enumerable: true,
		get: function () {
			return TextureCubeNode_js.TextureCubeNode;
		}
	});
	Object.defineProperty(exports, 'NormalMapNode', {
		enumerable: true,
		get: function () {
			return NormalMapNode_js.NormalMapNode;
		}
	});
	Object.defineProperty(exports, 'BumpMapNode', {
		enumerable: true,
		get: function () {
			return BumpMapNode_js.BumpMapNode;
		}
	});
	Object.defineProperty(exports, 'BypassNode', {
		enumerable: true,
		get: function () {
			return BypassNode_js.BypassNode;
		}
	});
	Object.defineProperty(exports, 'JoinNode', {
		enumerable: true,
		get: function () {
			return JoinNode_js.JoinNode;
		}
	});
	Object.defineProperty(exports, 'SwitchNode', {
		enumerable: true,
		get: function () {
			return SwitchNode_js.SwitchNode;
		}
	});
	Object.defineProperty(exports, 'TimerNode', {
		enumerable: true,
		get: function () {
			return TimerNode_js.TimerNode;
		}
	});
	Object.defineProperty(exports, 'VelocityNode', {
		enumerable: true,
		get: function () {
			return VelocityNode_js.VelocityNode;
		}
	});
	Object.defineProperty(exports, 'UVTransformNode', {
		enumerable: true,
		get: function () {
			return UVTransformNode_js.UVTransformNode;
		}
	});
	Object.defineProperty(exports, 'MaxMIPLevelNode', {
		enumerable: true,
		get: function () {
			return MaxMIPLevelNode_js.MaxMIPLevelNode;
		}
	});
	Object.defineProperty(exports, 'SpecularMIPLevelNode', {
		enumerable: true,
		get: function () {
			return SpecularMIPLevelNode_js.SpecularMIPLevelNode;
		}
	});
	Object.defineProperty(exports, 'ColorSpaceNode', {
		enumerable: true,
		get: function () {
			return ColorSpaceNode_js.ColorSpaceNode;
		}
	});
	Object.defineProperty(exports, 'SubSlotNode', {
		enumerable: true,
		get: function () {
			return SubSlotNode_js.SubSlotNode;
		}
	});
	Object.defineProperty(exports, 'BlurNode', {
		enumerable: true,
		get: function () {
			return BlurNode_js.BlurNode;
		}
	});
	Object.defineProperty(exports, 'ColorAdjustmentNode', {
		enumerable: true,
		get: function () {
			return ColorAdjustmentNode_js.ColorAdjustmentNode;
		}
	});
	Object.defineProperty(exports, 'LuminanceNode', {
		enumerable: true,
		get: function () {
			return LuminanceNode_js.LuminanceNode;
		}
	});
	Object.defineProperty(exports, 'RawNode', {
		enumerable: true,
		get: function () {
			return RawNode_js.RawNode;
		}
	});
	Object.defineProperty(exports, 'SpriteNode', {
		enumerable: true,
		get: function () {
			return SpriteNode_js.SpriteNode;
		}
	});
	Object.defineProperty(exports, 'PhongNode', {
		enumerable: true,
		get: function () {
			return PhongNode_js.PhongNode;
		}
	});
	Object.defineProperty(exports, 'StandardNode', {
		enumerable: true,
		get: function () {
			return StandardNode_js.StandardNode;
		}
	});
	Object.defineProperty(exports, 'MeshStandardNode', {
		enumerable: true,
		get: function () {
			return MeshStandardNode_js.MeshStandardNode;
		}
	});
	Object.defineProperty(exports, 'NodeMaterial', {
		enumerable: true,
		get: function () {
			return NodeMaterial_js.NodeMaterial;
		}
	});
	Object.defineProperty(exports, 'SpriteNodeMaterial', {
		enumerable: true,
		get: function () {
			return SpriteNodeMaterial_js.SpriteNodeMaterial;
		}
	});
	Object.defineProperty(exports, 'PhongNodeMaterial', {
		enumerable: true,
		get: function () {
			return PhongNodeMaterial_js.PhongNodeMaterial;
		}
	});
	Object.defineProperty(exports, 'StandardNodeMaterial', {
		enumerable: true,
		get: function () {
			return StandardNodeMaterial_js.StandardNodeMaterial;
		}
	});
	Object.defineProperty(exports, 'MeshStandardNodeMaterial', {
		enumerable: true,
		get: function () {
			return MeshStandardNodeMaterial_js.MeshStandardNodeMaterial;
		}
	});
	Object.defineProperty(exports, 'NodePostProcessing', {
		enumerable: true,
		get: function () {
			return NodePostProcessing_js.NodePostProcessing;
		}
	});

}));

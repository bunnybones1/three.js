/**
 * Generated from 'examples/jsm/loaders/OBJLoader2Parallel.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/obj2/worker/main/WorkerExecutionSupport.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/obj2/utils/CodeSerializer.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/OBJLoader2.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/obj2/worker/parallel/OBJLoader2Parser.js'), require('/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/obj2/worker/parallel/WorkerRunner.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/obj2/worker/main/WorkerExecutionSupport.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/obj2/utils/CodeSerializer.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/OBJLoader2.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/obj2/worker/parallel/OBJLoader2Parser.js', '/Users/Tomasz/Documents/repos/three.js/examples/jsm/loaders/obj2/worker/parallel/WorkerRunner.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE, global.THREE));
}(this, function (exports, THREE, WorkerExecutionSupport_js, CodeSerializer_js, OBJLoader2_js, OBJLoader2Parser_js, WorkerRunner_js) { 'use strict';

	/**
	 * @author Kai Salmen / https://kaisalmen.de
	 * Development repository: https://github.com/kaisalmen/WWOBJLoader
	 */


	/**
	 * Creates a new OBJLoader2Parallel. Use it to load OBJ data from files or to parse OBJ data from arraybuffer.
	 * It extends {@link OBJLoader2} with the capability to run the parser in a web worker.
	 *
	 * @param [LoadingManager] manager The loadingManager for the loader to use. Default is {@link LoadingManager}
	 * @constructor
	 */
	const OBJLoader2Parallel = function ( manager ) {

		OBJLoader2_js.OBJLoader2.call( this, manager );
		this.preferJsmWorker = false;

		this.executeParallel = true;
		this.workerExecutionSupport = new WorkerExecutionSupport_js.WorkerExecutionSupport();

	};

	OBJLoader2Parallel.OBJLOADER2_PARALLEL_VERSION = '3.1.2';
	console.info( 'Using OBJLoader2Parallel version: ' + OBJLoader2Parallel.OBJLOADER2_PARALLEL_VERSION );


	OBJLoader2Parallel.prototype = Object.assign( Object.create( OBJLoader2_js.OBJLoader2.prototype ), {

		constructor: OBJLoader2Parallel,

		/**
		 * Execution of parse in parallel via Worker is default, but normal {OBJLoader2} parsing can be enforced via false here.
		 *
		 * @param executeParallel True or False
		 * @return {OBJLoader2Parallel}
		 */
		setExecuteParallel: function ( executeParallel ) {

			this.executeParallel = executeParallel === true;
			return this;

		},

		/**
		 * Set whether jsm modules in workers should be used. This requires browser support which is currently only experimental.
		 * @param preferJsmWorker True or False
		 * @return {OBJLoader2Parallel}
		 */
		setPreferJsmWorker: function ( preferJsmWorker ) {

			this.preferJsmWorker = preferJsmWorker === true;
			return this;

		},

		/**
		 * Allow to get hold of {@link WorkerExecutionSupport} for configuration purposes.
		 * @return {WorkerExecutionSupport}
		 */
		getWorkerExecutionSupport: function () {

			return this.workerExecutionSupport;

		},

		/**
		 * Provide instructions on what is to be contained in the worker.
		 * @return {CodeBuilderInstructions}
		 */
		buildWorkerCode: function () {

			let codeBuilderInstructions = new WorkerExecutionSupport_js.CodeBuilderInstructions( true, true, this.preferJsmWorker );
			if ( codeBuilderInstructions.isSupportsJsmWorker() ) {

				codeBuilderInstructions.setJsmWorkerFile( '../examples/loaders/jsm/obj2/worker/parallel/jsm/OBJLoader2Worker.js' );

			}
			if ( codeBuilderInstructions.isSupportsStandardWorker() ) {

				let codeOBJLoader2Parser = CodeSerializer_js.CodeSerializer.serializeClass( 'OBJLoader2Parser', OBJLoader2Parser_js.OBJLoader2Parser );
				let codeObjectManipulator = CodeSerializer_js.CodeSerializer.serializeObject( 'ObjectManipulator', WorkerRunner_js.ObjectManipulator );
				let codeParserPayloadHandler = CodeSerializer_js.CodeSerializer.serializeClass( 'DefaultWorkerPayloadHandler', WorkerRunner_js.DefaultWorkerPayloadHandler );
				let codeWorkerRunner = CodeSerializer_js.CodeSerializer.serializeClass( 'WorkerRunner', WorkerRunner_js.WorkerRunner );

				codeBuilderInstructions.addCodeFragment( codeOBJLoader2Parser );
				codeBuilderInstructions.addCodeFragment( codeObjectManipulator );
				codeBuilderInstructions.addCodeFragment( codeParserPayloadHandler );
				codeBuilderInstructions.addCodeFragment( codeWorkerRunner );

				codeBuilderInstructions.addStartCode( 'new WorkerRunner( new DefaultWorkerPayloadHandler( new OBJLoader2Parser() ) );' );

			}
			return codeBuilderInstructions;

		},

		/**
		 * See {@link OBJLoader2.load}
		 */
		load: function ( content, onLoad, onFileLoadProgress, onError, onMeshAlter ) {

	 		let scope = this;
			function interceptOnLoad( object3d, message ) {

				if ( object3d.name === 'OBJLoader2ParallelDummy' ) {

					if ( scope.parser.logging.enabled && scope.parser.logging.debug ) {

						console.debug( 'Received dummy answer from OBJLoader2Parallel#parse' );

					}

				} else {

					onLoad( object3d, message );

				}

			}

			OBJLoader2_js.OBJLoader2.prototype.load.call( this, content, interceptOnLoad, onFileLoadProgress, onError, onMeshAlter );

		},

		/**
		 * See {@link OBJLoader2.parse}
		 * The callback onLoad needs to be set to be able to receive the content if used in parallel mode.
		 * Fallback is possible via {@link OBJLoader2Parallel#setExecuteParallel}.
		 */
		parse: function ( content ) {

			if ( this.executeParallel ) {

				if ( this.parser.callbacks.onLoad === this.parser._onLoad ) {

					throw "No callback other than the default callback was provided! Aborting!";

				}
				// check if worker has been initialize before. If yes, skip init
				if ( ! this.workerExecutionSupport.isWorkerLoaded( this.preferJsmWorker ) ) {

					this.workerExecutionSupport.buildWorker( this.buildWorkerCode() );

					let scope = this;
					let scopedOnAssetAvailable = function ( payload ) {

						scope._onAssetAvailable( payload );

					};
					function scopedOnLoad( message ) {

						scope.parser.callbacks.onLoad( scope.baseObject3d, message );

					}

					this.workerExecutionSupport.updateCallbacks( scopedOnAssetAvailable, scopedOnLoad );

				}

				// Create default materials beforehand, but do not override previously set materials (e.g. during init)
				this.materialHandler.createDefaultMaterials( false );

				this.workerExecutionSupport.executeParallel(
					{
						params: {
							modelName: this.modelName,
							instanceNo: this.instanceNo,
							useIndices: this.parser.useIndices,
							disregardNormals: this.parser.disregardNormals,
							materialPerSmoothingGroup: this.parser.materialPerSmoothingGroup,
							useOAsMesh: this.parser.useOAsMesh,
							materials: this.materialHandler.getMaterialsJSON()
						},
						data: {
							input: content,
							options: null
						},
						logging: {
							enabled: this.parser.logging.enabled,
							debug: this.parser.logging.debug
						}
					} );

				let dummy = new THREE.Object3D();
				dummy.name = 'OBJLoader2ParallelDummy';
				return dummy;

			} else {

				return OBJLoader2_js.OBJLoader2.prototype.parse.call( this, content );

			}

		},

	} );

	exports.OBJLoader2Parallel = OBJLoader2Parallel;

}));

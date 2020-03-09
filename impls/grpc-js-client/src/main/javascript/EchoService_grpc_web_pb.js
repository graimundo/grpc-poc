/**
 * @fileoverview gRPC-Web generated client stub for org.hitachivantara.echo.grpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.org = {};
proto.org.hitachivantara = {};
proto.org.hitachivantara.echo = {};
proto.org.hitachivantara.echo.grpc = require('./EchoService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.org.hitachivantara.echo.grpc.EchoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.org.hitachivantara.echo.grpc.EchoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.org.hitachivantara.echo.grpc.EchoRequest,
 *   !proto.org.hitachivantara.echo.grpc.EchoResponse>}
 */
const methodDescriptor_EchoService_Echo = new grpc.web.MethodDescriptor(
  '/org.hitachivantara.echo.grpc.EchoService/Echo',
  grpc.web.MethodType.UNARY,
  proto.org.hitachivantara.echo.grpc.EchoRequest,
  proto.org.hitachivantara.echo.grpc.EchoResponse,
  /**
   * @param {!proto.org.hitachivantara.echo.grpc.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.hitachivantara.echo.grpc.EchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.org.hitachivantara.echo.grpc.EchoRequest,
 *   !proto.org.hitachivantara.echo.grpc.EchoResponse>}
 */
const methodInfo_EchoService_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.org.hitachivantara.echo.grpc.EchoResponse,
  /**
   * @param {!proto.org.hitachivantara.echo.grpc.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.org.hitachivantara.echo.grpc.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.org.hitachivantara.echo.grpc.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.org.hitachivantara.echo.grpc.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.org.hitachivantara.echo.grpc.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.org.hitachivantara.echo.grpc.EchoServiceClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/org.hitachivantara.echo.grpc.EchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_Echo,
      callback);
};


/**
 * @param {!proto.org.hitachivantara.echo.grpc.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.org.hitachivantara.echo.grpc.EchoResponse>}
 *     A native promise that resolves to the response
 */
proto.org.hitachivantara.echo.grpc.EchoServicePromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/org.hitachivantara.echo.grpc.EchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_Echo);
};


module.exports = proto.org.hitachivantara.echo.grpc;


const { EchoServiceClient } = require('./EchoService_grpc_web_pb');
const { EchoRequest, EchoResponse } = require('./EchoService_pb');

var echoService = new EchoServiceClient(
    'http://localhost:8080');

var request = new EchoRequest();
request.setMessage( "From grp-web client." );
var metadata = {'custom-header-1': 'value1'};

var call = echoService.echo(request, metadata, function(err, response) {
  if (err) {
    console.log("Error code: " + err.code);
    console.log("Error message: " + err.message);
  } else {
    console.log("Server response message: " + response.getMessage());
  }
});

call.on('status', function(status) {
  console.log("Status code: " + status.code);
  console.log("Status details: " + status.details);
  console.log("Status metadata: " + status.metadata);
});
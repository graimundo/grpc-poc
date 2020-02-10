package org.hitachivantara.echo.dev;

import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import org.hitachivantara.echo.grpc.EchoRequest;
import org.hitachivantara.echo.grpc.EchoResponse;
import org.hitachivantara.echo.grpc.EchoServiceGrpc;

public class GrpcClient {

  public static void main( String[] args ) {
    ManagedChannel channel = ManagedChannelBuilder.forAddress( "localhost", 50051 )
      .usePlaintext() // Do not use in Production...
      .build();

    System.out.println( "Creating client!" );
    EchoServiceGrpc.EchoServiceBlockingStub echoClient = EchoServiceGrpc.newBlockingStub( channel );

    String message = "Hello";
    System.out.println( "Saying " + message + " to the mountains." );
    EchoRequest echoRequest = EchoRequest.newBuilder()
      .setMessage( message )
      .build();

    EchoResponse echoResponse = echoClient.echo( echoRequest );
    System.out.println( "Mountains replied: " + echoResponse.getMessage() );

    /* ------------------------------------ */
    System.out.println( "Shutting down channel!" );
    channel.shutdown();

  }
}

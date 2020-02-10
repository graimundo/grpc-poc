package org.hitachivantara.echo.dev;

import io.grpc.Server;
import io.grpc.ServerBuilder;

import org.hitachivantara.echo.IEchoService;
import org.hitachivantara.echo.grpc.impl.EchoServiceGrpc;
import org.hitachivantara.echo.impl.EchoService;

import java.io.IOException;

public class GrpcServer {

  public static void main( String[] args ) throws IOException, InterruptedException {

    /* Business logic service */
    IEchoService echoServiceLogic = new EchoService(); // poor's man dependency injection

    /* Setting service */
    EchoServiceGrpc echoServiceGrpc = new EchoServiceGrpc();
    echoServiceGrpc.setEchoService( echoServiceLogic );

    Server server = ServerBuilder.forPort( 50051 )
      .addService( echoServiceGrpc )
      .build();

    System.out.println( "Starting grpc server." );
    server.start();

    Runtime.getRuntime().addShutdownHook( new Thread( () -> {
      System.out.println( "Shutting down grpc server." );
      server.shutdown();
      System.out.println( "Shut down grpc server." );
    } ) );

    server.awaitTermination();

  }

}

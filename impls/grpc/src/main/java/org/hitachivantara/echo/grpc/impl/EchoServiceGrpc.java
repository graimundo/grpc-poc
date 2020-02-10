package org.hitachivantara.echo.grpc.impl;

import io.grpc.stub.StreamObserver;
import org.hitachivantara.echo.IEchoService;
import org.hitachivantara.echo.grpc.EchoRequest;
import org.hitachivantara.echo.grpc.EchoResponse;


public final class EchoServiceGrpc extends org.hitachivantara.echo.grpc.EchoServiceGrpc.EchoServiceImplBase {

  public IEchoService getEchoService() {
    return echoService;
  }
  public void setEchoService( IEchoService echoService ) {
    this.echoService = echoService;
  }
  private IEchoService echoService;

  @Override
  public void echo( EchoRequest request, StreamObserver<EchoResponse> responseObserver ) {
    String messageBack = getEchoService().echo( request.getMessage(), 10 );

    EchoResponse echoResponse = EchoResponse.newBuilder()
      .setMessage( messageBack )
      .build();

    responseObserver.onNext( echoResponse );
    responseObserver.onCompleted();
  }
}

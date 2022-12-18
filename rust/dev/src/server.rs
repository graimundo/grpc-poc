use tonic::transport::Server;
use echo_grpc::{EchoServiceGrpc, EchoServiceServer};
use echo_impl::EchoServiceImpl;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "[::1]:50051".parse()?;

    // Business logic service
    let echo_service = EchoServiceImpl{};

    // Instantiate GRPC service wrapper
    let echo_service_grpc = EchoServiceGrpc::new(echo_service);

    // Start GRPC server
    Server::builder()
        .add_service(EchoServiceServer::new(echo_service_grpc))
        .serve(addr)
        .await?;

    Ok(())
}

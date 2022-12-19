pub mod api {
    tonic::include_proto!("org.hitachivantara.echo.grpc");
}

use api::echo_service_server::EchoService as EchoServiceGrpcApi;
use echo_api::EchoService;
use tonic::{Request, Response, Status};

// Re-export client and server wrappers
pub use api::EchoRequest;
pub use api::EchoResponse;
pub use api::echo_service_server::EchoServiceServer;
pub use api::echo_service_client::EchoServiceClient;

pub struct EchoServiceGrpc<T: EchoService + Send + Sync + 'static> {
    service: T,
    repeat_times: u32,
}

impl<T: EchoService + Send + Sync + 'static> EchoServiceGrpc<T> {
    pub fn new(service: T) -> Self {
        EchoServiceGrpc {
            service,
            repeat_times: 10,
        }
    }
}

#[tonic::async_trait]
impl<T: EchoService + Send + Sync + 'static> EchoServiceGrpcApi for EchoServiceGrpc<T> {
    async fn echo(&self, request: Request<EchoRequest>) -> Result<Response<EchoResponse>, Status> {
        let message = request.into_inner().message;
        let result = self.service.echo(&message, self.repeat_times);
        Ok(Response::new(EchoResponse { message: result }))
    }
}

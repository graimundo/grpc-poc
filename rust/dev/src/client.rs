use echo_grpc::{EchoRequest, EchoServiceClient};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut client = EchoServiceClient::connect("http://[::1]:50051").await?;

    let message = "Hello";
    println!("Saying {} to the mountains.", message);
    let request = tonic::Request::new(EchoRequest {
        message: message.into(),
    });

    let response = client.echo(request).await?;
    let response = response.into_inner();

    println!("Mountains replied: {}", response.message);

    Ok(())
}

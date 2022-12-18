fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        .compile(
        //todo: replace with maven download ...
        &["../../../apis/proto/src/main/resources/org/hitachivantara/echo/grpc/EchoService.proto"],
        &["../../../apis/proto/src/main/resources/"],
    )?;
    Ok(())
}

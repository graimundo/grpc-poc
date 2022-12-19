pub trait EchoService {
    fn echo(&self, message: &str, repeat_times: u32) -> String;
}

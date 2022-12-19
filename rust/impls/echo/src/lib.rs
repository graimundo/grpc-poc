use echo_api::EchoService;

pub struct EchoServiceImpl {}

impl EchoService for EchoServiceImpl {
    fn echo(&self, message: &str, repeat_times: u32) -> String {
        let mut result = String::new();

        if repeat_times > 0 {
            result.push_str(message);
        }

        for _ in 1..repeat_times {
            result.push_str( "... ");
            result.push_str(message);
        }

        result
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn returns_empty_string_for_zero_repetitions() {
        let svc = EchoServiceImpl{};
        assert_eq!("", &svc.echo("hello", 0));
    }

    #[test]
    fn returns_message_for_one_repetition() {
        let svc = EchoServiceImpl{};
        let msg = "hello";
        assert_eq!(msg, &svc.echo(msg, 1));
    }

    #[test]
    fn adds_ellipsis_between_repetition() {
        let svc = EchoServiceImpl{};
        let msg = "hello";
        assert_eq!("hello... hello... hello", &svc.echo(msg, 3));
    }
}

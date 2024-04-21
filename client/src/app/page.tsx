import { Button, ButtonGroup, Container, Typography } from "@mui/material";

export default function Page() {
  return (
    <Container className="text-center flex flex-col justify-center gap-4 h-screen align-center">
      <Typography variant="h2">
        Track films you've watched. Save those you want to see. Tell your
        friends what's good.
      </Typography>
      <ButtonGroup className="justify-center">
        <Button color="primary" href="/register">
          Register
        </Button>
        <Button color="secondary" href="/login">
          Login
        </Button>
      </ButtonGroup>
      <Typography variant="subtitle2">
        The social network for film lovers.
      </Typography>
    </Container>
  );
}

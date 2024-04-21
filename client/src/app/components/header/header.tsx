import { Button } from "@mui/material";
import Link from "next/link";
import Container from "../container";

export function Header() {
  return (
    <Container>
      <div className="flex justify-between align-center py-6">
        <h1>MovieRanker</h1>
        <div className="justify-end align-center flex">
          <a href="/login">Login</a>
          <nav>
            <ul className="flex">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/movies">Movies</Link>
              </li>
              <li>
                <Link href="/series">Series</Link>
              </li>
              <li>
                <Link href="/lists">Lists</Link>
              </li>
            </ul>
          </nav>
          <div>
            <a href="/suche">Suche</a>
            <Button>Test</Button>
            <a href="/log">Log</a>
          </div>
        </div>
      </div>
    </Container>
  );
}

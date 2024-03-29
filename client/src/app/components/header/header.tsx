import { Button } from "@mui/material";
import Link from "next/link";

export function Header() {
  return (
    <div className="wrapper container text-white mx-auto">
      <h1>MovieRanker</h1>
      <div className="justify-end align-center flex">
        <a href="/login">Login</a>
        <nav>
          <ul className="flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/filme">Filme</Link>
            </li>
            <li>
              <Link href="/serien">Serien</Link>
            </li>
            <li>
              <Link href="/listen">Listen</Link>
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
  );
}

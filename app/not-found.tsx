import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return <section className="not-found"><div><p className="not-found-code">404</p><Compass aria-hidden="true" /><h1>This page took a wrong turn.</h1><p>The page may have moved, or the address may be incomplete. Head back home to keep exploring.</p><Link className="button" href="/"><ArrowLeft /> Return to homepage</Link></div></section>;
}

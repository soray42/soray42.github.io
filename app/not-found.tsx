import Link from "next/link";

export default function NotFound() {
  return (
    <article className="letter missing">
      <h1>This page is not here.</h1>
      <p>
        <Link href="/">Haotian Yang</Link>
      </p>
    </article>
  );
}

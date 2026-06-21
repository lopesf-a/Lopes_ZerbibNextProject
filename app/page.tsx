import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <p className="eyebrow">Projet Next.js</p>
        <h1>Streaming Dashboard</h1>
        <p>
          Dashboard analytique avec App Router, Server Components, Suspense, skeletons
          granulaires et gestion d’erreurs isolée par bloc.
        </p>
        <Link className="button" href="/dashboard">
          Ouvrir le dashboard
        </Link>
      </section>
    </main>
  );
}

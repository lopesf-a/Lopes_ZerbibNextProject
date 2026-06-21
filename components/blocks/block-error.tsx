'use client';

export default function BlockError({
  title,
  error,
  reset
}: Readonly<{
  title: string;
  error: Error;
  reset: () => void;
}>) {
  return (
    <article className="card error-card" role="alert">
      <div className="card-header">
        <h2>{title}</h2>
        <span>Erreur isolée</span>
      </div>
      <p>
        Ce bloc a échoué, mais le reste du dashboard continue de fonctionner normalement.
      </p>
      <code>{error.message}</code>
      <button type="button" onClick={reset}>
        Réessayer ce bloc
      </button>
    </article>
  );
}

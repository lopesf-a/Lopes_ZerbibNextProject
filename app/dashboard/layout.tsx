export default function DashboardLayout({
  children,
  users,
  posts,
  todos,
  comments
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  posts: React.ReactNode;
  todos: React.ReactNode;
  comments: React.ReactNode;
}>) {
  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <p className="eyebrow">App Router + Streaming</p>
        <h1>Dashboard analytique</h1>
        <p>
          Chaque bloc possède son propre Server Component, sa propre boundary Suspense,
          son skeleton et sa gestion d’erreur.
        </p>
      </header>

      {children}

      <section className="dashboard-grid" aria-label="Blocs analytiques">
        {users}
        {posts}
        {todos}
        {comments}
      </section>
    </main>
  );
}

export default function DashboardCard({
  title,
  subtitle,
  children
}: Readonly<{
  title: string;
  subtitle: string;
  children: React.ReactNode;
}>) {
  return (
    <article className="card">
      <div className="card-header">
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>
      {children}
    </article>
  );
}

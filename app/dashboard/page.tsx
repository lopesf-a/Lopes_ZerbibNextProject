export default function DashboardPage() {
  return (
    <p className="dashboard-note">
      Les données principales sont récupérées côté serveur. Aucun fetch client, aucun useEffect
      et aucun Promise.all global au niveau de la page.
    </p>
  );
}

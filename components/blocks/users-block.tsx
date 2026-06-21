import { getUsers } from '@/lib/api';
import DashboardCard from './dashboard-card';

export default async function UsersBlock() {
  const users = await getUsers();

  return (
    <DashboardCard title="Utilisateurs" subtitle={`${users.length} profils · délai 1s`}>
      <ul className="data-list">
        {users.slice(0, 5).map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <span>{user.email}</span>
            <small>{user.company.name}</small>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}

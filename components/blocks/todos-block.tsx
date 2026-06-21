import { getTodos } from '@/lib/api';
import DashboardCard from './dashboard-card';

export default async function TodosBlock() {
  const todos = await getTodos();
  const doneCount = todos.filter((todo) => todo.completed).length;

  return (
    <DashboardCard title="Todos" subtitle={`User 1 · ${doneCount}/${todos.length} terminées · délai 3s`}>
      <ul className="data-list compact">
        {todos.slice(0, 8).map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? '✅' : '🕓'} {todo.title}</strong>
            <span>{todo.completed ? 'Terminée' : 'En attente'}</span>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}

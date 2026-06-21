import { getComments } from '@/lib/api';
import DashboardCard from './dashboard-card';

export default async function CommentsBlock() {
  const comments = await getComments();

  return (
    <DashboardCard title="Commentaires" subtitle={`${comments.length} commentaires · délai 1.5s`}>
      <ul className="data-list compact">
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>
            <span>{comment.body.slice(0, 90)}...</span>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}

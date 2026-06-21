import { getPosts } from '@/lib/api';
import DashboardCard from './dashboard-card';

export default async function PostsBlock() {
  const posts = await getPosts();

  return (
    <DashboardCard title="Posts" subtitle={`${posts.length} premiers posts · délai 2s`}>
      <ul className="data-list compact">
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <span>{post.body.slice(0, 90)}...</span>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}

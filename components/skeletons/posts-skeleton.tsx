import SkeletonLines from './skeleton-lines';

export default function PostsSkeleton() {
  return (
    <article className="card skeleton-card" aria-busy="true">
      <div className="card-header">
        <h2>Posts</h2>
        <span>Chargement des 10 premiers posts...</span>
      </div>
      <SkeletonLines count={8} />
    </article>
  );
}

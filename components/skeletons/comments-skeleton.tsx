import SkeletonLines from './skeleton-lines';

export default function CommentsSkeleton() {
  return (
    <article className="card skeleton-card" aria-busy="true">
      <div className="card-header">
        <h2>Commentaires</h2>
        <span>Chargement puis erreur simulée...</span>
      </div>
      <SkeletonLines count={4} />
    </article>
  );
}

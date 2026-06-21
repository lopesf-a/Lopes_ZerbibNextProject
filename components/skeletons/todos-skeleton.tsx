import SkeletonLines from './skeleton-lines';

export default function TodosSkeleton() {
  return (
    <article className="card skeleton-card" aria-busy="true">
      <div className="card-header">
        <h2>Todos</h2>
        <span>Chargement des tâches de l’utilisateur 1...</span>
      </div>
      <div className="progress-skeleton" aria-hidden="true" />
      <SkeletonLines count={6} />
    </article>
  );
}

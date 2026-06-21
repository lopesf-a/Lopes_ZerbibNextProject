import SkeletonLines from './skeleton-lines';

export default function UsersSkeleton() {
  return (
    <article className="card skeleton-card" aria-busy="true">
      <div className="card-header">
        <h2>Utilisateurs</h2>
        <span>Chargement des profils...</span>
      </div>
      <div className="avatar-row" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <SkeletonLines count={5} />
    </article>
  );
}

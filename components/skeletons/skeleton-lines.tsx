export default function SkeletonLines({ count = 4 }: Readonly<{ count?: number }>) {
  return (
    <div className="skeleton-lines" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} className="skeleton-line" />
      ))}
    </div>
  );
}

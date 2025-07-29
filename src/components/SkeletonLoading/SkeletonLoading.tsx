import { Skeleton } from "../ui/skeleton";

export function SkeletonLoading({ containerClassName, skeletons }) {
  return (
    <div className={containerClassName} aria-label="carregando">
      {skeletons.map((skeleton) => (
        <Skeleton
          key={skeleton.id}
          className={skeleton.className}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

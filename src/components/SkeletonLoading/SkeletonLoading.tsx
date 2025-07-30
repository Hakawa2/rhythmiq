import { Skeleton } from "../ui/skeleton";

type SkeletonLoadingProps = {
  containerClassName?: string;
  skeletons: {
    id: string;
    className: string;
  }[];
};

export function SkeletonLoading({
  containerClassName,
  skeletons,
}: SkeletonLoadingProps) {
  return (
    <div className={containerClassName} aria-hidden="true">
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

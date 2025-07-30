import { SkeletonLoading } from "@/components/SkeletonLoading/SkeletonLoading";
import { detailsConfig } from "@/config/details.config";

export function DetailsLoading() {
  return (
    <div className="flex flex-col gap-4 md:gap-8" aria-label="carregando">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <SkeletonLoading skeletons={detailsConfig.heroSkeleton.skeleton} />
        <SkeletonLoading
          containerClassName={detailsConfig.headerSkeleton.containerClassName}
          skeletons={detailsConfig.headerSkeleton.skeleton}
        />
      </div>

      <>
        {Array.from(
          { length: detailsConfig.tracksSkeleton.quantity },
          (_, i) => (
            <SkeletonLoading
              key={i}
              containerClassName={
                detailsConfig.tracksSkeleton.containerClassName
              }
              skeletons={detailsConfig.tracksSkeleton.skeleton}
            />
          )
        )}
      </>
    </div>
  );
}

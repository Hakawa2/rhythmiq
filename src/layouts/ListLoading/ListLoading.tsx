import { SkeletonLoading } from "@/components/SkeletonLoading/SkeletonLoading";
import { listConfig } from "@/config/list.config";

export function ListLoading() {
  return (
    <div className="flex flex-wrap gap-4 md:gap-10" aria-label="carregando">
      {Array.from({ length: listConfig.quantity }, (_, i) => (
        <SkeletonLoading
          key={i}
          containerClassName={listConfig.containerClassName}
          skeletons={listConfig.skeletons}
        />
      ))}
    </div>
  );
}

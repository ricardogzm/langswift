import { Skeleton } from "@/components/ui/skeleton";

export function TranslationSkeleton() {
  return (
    <div className="mt-1.5 h-full w-full space-y-2.5 *:h-3.5 lg:mt-2 lg:space-y-3 lg:*:h-4">
      <Skeleton className="w-full" />
      <Skeleton className="w-10/12" />
      <Skeleton className="w-11/12" />
      <Skeleton className="w-8/12" />
    </div>
  );
}

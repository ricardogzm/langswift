import { IconProps } from "@/components/icons/brands/props";
import Image from "next/image";

interface TechCardProps {
  icon: React.FC<IconProps> | string;
  title: string;
  description: string;
}

export function TechCard({ icon: Icon, title, description }: TechCardProps) {
  return (
    <div className="flex items-center rounded-lg border bg-card p-6 transition-colors hover:bg-secondary">
      <div className="flex justify-center gap-4">
        {typeof Icon === "string" ? (
          <div className="size-12 flex-shrink-0 md:size-16">
            <Image
              src={Icon}
              alt={title}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        ) : (
          <Icon className="size-12 flex-shrink-0 fill-current md:size-16" />
        )}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

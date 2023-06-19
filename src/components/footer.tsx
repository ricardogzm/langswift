import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default function Footer() {
  return (
    <footer className="mt-4 border-t">
      <div className="container my-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h6 className="text-xl font-bold">Langswift</h6>
            <p className="text-sm text-muted-foreground">
              Translations powered by AI
            </p>
          </div>
          <div className="space-y-1 md:space-y-2">
            <h6 className="font-bold md:text-xl">Products</h6>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/translate"
                  className={cn(
                    buttonVariants({ variant: "link", size: "off" }),
                    "text-muted-foreground"
                  )}
                >
                  Translation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "link", size: "off" }),
                    "cursor-not-allowed text-muted-foreground"
                  )}
                >
                  Grammar correction
                </Link>
                <Badge className="ml-2" variant={"secondary"}>
                  Coming soon
                </Badge>
              </li>
            </ul>
          </div>
          <div className="space-y-1 md:space-y-2">
            <h6 className="font-bold md:text-xl">Social</h6>
            <ul className="space-y-1">
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ricardogzm/langswift"
                  className={cn(
                    buttonVariants({ variant: "link", size: "off" }),
                    "text-muted-foreground"
                  )}
                >
                  GitHub
                  <ExternalLink
                    className="ml-1"
                    strokeWidth={2}
                    size={"14px"}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

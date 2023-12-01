import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl", className)}>
      {children}
    </div>
  );
}

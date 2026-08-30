import React from "react";
import { cn } from "@/lib/utils";

type SpinnerbLoaderProps = {
  className?: string;
};

const SpinnerbLoader = ({
  className,
}: SpinnerbLoaderProps) => {
  return (
    <span
      aria-label="Loading"
      role="status"
      className={cn(
        "inline-block h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black",
        className
      )}
    />
  );
};

export default SpinnerbLoader;

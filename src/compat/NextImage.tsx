import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
};

const Image = React.forwardRef<HTMLImageElement, Props>(
  ({ fill, priority, quality, sizes, className, loading, ...props }, ref) => {
    const mergedClassName = `${className ?? ""}${fill ? " absolute inset-0 h-full w-full" : ""}`;
    return (
      <img
        ref={ref}
        {...props}
        className={mergedClassName}
        loading={priority ? "eager" : loading ?? "lazy"}
        decoding="async"
      />
    );
  }
);

Image.displayName = "Image";

export default Image;

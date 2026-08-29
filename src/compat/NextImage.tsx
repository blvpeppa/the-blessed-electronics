import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
};

export default function Image({ fill, priority, quality, sizes, ...props }: Props) {
  const className = `${props.className ?? ""}${fill ? " absolute inset-0 h-full w-full" : ""}`;
  return <img {...props} className={className} loading={priority ? "eager" : props.loading ?? "lazy"} decoding="async" />;
}

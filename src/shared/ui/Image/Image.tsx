import {ImageFC} from "./types";
import Image from "next/image"

export const MyImage:ImageFC = (
  {
    src,
    width = 0,
    height = 0,
    style,
    priority,
    loading,
    alt = '',
    quality = 50,
    size,
    fill
  }
) => <Image
  style={{position: fill ? undefined : 'relative', width: fill ? undefined : width ? width : 'auto', height: fill ? undefined : height ? height : 'auto', ...style}}
  src={src}
  alt={alt}
  width={fill ? undefined :width}
  height={fill ? undefined : height}
  layout={!width && !height && !fill ? "responsive" : undefined}
  priority={priority}
  loading={loading}
  quality={quality}
  sizes={size}
  fill={fill}
/>
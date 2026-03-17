import {CSSProperties, FC} from "react";

interface ImageTypes {
  src: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  alt?: string
  quality?: number,
  size?: string
  fill?: true
}

export type ImageFC = FC<ImageTypes>
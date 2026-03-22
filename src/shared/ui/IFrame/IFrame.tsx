"use client"
import {IFrameFC} from "./types";

export const IFrame:IFrameFC = (
  {
    src,
    onLoad
  }
) => (
  <iframe
    src={src}
    frameBorder="0"
    onLoad={onLoad}
  />
)
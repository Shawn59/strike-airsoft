import {FC} from "react";

interface IFrameType {
  src: string;
  onLoad?: VoidFunction
}

export type IFrameFC = FC<IFrameType>
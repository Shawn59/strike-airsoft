import {CSSProperties, FC, Key, SVGProps} from "react";
import {MenuProps} from "antd";

export type AsMenuItem = Required<MenuProps>['items'][number];

interface MenuDataType {
  label: string;
  key: Key;
  MyIcon: FC<SVGProps<SVGSVGElement>>;
  children?: MenuDataType[];
  isParent?: boolean
  dopStyle?: (fontSize:number, margin:number) => CSSProperties
  isSvgIcon?: boolean;
  link?: string;
}

export type GetItemType = (MenuData:MenuDataType) => AsMenuItem

export type MenuDataArrayType = Omit<MenuDataType, 'isParent'>[]
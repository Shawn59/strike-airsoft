"use client";
import {MenuItem} from "entities/MenuItem";
import type {GetItemType, AsMenuItem} from "./types";
import {menuData} from "./MenuData";
import {MenuItems} from "shared/lib";

const getItem:GetItemType = (
  {
    label,
    key,
    MyIcon,
    children,
    isParent = true,
    dopStyle,
    link
  }
) => {
  return {
    key,
    icon: <MenuItem MyIcon={MyIcon} label={label} isParent={isParent} dopStyle={dopStyle} id={key} link={link} />,
    children: children?.map(value => getItem({...value, isParent: false})),
  } as AsMenuItem;
}

export const items:MenuItems = menuData.map(getItem);
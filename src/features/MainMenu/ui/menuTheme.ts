import {MenuThemeType} from "./types";

export const menuTheme:MenuThemeType = {
  primaryIcon: (fontSize:number, margin:number) => ({
    fontSize: `${fontSize}px`,
    margin: `${margin}px`
  }),
  iconSize: {
    fontSize: '25px'
  }
}
import React, { createContext, useContext } from "react"
import { merge } from "lodash"

export interface Theme {
  palette?: {
    primary?: string
    secondary?: string
  }
  roundness?: number
  spacing?: number
  transitionSpeed?: number
}

interface ThemeProviderProps {
  theme?: Theme
  children?: React.ReactNode
}

const defaultTheme = {
  palette: {
    primary: "#007bff",
    secondary: "#03daaf",
  },
  roundness: 4,
  spacing: 8,
  transitionSpeed: 200,
}

const ThemeContext = createContext(defaultTheme)
export const useTheme = () => useContext(ThemeContext) ?? defaultTheme

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  return (
    <ThemeContext.Provider value={merge(defaultTheme, props.theme)}>
      {props.children}
    </ThemeContext.Provider>
  )
}

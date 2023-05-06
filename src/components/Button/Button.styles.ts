import styled, { StyledComponentProps } from "styled-components"
import { Theme } from "../../utils/themeProvider"
import { ButtonStyles, ButtonVariant } from "./Button"

interface StyledButtonProps
  extends StyledComponentProps<"button", any, {}, never> {
  sx: ButtonStyles
  variant: ButtonVariant
  sxTheme: Theme
}

const handleVariant = (p: StyledButtonProps) => {
  switch (p.variant) {
    case "standard":
      return `
        border: solid 2px white;
        background-color: ${p.sx.bgColor ?? p.sxTheme.palette!.primary};
        border-color: ${p.sx.bgColor ?? p.sxTheme.palette!.primary};
        color: ${p.sx.color ?? "white"}
        `
    case "outlined":
      return `
        border: solid 2px white;
        background-color: transparent;
        border-color: ${p.sx.color ?? p.sxTheme.palette!.primary};
        color: ${p.sx.color ?? p.sxTheme.palette!.primary};
      `
  }
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  transition-property: background-color;
  transition-timing-function: ease;
  cursor: pointer;
  padding: ${(p) => `${p.sxTheme.spacing!}px ${2 * p.sxTheme.spacing!}px`};
  transition-duration: ${(p) => p.sxTheme.transitionSpeed!}ms;
  border-radius: ${(p) => p.sxTheme.roundness! * (p.sx.roundness ?? 1)}px;
  ${handleVariant}
`

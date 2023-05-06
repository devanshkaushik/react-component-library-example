import React from "react"
import { StyledButton } from "./Button.styles"
import { useTheme } from "../../utils/themeProvider"

export type ButtonVariant = "standard" | "outlined"
export interface ButtonStyles {
  color?: string
  bgColor?: string
  roundness?: number
}

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  sx?: ButtonStyles
  variant?: ButtonVariant
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const theme = useTheme()
    const { startIcon, endIcon, variant, sx, ...styleProps } = props

    return (
      <StyledButton
        {...styleProps}
        ref={ref}
        variant={variant ?? "standard"}
        sx={sx ?? {}}
        sxTheme={theme}
      >
        {startIcon ?? null}
        {props.children}
        {endIcon ?? null}
      </StyledButton>
    )
  }
)

export default Button

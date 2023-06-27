"use client"

import { ButtonHTMLAttributes, FC } from "react"
import styled from "styled-components"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outlined"
}


const StyledButton = styled.button<{variant: string}>`
  box-sizing: border-box;
  padding: 10px 16px;
  background-color: ${props => props.variant === "default"? "rgba(255, 85, 0, 1)" : props.variant === "outlined"? "white" : "rgba(255, 85, 0, 1)"};
  color: ${props => props.variant === "default"? "white" : props.variant === "outlined"? "rgba(255, 85, 0, 1)" : "white"};
  border: 1px solid ${props => props.variant === "default"? "" : props.variant === "outlined"? "rgba(255, 85, 0, 1)" : ""};
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${props => props.variant === "default"? "white" : props.variant === "outlined"? "rgba(255, 85, 0, 1)" : "white"};
    color: ${props => props.variant === "default"? "rgba(255, 85, 0, 1)" : props.variant === "outlined"? "white" : "rgba(255, 85, 0, 1)"};
  }
`


const Button:FC<Props> = ({variant="default", ...props}) => {

  return (
    <StyledButton variant={variant} {...props}/>
  )
}

export default Button
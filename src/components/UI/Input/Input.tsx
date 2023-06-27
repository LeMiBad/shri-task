"use client"

import { FC, InputHTMLAttributes } from "react"
import styled from "styled-components"


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string
  inputName?: string
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h4 {
    font-weight: 400;
  }
`

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(225, 227, 230, 1);
  outline: none;
  &::placeholder {
    color: rgba(153, 159, 166, 1);
  }
  &:focus-visible {
    border: 1px solid rgba(255, 85, 0, 1);
  }
`


const Input: FC<Props> = ({ inputName, placeHolder, ...props }) => {
  return (
    <Wrapper>
      {inputName && <h4>{inputName}</h4>}
      <StyledInput {...props} placeholder={placeHolder? placeHolder : ""}/>
    </Wrapper>
  )
}

export default Input
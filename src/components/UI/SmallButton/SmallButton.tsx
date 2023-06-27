"use client"


interface Props {
  disabled?: boolean
  children?: React.ReactNode
  onClick: () => void
}


import { FC } from "react"
import styled from "styled-components"

const Wrapper = styled.div<{ disabled: boolean }>`
  width: 23px;
  height: 23px;
  background-color: ${props => props.disabled? "#ff55007d" : "#ff5500"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  user-select: none;
  h5 {
    font-weight: 100;
    font-size: 24px;
    width: 100%;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
`


const SmallButton: FC<Props> = ({ disabled, children, onClick }) => {
  return (
    <Wrapper onClick={onClick} disabled={disabled? disabled : false}>
      {children && <h5>{children && children}</h5>}
    </Wrapper>
  )
}

export default SmallButton
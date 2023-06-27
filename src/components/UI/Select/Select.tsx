"use client"

import { enterAnim } from "@/animations"
import useOpen from "@/hooks/useOpen"
import { FC } from "react"
import styled from "styled-components"
import ArrowSquareDownIcon from "../../Icons/ArrowSquareDownIcon"


interface Props {
  options?: string[]
  pickOption: (name: string) => void
  value: string
  placeHolder?: string
  inputName?: string
}

const Wrapper = styled.div`
  position: relative;
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
  height: 37.5px;
  max-height: 37.5px;
  &::placeholder {
    color: rgba(153, 159, 166, 1);
  }
  &:focus-visible {
    border: 1px solid rgba(255, 85, 0, 1);
  }
`

const ArrowSquareDownIconWrapper = styled.div`
  width: 20px;
  height: 100%;
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 9px 10px;
`

const OptionsWrapper = styled.div<{ optionsLength: number }>`
  position: absolute;
  top: 68px;
  width: 100%;
  border-radius: 10px;
  z-index: 5;
  outline: 1px solid black;
  animation: ${enterAnim} 0.2s forwards;
`

const OptionItem = styled.div<{ i: number, optionsLength: number}>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  ${props => props.optionsLength-1 === props.i && "border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;"}
  ${props => !props.i && "border-top-left-radius: 10px; border-top-right-radius: 10px;"}
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  font-weight: 300;
  background-color: white;
  &:hover {
    background-color: #ebe9e9;
  }
`


const Select: FC<Props> = ({ inputName, placeHolder, options, pickOption, value }) => {
  const { isOpen, switchHandler } = useOpen()

  const optionClickHandler = (name: string) => {
    switchHandler()
    pickOption(name)
  }

  return (
    <Wrapper>
      {inputName && <h4>{inputName}</h4>}
      <StyledInput value={value} onChange={() => {}} placeholder={placeHolder? placeHolder : ""}/>
      <ArrowSquareDownIconWrapper>
        <div></div>
        <ArrowSquareDownIcon isOpen={isOpen} onClick={switchHandler}/>
      </ArrowSquareDownIconWrapper>
      {isOpen && (
        options && <OptionsWrapper optionsLength={options.length}>
          {options.map((option, i) => <OptionItem onClick={() => optionClickHandler(option)} i={i} optionsLength={options.length} key={option}>{option}</OptionItem>)}
        </OptionsWrapper>
      )}
    </Wrapper>
  )
}

export default Select
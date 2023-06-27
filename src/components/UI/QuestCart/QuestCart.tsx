"use client"

import { enterAnim } from "@/animations"
import useOpen from "@/hooks/useOpen"
import React, { FC } from "react"
import styled from "styled-components"
import ArrowSquareDownIcon from "../../Icons/ArrowSquareDownIcon"


interface Props {
  children: React.ReactNode
  answer?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  padding: 10px;
  transition: 0.3s;
  gap: 10px;
`

const AskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Answer = styled.p`
  animation: ${enterAnim} 0.3s forwards;
`


const QuestCart: FC<Props> = ({ children, answer }) => {
  const {isOpen, switchHandler} = useOpen()

  return (
    <Wrapper>
      <AskWrapper>
        {children}
        {answer && <ArrowSquareDownIcon onClick={switchHandler} isOpen={isOpen}/>}
      </AskWrapper>
      {(answer && isOpen) && <Answer>{answer}</Answer>}
    </Wrapper>
  )
}

export default QuestCart
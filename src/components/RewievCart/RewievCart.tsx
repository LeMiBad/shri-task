"use client"

import { FC } from "react"
import styled from "styled-components"
import NotImageIcon from "../Icons/NotImageIcon"


interface Props {
  grade: number
  name: string
  img: string | null
  children: string
}

const Wrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 24px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  gap: 32px;

  span {
    font-weight: 600;
  }
`

const GradeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NotImageWrapper = styled.div`
  min-width: 100px;
  min-height: 100px;
  max-width: 100px;
  max-height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(224, 224, 224, 1);
`

const Description = styled.p`
  font-size: 12px;
`

const RewievCart:FC<Props> = ({ grade, name, img, children }) => {
  return (
    <Wrapper>
      <NotImageWrapper>
        <NotImageIcon/>
      </NotImageWrapper>
      <GradeWrapper>
        <NameWrapper>
          <span>{name}</span>
          <p>Оценка: <span>{grade}</span></p>
        </NameWrapper>
        <br/>
        <Description>{children}</Description>
      </GradeWrapper>
    </Wrapper>
  )
}

export default RewievCart
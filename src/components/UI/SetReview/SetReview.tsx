"use client"

import Modal from "@/components/Modal/Modal"
import useOpen from "@/hooks/useOpen"
import { addBasketItem, removeBasketItem } from "@/store/basket/basketSlice"
import { NextThunkDispatch, RootState } from "@/store/store"
import { IMovie } from "@/types/movie"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import Button from "../Button/Button"
import SmallButton from "../SmallButton/SmallButton"


interface Props {

}


const CounterWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 30px;
`


const SetReview:FC<{movieData: IMovie}> = ({ movieData }) => {
  const { data } = useSelector(((state: RootState) => state.basket))
  const dispatch = useDispatch<NextThunkDispatch>()
  const {isOpen, switchHandler} = useOpen()

  const counter = data.find(item =>  movieData.id === item.id)

  const dicrementHandler = () => {
    if(counter?.counter === 1) {
      switchHandler()
    }
    else {
      dispatch(removeBasketItem(movieData))
    }
  }

  const incrementHandler = () => {
    dispatch(addBasketItem(movieData))
  }

  return (
    <>
      <CounterWrapper>
        <SmallButton disabled={!Boolean(counter)} onClick={dicrementHandler}>-</SmallButton>
        <h4>{counter? counter.counter : 0}</h4>
        <SmallButton disabled={counter?.counter === 30} onClick={incrementHandler}>+</SmallButton>
      </CounterWrapper>
      <Modal title="Удаление билета" isOpen={isOpen} onClose={switchHandler}>
        <br/>
        <p>Вы уверены что хотите удалить билет?</p>
        <br/>
        <div style={{ display: "flex", gap: 10}}>
          <Button onClick={() => dispatch(removeBasketItem(movieData))} variant="default">Да</Button>
          <Button onClick={switchHandler} variant="outlined">Нет</Button>
        </div>
      </Modal>
    </>
  )
}

export default SetReview
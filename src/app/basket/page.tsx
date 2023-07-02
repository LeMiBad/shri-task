"use client"

import Modal from "@/components/Modal/Modal"
import Button from "@/components/UI/Button/Button"
import FilmCart from "@/components/UI/FilmCart/FilmCart"
import useOpen from "@/hooks/useOpen"
import { clearBasketItem } from "@/store/basket/basketSlice"
import { RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 85px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 23px;
`

const ResultWrapper = styled.div`
  position: absolute; 
  width: 100%; 
  height: 50px; 
  bottom: 80px;
  box-sizing: border-box;
  padding: 0 10px; 
  display: flex;
  justify-content: center;
  align-items: center;
`

const CounterWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 24px;

  span {
    font-weight: 600;
  }
`



const BasketPage = () => {
  const { data } = useSelector(((state: RootState) => state.basket))

  const counter = data.reduce((acc, item) => {
    return acc += item.counter
  }, 0)

  


  return (
    <>
      <Wrapper>
        {data.map(basketItem => <FilmCart isBasket key={basketItem.id} movieData={basketItem}/>)}
      </Wrapper>
      {Boolean(counter) && (
        <ResultWrapper>
          <CounterWrapper>
            <p>Итого билетов</p>
            <span>{counter}</span>
          </CounterWrapper>
        </ResultWrapper>
      )}
    </>
  )
}

export default BasketPage
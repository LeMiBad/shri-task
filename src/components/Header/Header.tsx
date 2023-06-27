"use client"

import { RootState } from "@/store/store"
import Link from "next/link"
import { useSelector } from "react-redux"
import styled from "styled-components"
import BasketIcon from "../Icons/BasketIcon"


const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  padding: 20px 40px;
  background-color: rgba(51, 51, 51, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 60px;
  z-index: 1500;

  a {
    color: white;
    text-decoration: none;
    font-size: 19px;
    font-weight: 700;
  }
`


const Header = () => {
  const { data } = useSelector(((state: RootState) => state.basket))

  return (
    <Wrapper>
      <Link href={"/"}>Билетопоиск</Link>
      <BasketIcon basketItemsCount={data.reduce((acc, item) => {
        return acc += item.counter
      }, 0)}/>
    </Wrapper>
  )
}

export default Header
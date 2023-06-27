"use client"


import CrossIcon from "@/components/Icons/CrossIcon"
import Modal from "@/components/Modal/Modal"
import useOpen from "@/hooks/useOpen"
import { removeBasketItem } from "@/store/basket/basketSlice"
import { RootState } from "@/store/store"
import { IMovie } from "@/types/movie"
import Link from "next/link"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import Button from "../Button/Button"
import SetReview from "../SetReview/SetReview"


interface Props {
  movieData: IMovie
  isBasket?: boolean
}


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 44px 24px 24px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`

const FilmInfoWrapper = styled.div`
  display: flex;
  gap: 18px;
  height: 100px;
`

const FilmImage = styled.img`
  height: 100%;
  border-radius: 10px;
`

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  a {
    color: black;
    font-size: 19px;
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  h5{
    font-weight: 400;
  }
`

const FilmCart: FC<Props> = ({ movieData, isBasket }) => {
  const {isOpen, switchHandler} = useOpen()
  const dispatch = useDispatch()


  return (
    <>
      <Modal title="Удаление билета" isOpen={isOpen} onClose={switchHandler}>
        <br/>
        <p>Вы уверены что хотите удалить билет?</p>
        <br/>
        <div style={{ display: "flex", gap: 10}}>
          <Button onClick={() => dispatch(removeBasketItem(movieData))} variant="default">Да</Button>
          <Button onClick={switchHandler} variant="outlined">Нет</Button>
        </div>
      </Modal>
      <Wrapper>
        {isBasket && <div onClick={switchHandler} style={{ position: "absolute", right:15, top: 30 }}>
          <CrossIcon onClick={() => {}}/>
        </div>}
        <FilmInfoWrapper>
          <FilmImage src={movieData.posterUrl}/>
          <NameWrapper>
            <Link href={`film/${movieData.id}`}>{movieData.title}</Link>
            <h5>{movieData.genre}</h5>
          </NameWrapper>
        </FilmInfoWrapper>
        <SetReview switchHandler={switchHandler} movieData={movieData} />
      </Wrapper>
    </>
  )
}

export default FilmCart
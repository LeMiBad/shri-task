"use client"

import { API } from "@/API/API"
import RewievCart from "@/components/RewievCart/RewievCart"
import { IMovie } from "@/types/movie"
import { IReview } from "@/types/review"
import { FC, useEffect, useState } from "react"
import styled from "styled-components"


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 85px 10px;
  box-sizing: border-box;
`

const MainInfo = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  gap: 32px;
`

const Poster = styled.img`
  height: 45vh;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  span {
    font-weight: 600;
  }

  p {
    font-size: 16px;
  }


`


const FilmPage:FC<{params: {id: string}}> = ({params}) => {
  const [movieData, setMovieData] = useState<IMovie | null>(null)
  const [reviews, setReviews] = useState<IReview[]>([])
  const {id} = params

  useEffect(() => {
    API.movies.getCur(id)
    .then(data => setMovieData(data as IMovie))


    API.reviews.getCur(id)
    .then(data => setReviews(data as IReview[]))
  }, [id])

  return (
    <Wrapper>
      {
        movieData && (
          <MainInfo>
            <Poster src={movieData.posterUrl}/>
            <InfoWrapper>
              <h3>{movieData.title}</h3>
              <div>
                <p><span>Жанр: </span>{movieData.genre}</p>
                <p><span>Год выпуска: </span>{movieData.releaseYear}</p>
                <p><span>Рейтинг: </span>{movieData.rating}</p>
                <p><span>Режиссер: </span>{movieData.director}</p>
              </div>
              <br/>
              <span>Описание</span>
              <p style={{ fontSize: 12 }}>{movieData.description}</p>
            </InfoWrapper>
          </MainInfo>
        )
      }
      {reviews.map(reviewItem => {
        return <RewievCart key={reviewItem.id} grade={reviewItem.rating} name={reviewItem.name} img={null}>{reviewItem.text}</RewievCart>
      })}
    </Wrapper>
  )
}

export default FilmPage
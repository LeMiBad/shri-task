"use client"

import QuestCart from "@/components/UI/QuestCart/QuestCart"
import styled from "styled-components"

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 85px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`


const QAndA = () => {
  return (
    <Wrapper>
      <QuestCart><h3>Вопросы и ответы</h3></QuestCart>
      <QuestCart 
        answer="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.">
        <h4>Что такое Билетопоиск?</h4>
      </QuestCart>
      <QuestCart answer="Сервис билетопоиск принадлежит компании (Леонид inc)">
        <h4>Какой компании принадлежит Билетопоиск?</h4>
      </QuestCart>
      <QuestCart answer="Сорри броу, но мы на самом деле тебе пранканули и купить билеты тут нельзя, лол)">
        <h4>Как купить билет на Билетопоиск?</h4>
      </QuestCart>
      <QuestCart answer="На сайте school.frontend ставь 5 из 5. Это будет самый адекватный отзыв братишка. Спасибо заранее">
        <h4>Как оставить отзыв на Билетопоиск?</h4>
      </QuestCart>
    </Wrapper>
  )
}

export default QAndA
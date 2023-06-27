"use client";

import { enterAnim } from "@/animations";
import ArrowSquareDownIcon from "@/components/Icons/ArrowSquareDownIcon";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 85px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  padding: 10px;
  transition: 0.3s;
  gap: 10px;
`;

const AskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: 500;
  }
`;

const Answer = styled.p`
  font-size: 15px;
  animation: ${enterAnim} 0.3s forwards;
`;

const About = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <AskWrapper>
            <h2>О нас</h2>
        </AskWrapper>
        <Answer>Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.</Answer>
        <Answer/>
        <Answer>был запущен в 2003 году. Портал предоставляет пользователям информацию о фильмах и их создателях, новости кино, интервью с актерами и другими знаменитостями, рецензии пользователей, расписание сеансов в кинотеатрах, ТВ-программу и другие разделы.</Answer>
        <Answer/>
        <Answer>Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и Дмитрий Суханов. Владельцем проекта являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций принадлежало её совладельцу — французской компании ООО AlloCiné. 15 октября 2013 года сервис купила компания «Яндекс» (размер сделки — $80 млн, около 2,6 млрд рублей на то время).</Answer>
      </CardWrapper>
    </Wrapper>
  );
};

export default About;

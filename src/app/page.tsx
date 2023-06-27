"use client";

import useFilterMovies from "@/hooks/useFilterMovies";
import styled from "styled-components";
import FilmCard from "../components/UI/FilmCart/FilmCart";
import Input from "../components/UI/Input/Input";
import Select from "../components/UI/Select/Select";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 85px 10px;
  display: flex;
  justify-content: space-between;
  gap: 23px;
`;

const Plug = styled.div`
  width: 30%;
`;

const FilmsWrapper = styled.div`
  flex-grow: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FilterWrapper = styled.div`
  position: fixed;
  left: 10px;
  width: 30%;
  height: calc(100% - 168px);
  top: 84px;
  border-radius: 10px;
  background-color: white;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainPage = () => {
  const {
    movies,
    name,
    changeName,
    cinemas,
    selectedCinemaName,
    selectCinema,
    genres,
    selectGenre,
    selectedGenre,
  } = useFilterMovies();

  return (
    <Wrapper>
      <Plug />
      <FilterWrapper>
        <h4>Фильтр поиска</h4>
        <Input
          value={name}
          onChange={(e) => {
            changeName(e);
          }}
          inputName="Название"
          placeHolder="Введите название"
        />
        <Select
          options={genres}
          pickOption={selectGenre}
          value={selectedGenre}
          inputName="Жанр"
          placeHolder="Выберите жанр"
        />
        <Select
          value={selectedCinemaName}
          pickOption={selectCinema}
          options={cinemas.map((cinema) => cinema.name)}
          inputName="Кинотеатр"
          placeHolder="Выберите кинотеатр"
        />
      </FilterWrapper>
      <FilmsWrapper>
        {movies.map((filmData) => (
          <FilmCard key={filmData.id} movieData={filmData} />
        ))}
      </FilmsWrapper>
    </Wrapper>
  );
};

export default MainPage;

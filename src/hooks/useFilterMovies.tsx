import { API } from "@/API/API"
import { fetchMovies } from "@/store/movies/moviesSlice"
import { NextThunkDispatch, RootState } from "@/store/store"
import { ICinema } from "@/types/cinema"
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


const useFilterMovies = () => {
  const dispatch = useDispatch<NextThunkDispatch>()
  const movies = useSelector(((state: RootState) => state.movies))
  const [name, setName] = useState("")
  const [cinemas, setCinemas] = useState<ICinema[]>([])
  const [selectedCinemaName, setSelectedCinemaName] = useState<string>("")
  const [selectedGenre, setSelectedGenre] = useState<string>("")

  const genres = Array.from(new Set(movies.rows.flatMap(movie => movie.genre)))

  const selectGenre = (genre: string) => {
    if(selectedGenre === genre) {
      setSelectedGenre("")
    }
    else {
      setSelectedGenre(genre)
    }
  }

  const selectCinema = (cinemaName: string) => {
    if(cinemaName === selectedCinemaName) {
      setSelectedCinemaName("")
    }
    else {
      setSelectedCinemaName(cinemaName)
    }
  }

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  
  const selectedCinema = selectedCinemaName ? cinemas.find(cinema => cinema.name === selectedCinemaName) : null

  useEffect(() => {
    dispatch(fetchMovies(selectedCinema?.id || null))
  }, [dispatch, selectedCinema])


  useEffect(() => {
    API.cinemas.get()
    .then(data => {
      console.log(data)
      console.log("ПОЛУЧАЕМ КИНОТЕАТРЫ")
      setCinemas(data)
    })
  }, [])


  const filteredMovies = movies.rows.filter(movie => 
    movie.title.toLowerCase().includes(name.toLowerCase()) &&
    (selectedCinema ? selectedCinema.movieIds.includes(movie.id) : true) && 
    (selectedGenre ? movie.genre === selectedGenre : true)
  )

  return {
    movies: filteredMovies,
    name,
    changeName,
    selectCinema,
    selectedCinemaName,
    cinemas,
    genres,
    selectGenre,
    selectedGenre
  }
}

export default useFilterMovies

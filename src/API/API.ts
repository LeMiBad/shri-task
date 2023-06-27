import { IReview } from './../types/review';
import { IMovie } from "@/types/movie"
import axios from "axios"
import { ICinema } from '@/types/cinema';

const defaultPath = "http://localhost:3001/api"

const cashedMovie: {[movieId: string]: IMovie} = {}
const cashedReviews: {[movieId: string]: IReview} = {}
let cashedCinemas: ICinema[] | null = null
const cashedCinemasMovies: {[cinemaId: string]: IMovie[]} = {}

export const API = {
  defaultPath,
  movies: {
    get: async (cinemaId: string) => {

      if(cashedCinemasMovies[cinemaId]) {
        return cashedCinemasMovies[cinemaId]
      }

      else {
        console.log(cinemaId)
        const movies = await axios.get(`${defaultPath}/movies${cinemaId.length? `?movieId=${cinemaId}` : ""}`)
  
        cashedCinemasMovies[cinemaId || ""] = movies.data
        return movies.data
      }
    },
    getCur: async (movieId: string) => {
      if(cashedMovie[movieId]) {
        return cashedMovie[movieId]
      }

      const MovieData = await axios.get(`${defaultPath}/movie?movieId=${movieId}`)

      cashedMovie[movieId] = MovieData.data

      return MovieData.data
    }
  },
  reviews: {
    getAll: () => {
      
    },
    getCur: async (movieId: string) => {
      if(cashedReviews[movieId]) {
        return cashedReviews[movieId]
      }

      const reviews = await axios.get(`${defaultPath}/reviews?movieId=${movieId}`)

      cashedReviews[movieId] = reviews.data

      return reviews.data
    }
  },
  cinemas: {
    get: async () => {
      if(cashedCinemas) {
        return cashedCinemas
      }

      const cinemas = await axios.get(`${defaultPath}/cinemas`)

      cashedCinemas = cinemas.data

      return cinemas.data
    }
  }
}
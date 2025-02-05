import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { MovieCard } from "../components/MovieCard"
import "../assets/css/movieGrid.css"

const searchURL = import.meta.env.VITE_SEARCH
const apiKEY = import.meta.env.VITE_API_KEY

export function Search() {
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKEY}&query=${query}`
        getSearchedMovies(searchWithQueryURL)
    }, [query])


    return (
        <div className="container">
            <h2 className="title">Results for: <span className="query-text">{ query }</span></h2>
            <div className="movies-container">
                { movies.length === 0 && <p>We dont have that movie in DB :(</p> }
                { movies.length > 0 && movies.map((movie) => <MovieCard key={ movie.id } movie={ movie }  />) }
            </div>
        </div>
    )
}
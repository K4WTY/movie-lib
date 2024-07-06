import { useState, useEffect } from "react"
import { MovieCard } from "../components/MovieCard"
import "../assets/css/movieGrid.css"

const moviesURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY

export function Home() {
    const [topMovies, setTopMovies] = useState([])

    const getTopRotedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKEY}`
        getTopRotedMovies(topRatedUrl)
    }, [])

    return (
        <div className="container">
            <h2 className="title">Best movies</h2>
            <div className="movies-container">
                { topMovies.length === 0 && <p>Loading...</p> }
                { topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={ movie.id } movie={ movie }  />) }
            </div>
        </div>
    )
}
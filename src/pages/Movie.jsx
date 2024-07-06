import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { MovieCard } from "../components/MovieCard"
import "../assets/css/movies.css"

import { Wallet, ArrowUpNarrowWide, Timer, TextIcon, Currency } from "lucide-react"

const moviesURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY

export function Movie() {
    const {id} = useParams()
    const [movie, setMovies] = useState([])

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data)
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKEY}`
        getMovie(movieUrl)
    }, [])

    const formatCurrency = (number) => {
        if (!number) return
        return number.toLocaleString("en-us", {
            style: "currency",
            currency: "USD"
        })
    }

    return (
        <div className="movie-page">
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className="tagline">{movie.tagline}</p>
                    <div className="info">
                        <h3><Wallet /> Budget:</h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>
                    <div className="info">
                        <h3><ArrowUpNarrowWide /> Revenue:</h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div className="info">
                        <h3><Timer /> Time:</h3>
                        <p>{movie.runtime} min</p>
                    </div>
                    <div className="info description">
                        <h3><TextIcon /> Description:</h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            )}
        </div>
    )
}
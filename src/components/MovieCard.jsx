import { Link } from "react-router-dom"
import { StarIcon } from "lucide-react"

const imageURL = import.meta.env.VITE_IMG

export function MovieCard({ movie, showLink = true }) {
    return (
        <div className="movie-card">
            <img src={ imageURL + movie.poster_path } alt={ movie.title } />
            <h2>{ movie.title }</h2>
            <p>
                <StarIcon />
                { movie.vote_average }
            </p>
            { showLink && <Link to={`/movie/${ movie.id }`}>Details</Link>}
        </div>
    )
}
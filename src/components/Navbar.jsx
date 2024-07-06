import { Link, useNavigate } from "react-router-dom"
import { SearchIcon, CameraIcon } from "lucide-react"
import { FormEvent, FormEventHandler, useState } from "react"
import "../assets/css/navbar.css"

export function Navbar() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault() 
        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/"><CameraIcon />MoviesLib</Link>
            </h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Search a movie" onChange={ (e) => setSearch(e.target.value) } value={ search } />
                <button type="submit"><SearchIcon /></button>
            </form>
        </nav>
    )
}
import React from 'react'
import NavBar from "./NavBar"
import Hero from "./Hero"
import { useSelector } from 'react-redux'

function Header() {
    const state = useSelector(state => state.Movie)
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    var randomMovie = []

    if (state) {
        var randomMovie = state[0].movies[getRandomInt(21)]
    }

    return (
        <div className="header h-screen bg-blue-700" style={{ backgroundImage: `url(${BASE_IMG_URL}${randomMovie ? randomMovie.poster_path : ""})` }}>
            <NavBar />
            <Hero title={randomMovie ? randomMovie.title || randomMovie.name : "Title"} overview={randomMovie ? randomMovie.overview : "Overview"} />
        </div>
    )
}

export default Header

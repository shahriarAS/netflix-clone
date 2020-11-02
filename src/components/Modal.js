import React from 'react'

function Modal(props) {
    const {movie} = props
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"
    return (
        <div id="mod" className="mod fixed w-full bg-gray-800 overflow-auto popup text-white" style={{ backgroundImage: `linear-gradient(90deg, #000 30%,  rgba(51,51,51,0.5)), url(${BASE_IMG_URL}${movie ? movie.backdrop_path : ""})` }}>
            <div className="popup__text pl-8 md:pl-16 py-8 md mod">
                <i className="fa fa-times text-2xl cursor-pointer right-0 m-4 top-0 absolute"></i>
                <h1 className="text-4xl font-bold mod">{movie ? (movie.title || movie.name) : "The Movie Title"}</h1>
                <h3 className="text-lg mt-2 mb-4 mod"><span className="text-green-400">Rating : {movie ? movie.vote_average : ""}</span> Release Date: {movie ? movie.release_date : ""}</h3>
                <p className="text-gray-600 mb-4 mod">{movie ? movie.overview : ""}</p>
                <div className="flex mod">
                    <button className="z-50 py-1 mr-2 px-8 bg-red-700 text-xs md:text-lg uppercase popup__btn mod">
                        <i className="fa fa-play mr-2 mod"></i>
                    Play
                </button>
                    <button className="popup__btn border-white border-2 py-1 px-8 uppercase text-xs md:text-lg mod"><i
                        className="fa fa-list mr-2 mod"></i> My List</button>
                </div>
            </div>

        </div>
    )   
}

export default Modal

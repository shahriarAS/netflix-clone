import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'

function ImageRowSearch() {
    const Search = useSelector(state => state.Search)
    const Movies = useSelector(state => state.Movie)
    const [state, setstate] = useState({
        type: false,
        data: {}
    })
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

    const filtered = [];

    for (const genre of Movies) {
        for (const movie of genre.movies) {
            if ((movie.title ? movie.title.toLowerCase().search(Search) !== -1 : movie.name.toLowerCase().search(Search) !== -1)) {
                filtered.push(movie)
            }
            console.log(movie.overview.toLowerCase())
            console.log(movie)
        }
    }


    function Show(i) {
        if (state.type === true) {
            setstate({ data: {}, type: false })
        }
        else {
            setstate({ data: i, type: true })
        }
    }

    function OffModal(event) {
        const listofclass = Array.from(event.target.classList).filter(i => i === "mod")
        console.log(listofclass)
        if (state.type === true && (listofclass.length === 0)) {
            setstate({ data: {}, type: false })
        }
        console.log(Array.from(event.target.classList))
    }

    return (
        <>
            <section className="bg-black py-4 h-full text-green-400">
                <div className="px-8">
                    <div className="row" onClick={OffModal}>
                        <h1 className="text-2xl">Movie by {Search}</h1>
                        <div className="poster_row flex gap-2 py-8 flex-wrap m-auto justify-center">
                            {
                                filtered.map(
                                    i => (
                                        <img onClick={() => Show(i)} key={i.id} className="poster_img_lg object-contain w-40 md:w-64 h-auto" src={BASE_IMG_URL + i.poster_path}
                                            alt={i.title || i.name} />
                                    )
                                )
                            }
                        </div>
                        <div>
                            {state.type ? <Modal movie={state.data} /> : ""}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImageRowSearch
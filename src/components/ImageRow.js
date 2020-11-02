import React from 'react'
import { useSelector } from 'react-redux'
import ImageRowLarge from "./ImageRowLarge"
import ImageRowSmall from "./ImageRowSmall"

function ImageRow(props) {
    const { title, movies } = props
    const state = useSelector(state => state.Movie)

    console.log("Render ImageRow", movies)

    return (
        <>
            <section className="bg-black my-12 overflow-hidden md:py-4 h-full text-green-400">
                <div className="px-8">
                    {
                        (title === "Trending") ? <ImageRowLarge title={title} movieByGenre={movies} /> : <ImageRowSmall title={title} movieByGenre={movies} />
                    }
                </div>
            </section>
        </>
    )
}

export default ImageRow;
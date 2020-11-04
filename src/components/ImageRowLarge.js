import React, { useState } from 'react'
import Modal from './Modal'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    }
};



function ImageRowLarge(props) {
    const { title, movieByGenre } = props
    const [state, setstate] = useState({
        type: false,
        data: {}
    })
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

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
            <div className="row" onClick={OffModal}>
                <h1 className="text-2xl">{title}</h1>
                <div className="poster_row overflow-y-hidden flex gap-2 py-8 overflow-x-scroll"><Carousel
                    containerClass="carousel-container"
                    itemClass="carousel-item"
                    responsive={responsive}
                >
                    {
                        movieByGenre ? movieByGenre.map(
                            movie => (
                                <img onClick={() => Show(movie)} key={movie.id} className="poster_img_lg object-contain w-40 md:w-64 h-auto" src={BASE_IMG_URL + movie.poster_path}
                                    alt={movie.title || movie.name} />
                            )
                        ) : ""
                    }
                </Carousel>
                </div>
                <div>

                </div>
                <div>
                    <Modal className="hidden" movie={state.data} />
                </div>
            </div>
        </>
    )
}

export default ImageRowLarge

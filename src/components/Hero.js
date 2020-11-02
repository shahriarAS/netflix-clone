import React from 'react'

function Hero(props) {
    const { title, overview } = props
    return (
        <div className="hero overflow-hidden">
            <div className="absolute overflow-hidden hero_text pl-4 md:pl-8 text-white">
                <h1 className="text-white font-bold overflow-hidden text-4xl">{title}</h1>
                <div className="flex flex-col md:flex-row mx-auto w-32 md:w-full overflow-hidden gap-4 mt-4">
                    <button
                        className="btn-modal md:px-12 text-sm md:text-lg font-bold py-2 hover:bg-white hover:text-black">
                        <i className="fa fa-play mr-2"></i> Play
                        </button>
                    <button
                        className="btn-modal md:px-12 text-sm md:text-lg font-bold py-2 hover:bg-white hover:text-black">
                        <i className="fa fa-list mr-2"></i> My List
                        </button>
                </div>
                <p className="py-2 hero_p overflow-hidden text-lg">{overview}</p>
            </div>
        </div>
    )
}

export default Hero
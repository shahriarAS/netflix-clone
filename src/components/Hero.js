import React from 'react'

function Hero(props) {
    const {title, overview} = props
    return (
        <div className="hero">
            <div className="absolute hero_text pl-8 text-white">
                <h1 className="text-white font-bold text-4xl">{title}</h1>
                <div className="flex gap-4 mt-4">
                    <button
                        className="btn-modal px-12 text-sm md:text-lg font-bold py-2 hover:bg-white hover:text-black">
                        <i className="fa fa-play mr-2"></i> Play
                        </button>
                    <button
                        className="btn-modal px-12 text-sm md:text-lg font-bold py-2 hover:bg-white hover:text-black">
                        <i className="fa fa-list mr-2"></i> My List
                        </button>
                </div>
    <p className="pt-2 text-lg">{overview}</p>
            </div>
        </div>
    )
}

export default Hero

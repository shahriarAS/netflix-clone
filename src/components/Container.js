import React from 'react'
import ImageRow from './ImageRow'
import { useSelector } from 'react-redux'

function Container(props) {
    const state = useSelector(state => state)
    return (
        <>
            {
                state.map(movies => (
                    <ImageRow key={movies.title} title={movies.title} movies={movies.movies} />
                ))
            }
        </>
    )
}

export default Container

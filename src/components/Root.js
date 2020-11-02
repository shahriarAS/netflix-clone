import React, { useEffect } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'
import ImageRow from './ImageRow'
import ImageRowSearch from "./ImageRowSearch"
import RootReducer from './redux/RootReducer'

function Root() {
    const state = useSelector(state => state.Movie)
    const search = useSelector(state => state.Search)
    const dispatch = useDispatch(RootReducer)
    console.log("Render Root", state)

    useEffect(() => {
        if (search !== "") {
            dispatch({
                type: "SEARCH",
                payload: ""
            })
        }
    }, [search])

    return (
        <>
            <section id="disable" className="bg-black">
                {(state.length === 7) ? (search !== "") ? (
                    <div>
                        <Header />
                        <ImageRowSearch />
                        <Footer />
                    </div>
                ) : (
                        <div>
                            <Header />
                            {
                                state.map(mov => (
                                    <ImageRow key={mov.title} title={mov.title} movies={mov.movies} />
                                ))
                            }
                            <Footer />
                        </div>
                    ) : ""}
            </section>
        </>
    )
}

export default Root

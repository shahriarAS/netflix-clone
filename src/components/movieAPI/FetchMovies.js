import React, { useEffect } from 'react'
import axios from "axios"
import RootReducer from "../redux/RootReducer"
import { useDispatch } from 'react-redux'

function FetchMovies(props) {
    const { title, fetchurl } = props
    const dispatch = useDispatch(RootReducer)


    useEffect(() => {
        async function fetchingdata() {
            const BASE_URL = "https://api.themoviedb.org/3"
            const response = await axios.get(BASE_URL + fetchurl)
            dispatch({
                type: "POPULATE",
                title: title,
                payload: response.data.results
            })
            return response;
        }
        fetchingdata()
    }, [fetchurl])
    return (
        <>
        </>
    )
}

export default FetchMovies

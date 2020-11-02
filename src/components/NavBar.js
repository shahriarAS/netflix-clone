import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import netflix from "../assets/img/netflix.png";
import RootReducer from "../components/redux/RootReducer"

function NavBar() {
    const dispatch = useDispatch(RootReducer)
    const [term, setTerm] = useState()
    const [navBG, setNavBg] = useState(false)
    const [menu, setMenu] = useState(false)

    function SearchMovies(event) {
        event.preventDefault()
        dispatch(
            {
                type: "SEARCH",
                payload: term
            }
        )
    }

    document.addEventListener("scroll", () => {
        if (window.scrollY >= 80) {
            setNavBg(true)
        }
        else {
            setNavBg(false)
        }
    });

    function MenuShow() {
        if (menu === true) {
            setMenu(false)
        }
        else {
            setMenu(true)
        }
    }

    return (
        <div className="nav_full">
            <nav className={navBG ? "fixed navT m-auto w-full overflow-hidden py-2" : "fixed m-auto w-full overflow-hidden py-2"}>
                <ul className="flex list-none gap-4 px-4 md:px-12 align-middle justify-between m-auto">
                    <div className="flex gap-4 text-gray-100 justify-center items-center">
                        <li onClick={MenuShow} className="md:hidden self-center hover:text-gray-500 font-bold text-2xl">
                            <i className="fa fa-bars cursor-pointer"></i>
                        </li>
                        <Link to="/">
                            <li onClick={() => dispatch({ type: "SEARCH", payload: "" })}>
                                <img className="w-20 md:w-32" src={netflix} alt="Logo" />
                            </li>
                        </Link>

                        <div className="hidden md:flex gap-4">
                            <Link to="/" className="self-center hover:text-gray-500 font-bold">
                                <li onClick={() => dispatch({ type: "SEARCH", payload: "" })} className="nav_link">Home</li>
                            </Link>
                            <Link to="/" className="self-center hover:text-gray-500 font-bold">
                                <li onClick={() => dispatch({ type: "SEARCH", payload: "" })} className="nav_link">TV Shows</li>
                            </Link>
                            <Link to="/" className="self-center hover:text-gray-500 font-bold">
                                <li onClick={() => dispatch({ type: "SEARCH", payload: "" })} className="nav_link">Movies</li>
                            </Link>
                            <Link to="/" className="self-center hover:text-gray-500 font-bold">
                                <li onClick={() => dispatch({ type: "SEARCH", payload: "" })} className="nav_link">Recently Added</li>
                            </Link>
                        </div>

                    </div>

                    <div className="float-right">
                        <form className="search_form" onSubmit={SearchMovies}>
                            <input type="search" placeholder="Search" onChange={(event) => setTerm(event.target.value)} />
                        </form>

                    </div>
                </ul>
            </nav>
            <div className={menu ? "" : "hideMenu"}>
                <div className="md:hidden navT flex flex-col text-xs md:text-lg list-none text-white menu py-4">
                    <Link to="/"><li className="hover:text-gray-500 border-blue-100 border-b-2 cursor-pointer py-2 px-8"><i className="fa fa-home mr-2"></i>Home</li></Link>
                    <Link to="/"><li className="hover:text-gray-500 border-blue-100 border-b-2 cursor-pointer py-2 px-8"><i className="fa fa-tv mr-2"></i>Tv Shows</li></Link>
                    <Link to="/"><li className="hover:text-gray-500 border-blue-100 border-b-2 cursor-pointer py-2 px-8"><i className="fa fa-film mr-2"></i>Movies</li></Link>
                    <Link to="/"><li className="hover:text-gray-500 border-blue-100 border-b-2 cursor-pointer py-2 px-8"><i className="fa fa-clock-o mr-2"></i>Recently Added</li></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar

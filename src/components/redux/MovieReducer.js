const initialState = [
]

function MovieReducer(state = initialState, action) {
    switch (action.type) {
        case "POPULATE":
            return [...state, { title: action.title, movies: action.payload }]
        default:
            return state
    }
}

export default MovieReducer;
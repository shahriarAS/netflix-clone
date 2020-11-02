const API_KEY = "c735fe99e815018ddd36669bca65fdf6";

const requests = {
    Trending: `/trending/all/day?api_key=${API_KEY}`,
    NetflixOriginal: `/discover/tv?api_key=${API_KEY}`,
    TopRated: `/movie/top_rated?api_key=${API_KEY}`,
    ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    AnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    AdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`
}

export default requests
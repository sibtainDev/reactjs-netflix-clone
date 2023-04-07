import axios from "axios"
const baseUrl = "https://api.themoviedb.org/3"
const token = import.meta.env.VITE_APP_TMDB_API
const headers = {
    Authorization: `bearer ${token}`

}
export const fetchMovies = async (url,params) => {
    try {
        const {data} = await axios.get(
            `${baseUrl}${url}?api_key=f432f872f7a9edcf8c0cd5b85c416ff0`
        )
        return data;
    } catch (error) {
       console.log(error) 
    }
}

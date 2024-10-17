import { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import { Grid, Typography} from '@mui/material';
import axios from 'axios';
import Error from './Errors'

const Results = (props) => {

    let { searchValue } = props
    
    const defaultTitle = "Now Playing"
    const [title, setTitle] = useState(defaultTitle);
    const [movieCards, setMovieCards] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const baseUrl = "https://api.themoviedb.org/3"
    const apiKey = process.env.VITE_TMDB_API_TOKEN;

    useEffect(() => {
        let route = "movie/now_playing"
        let params = {language: 'en-US', page: '1'}

        if(searchValue !=""){
            params = {query: searchValue, include_adult: 'false', language: 'en-US', page: '1'}
            route = "search/movie"
            setTitle(`Showing results for: ${searchValue}`)
        } else
            setTitle(defaultTitle);

        let endpoint = `${baseUrl}/${route}`

        const options = {
            method: 'GET',
            url: `${endpoint}`,
            params: params,
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${apiKey}` 
            }
        };
  
        axios(options)
        .then(response => {
          console.log(response.data)
        setIsVisible(false)
          let movieArray = response.data.results.map((m) => {
            return <MovieCard movie={m}/>
          })
          setMovieCards(movieArray)
          if(movieArray.length == 0)
            setIsVisible(true);
            
        })
        .catch(error => {
          console.error("Error: " + error)
        })
    }, [searchValue])

    return (
        <>
            <Typography variant="h4" component="h1" sx={{ marginLeft: "20px", marginTop: "10px" ,fontWeight: 'bold', color: 'white', textAlign: 'left' }}>
                {title}
            </Typography>
            <Error isVisible={isVisible}/>
            <Grid container style={{ marginTop:"10px", width: "100%", height: "100%" }}>
                {movieCards.map((card, index) => (
                    <Grid style={{marginTop:"10px", marginBottom:"30px"}} item xs={12} sm={6} md={4} key={index}>
                        {card}
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Results
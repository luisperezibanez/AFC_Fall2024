import { useState, Fragment, useEffect } from 'react'
import axios from "axios"
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const movie_array = [];

const inMovieArray = (url) => {
    const movie = movie_array.find(item => item.url == url); // Find the movie by URL
    if (movie)
        return true;
    return false;
}

const getMovie = (url) => {
    const obj = movie_array.find(item => item.url === url); // Find the movie by URL
    console.log(obj.movie)
    if (obj)
        return {
          episode_id: obj.movie.episode_id,
          title: obj.movie.title,
          release_date: obj.movie.release_date
        }; // Return the film data if found
}

const storeMovie = (url, movie) => {
    movie_array.push({
        url: url,
        movie: movie
    });
}

const MovieRow = ({film}) => {

  console.log("film: " +film)
  const initMovie = {
    episode_id: 0,
    title: "Loading...",
    release_date: "Loading..."
  }

  const [movie, setMovie] = useState(initMovie);

  useEffect(() => {
    if(!inMovieArray(film)){
      let endpoint = film;
      const options = {
        method: 'GET',
        url: endpoint,
        headers: {
          accept: 'application/json'
        }
      };

      axios(options)
      .then(response => {
        console.log(response.data)

        storeMovie(endpoint, response.data)
        setMovie({
          episode_id: response.data.episode_id,
          title: response.data.title,
          release_date: response.data.release_date
        });
      })
      .catch(error => {
        console.error("Error: " + error)
      })
    } else {
      console.log(film + "is in movie Array")
      setMovie(getMovie(film));
    }
  }, [film])

  return (
    <TableRow  key={movie.episode_id}>
      <TableCell sx={{ color: "white" }}>{movie.episode_id}</TableCell>
      <TableCell sx={{ color: "white" }}  component="th" scope="row">
        {movie.title}
      </TableCell>
      <TableCell sx={{ color: "white" }} >{movie.release_date}</TableCell>
    </TableRow>
  )
}

const Row = ({character}) => {

  const [open, setOpen] = useState(false);
  const [movieRows, setMovieRows] = useState([]);

  useEffect(() => {
    // Create movie rows based on character's films
    const newMovieRows = character.films.map((film) => (
      <MovieRow key={film} film={film} />
    ));

    setMovieRows(newMovieRows);
  }, [character.films]);

  return (
    <Fragment>
      <TableRow sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // Highlight on hover
                },
                '& > *': { borderBottom: 'unset'}
              }}>
        <TableCell>
          <IconButton sx={{ color: "white" }}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ color: "white" }} component="th" scope="row">
          {character.name}
        </TableCell>
        <TableCell sx={{ color: "white" }} align="right">{character.height}</TableCell>
        <TableCell sx={{ color: "white" }} align="right">{character.hair_color}</TableCell>
        <TableCell sx={{ color: "white" }} align="right">{character.gender}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ color:'white', margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Movies
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Episode</TableCell>
                    <TableCell sx={{ color: "white" }}>Title</TableCell>
                    <TableCell sx={{ color: "white" }}>Date Release</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {movieRows}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

const DoggyHorse = ({data}) => {
  
  return (
    <TableContainer component={Paper} 
    sx={{
      backgroundColor: "rgba(20, 20, 20, 0.3)", // Semi-transparent background
      backdropFilter: "blur(10px)", // Optional: add a blur effect
      borderRadius: "8px", // Rounded corners
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // Shadow for depth
      maxHeight: 700
    }}>
      <Table sx={{ minWidth: 650 }} aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <TableCell />
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell sx={{ color: "white" }} align="right">Height</TableCell>
            <TableCell sx={{ color: "white" }} align="right">Hair Color</TableCell>
            <TableCell sx={{ color: "white" }} align="right">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.results.map((character) => (
            <Row key={character.name} character={character} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DoggyHorse;

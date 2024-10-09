import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const MovieCard = (props) => {
  
    let { original_title, overview, poster_path } = props.movie

    let imgBaseUrl = `https://image.tmdb.org/t/p/w500`
    
    console.log("Movie Card")
    return (
    <Card sx={{margin:"0 auto", maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${imgBaseUrl}${poster_path}`}
          alt="movie poster"
          sx={{
            height:440,
            objectFit: 'contain',
            width:'100%',
            backgroundColor:'black'
        }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {original_title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;

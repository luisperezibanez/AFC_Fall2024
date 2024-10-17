import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Rating from "@mui/material/Rating";
import MyFace from "../assets/images/my_face.jpg"

const MovieCard = (props) => {
  
    console.log(props.movie)
    let { title, overview, poster_path, vote_average } = props.movie
    vote_average = vote_average / 2;

    let imgBaseUrl = `https://image.tmdb.org/t/p/w500`
    
    if(!poster_path){
      imgBaseUrl = MyFace
      poster_path = ""
    }

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
            {title}
          </Typography>
          <Typography component="legend">Rating</Typography>
          <Rating name="read-only" value={vote_average} readOnly />
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;

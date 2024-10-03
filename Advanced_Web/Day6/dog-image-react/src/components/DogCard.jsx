// MUI components
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

const DogCard = (props) => {
    let {image} = props;

    const parts = image.split('/'); // Split the URL by '/'
    console.log(parts);
    
    let breed = "Some Error" 
    if(parts.length > 3){
        breed = parts[4];
        breed = breed.charAt(0).toUpperCase() + breed.slice(1); // Get the second last part, which is the breed // Capitalize first letter
    }
    return (
      <Card sx={{margin:"0 auto", maxWidth: 340 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            alt="green iguana"
            sx={{
                height:240,
                objectFit: 'contain',
                width:'100%',
                backgroundColor:'black'
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {breed}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export { DogCard }
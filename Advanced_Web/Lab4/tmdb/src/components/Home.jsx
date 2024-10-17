import Landing from "../assets/images/landing.webp";
import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const handleClick = () => {

    }

    return (
        <>
        <div
            style={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${Landing})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column', // Stack items vertically
                alignItems: 'center', // Center horizontally
            }}
        >
            <Typography 
                variant="h2" // You can adjust the variant
                component="h1"
                sx={{
                    marginTop: '40px',
                    marginBottom: "200px",
                    color: 'white', // Text color for visibility
                    textAlign: 'center',
                }}
            >
                Welcom to some Movie site
            </Typography>

            <Link to="/results">
                <Button size="large" variant="contained" sx={{ backgroundColor: "white", color: "black"}}>
                    Now Playing
                </Button>
            </Link>
        </div>
        </>
    )
}

export default Home
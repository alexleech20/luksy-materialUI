import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import './hero.css';
import hero from './home-hero.jpg';
import '../../../pages/about/about.css';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
    }
}));

function HeroSection() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.hero}>
                <Typography variant="heroText" className="neon">
                    Welcome!
                </Typography>
            </Box>
        </div>
    )
}

export default HeroSection;
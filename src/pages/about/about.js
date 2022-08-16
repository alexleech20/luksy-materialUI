import React from 'react';
import { makeStyles, Grid, Typography, Box } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import Image from './headshot.png';
import './about.css';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        maxHeight: 345,
    },
    anchorStyles: {
        textDecoration: 'none',
        color: '#FF10F0',

        '&hover': {
            textDecoration: 'underline',
        },
    },
    pinkBorder: {
        borderBottom: '2px solid #FF10F0',
        margin: '2rem 0rem 2rem',
        maxWidth: '80%',
    },
}));

const TITLE = "About Us";

function About() {
    
    const classes = useStyles();

    return (
        <div>
            <Helmet>
                <title>
                    { TITLE }
                </title>
            </Helmet>
            <Grid container className="my4" justify="center" alignItems="center">
                <Grid item xs={12} className="mb1">
                    <Typography variant="h1" className="neon">
                        About Us
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.pinkBorder}> {/* border grid */} </Grid>
                <Grid item xs={1}> {/* empty grid since material doesnt support offsets yet  */} </Grid>
                <Grid item xs={12} md={4} spacing={1}>
                    <>
                        <img src={Image} alt="Lukman" className={classes.root} />
                    </>
                </Grid>
                <Grid item xs={12} md={4} spacing={1}>
                    <Box m={2}>
                        <Typography>
                            <Box fontWeight="fontWeightBold">
                                Hey! Im Lukman
                            </Box>
                        </Typography>
                        <Typography className="my2">
                            I am the co-founder of Luksydesigns Customs which was created in May 2020. Originally from London but I am now based in Newcastle UK. My artwork is inspired by Abstract art, Fine art and use of colours.
                        </Typography>
                        <Typography>
                            All of the shoes that I have customized have been hand-painted as Luksydesigns Customs is a company built off being unique and different to showcase shoe customs.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container className="my4" justify="center" alignItems="center" m={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={12} md={4} className="displayMdNone">
                    <Box m={2}>
                        <Typography variant="h2" className="neon">
                            Some important points
                        </Typography>
                    </Box> 
                </Grid>
                <Grid item justifyContent="space-between" xs={12} md={4} spacing={1}>
                    <Box m={2}>
                        <Typography>
                            <strong>Shipping: </strong>Worldwide <br />
                        </Typography>
                        <Typography className="my2">
                            <strong>Based: </strong>Newcastle, UK <br />
                        </Typography>
                        <Typography>
                            <strong>Personalisation: </strong>We can do custom work based off your designs, get creative! (or talk to us about your ideas)<br />
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} className="displaySmNone">
                    <Box m={2}>
                        <Typography variant="h2" className="neon">
                            Some important points
                        </Typography>
                    </Box> 
                </Grid>
            </Grid>
            <Grid container className="my4" justify="center" alignItems="center" m={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={12} md={4}>
                    <Box m={2}>
                        <Typography variant="h2" className="neon">
                            Returns policy
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} spacing={1}>
                    <Box m={2}>
                        <Typography>
                            Due to all of our products being custom to the customer, we do not offer a 'return policy' at 
                            this moment in time, all sales are final. If you have any concerns regarding this issue please 
                            contact us on one of our socials or by our <a href="mailto:luksydesignscustoms@gmail.com" className={classes.anchorStyles}>email</a>.
                        </Typography>
                        <Typography>
                            We want all of our customers to have the best customer experience possible that we can offer, 
                            if there is something wrong with your product, ie, its not the same design as what you ordered 
                            or it has been damaged during shipping please contact us via <a href="mailto:luksydesignscustoms@gmail.com" className={classes.anchorStyles}>email</a>
                            . If this is the case, simply inform us via email and if approved, send us the slightly used product 
                            within 30 days of receipt and we will attempt to repair.
                        </Typography>
                    </Box> 
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
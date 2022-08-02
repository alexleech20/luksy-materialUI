import React from 'react';
import { makeStyles, Grid, Typography, Card, CardMedia, Link, Box } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import HeroSection from '../../components/atoms/hero/hero-image';
import { FiInstagram, FiTwitter, } from 'react-icons/fi';
import { AiOutlineFacebook } from 'react-icons/ai';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import homeImagery from '../../assets/shoes/airforce-lv2.JPG';

const useStyles = makeStyles((theme) => ({
    Card: {
        width: 300,
        margin: 'auto',
    },
    Media: {
        height: 550,
        width: '100%',
        objectFit: 'cover'
    },
    displaySmNone: {
        display: 'none',
        ['@media (min-width:780px']: {
            display: 'block',
        },
    },
}));

const TITLE = "Homepage";

function Home() {
    const classes = useStyles();

    return (
        <div>
            <Helmet>
                <title>
                    { TITLE }
                </title>
            </Helmet>

            <HeroSection />

            <Grid container className="my3" justify="center" alignItems="center">
                <Grid item xs={1}></Grid>
                <Grid item xs={12} md={4} className="px2">
                    <Card className={classes.root}>
                        {/* shoe imagery here */}
                        <CardMedia 
                            className={classes.Media}
                            image={homeImagery}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box m={2}>
                        <Typography variant="h3" className="pb2">
                            Stencil work
                        </Typography>
                        <Typography>
                            Here at Luksy Designs Customs we aim to supply you 
                            with the best designs possible, whether thats you providing 
                            us with with a design you want or us brainstorming some ideas! <br />
                            Many of our clients provide us with the shoes prior, if you are wanting
                            us to order the shoes for you we will need to take a deposit or payment
                            prior. We promote the idea of you purchasing the shoes prior to ensure 
                            authenticity of the product. The customizations can take a while to 
                            complete so dont be shy to message us on our socials for an update! <br />
                            All of our shoes are hand painted using Angelus acrylic leather paint 
                            (weather proofing is an optional extra at £10).
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container className="my3" justify="center" alignItems="center">
                <Grid item xs={1}></Grid>
                <Grid item xs={12} md={4}>
                    <Box m={2}>
                        <Typography variant="h3">
                            What we offer
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box m={2}>
                        <Typography>
                            We at Luksy Designs Customs do not shy away from a challenge, if you have any ambitious ideas for some custom sneakers fire them 
                            over and we'll discuss them with you! Or if you'd prefer we can brain storm some ideas with you for you to decide what you'd prefer. Scroll 
                            through our socials for some inspriation if needs be! we have some bangers on there ;).
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container className="my3" justify="center" alignItems="center">
                <Grid item xs={1}></Grid>
                <Grid item xs={12} md={4} className="displayMdNone">
                    <Typography variant="h3">
                        Visit our social media links!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} alignItems="left">
                    <Box m={2} pb={2}>
                        <Typography>
                            <Link href="mailto:luksydesignscustoms@gmail.com" color="inherit"><HiOutlineMail className="pr1" />Email us!</Link>
                        </Typography>
                        <Typography className="my1">
                            <Link href="https://www.instagram.com/luksydesignscustoms/?hl=en" color="inherit"><FiInstagram className="pr1" />Check out our Instagram</Link>
                        </Typography>
                        <Typography>
                            <Link href="https://twitter.com/Luksydesignscu1" color="inherit"><FiTwitter className="pr1" />Send us a tweet!</Link>
                        </Typography>
                        <Typography className="my1">
                            <Link href="https://www.depop.com/luksydesignscustoms/" color="inherit"><RiShoppingCart2Line className="pr1" />Take a look at our Depop</Link>
                        </Typography>
                        <Typography>
                            <Link href="https://www.facebook.com/luksydesignscustoms" color="inherit"><AiOutlineFacebook className="pr1" />Drop us a message!</Link>
                        </Typography>
                    </Box>
                    <div className="loader"></div>
                </Grid>
                <Grid item xs={12} md={4} className="displaySmNone">
                    <Typography variant="h3">
                        Visit our social media links!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
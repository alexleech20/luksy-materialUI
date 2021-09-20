import React from 'react';
import { makeStyles, Grid, Typography, Card, Link } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import HeroSection from '../../components/atoms/hero/hero-image';
import { FiInstagram, FiTwitter, } from 'react-icons/fi';
import { AiOutlineFacebook } from 'react-icons/ai';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import homeImagery from '../../assets/shoes/airforce-lv2.JPG';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        maxHeight: 345,
    },
}));

const TITLE = "Homepage";

function Home() {
    const classes = useStyles;

    return (
        <div>
            <Helmet>
                { TITLE }
            </Helmet>

            <HeroSection />

            <Grid container className="my3" justify="center" alignItems="center">
                <Grid item xs={1}></Grid>
                <Grid item xs={12} md={4}>
                    <Card className={classes.root}>
                        {/* shoe imagery here */}
                        <img src={homeImagery} alt="LV Airforce" height="345" width="345" />
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
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
                </Grid>
            </Grid>
            <Grid container className="my3" justify="center" alignItems="center">
                <Grid item xs={1}></Grid>
                <Grid item xs={12} md={4} alignItems="left">
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
                    
                    {/* <p><FaEnvelope size={25} className="pr-1" /> <a href="mailto:luksydesignscustoms@gmail.com" target="blank" className="no-underline a-red">  Email us! </a> </p>                 
                    <p><FiInstagram size={25} className="pr-1"/> <a href="https://www.instagram.com/luksydesignscustoms/?hl=en" target="blank" className="no-underline a-red">Check out our instagram!</a></p>
                    <p><FiTwitter size={25} className="pr-1"/> <a href="https://twitter.com/Luksydesignscu1" target="blank" className="no-underline a-red">Send us a tweet!</a></p> */}
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h3">
                        Visit our social media links!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
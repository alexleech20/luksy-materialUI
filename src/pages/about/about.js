import React from 'react';
import { makeStyles, Grid, Typography, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import Image from './headshot.png';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        maxHeight: 345,
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
            <Grid container className="my3" justify="center" alignItems="center">
                <Grid item xs={1}> {/* empty grid since material doesnt support offsets yet  */} </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia 
                                className={classes.media}
                                image={Image}
                                title="Lukman's headshot"
                                component="img"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} spacing={1}>
                    <Typography>
                        Hey! Im Lukman
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, reiciendis recusandae iure fugit sint cupiditate cum aut tempora libero voluptates distinctio quod quidem modi hic sapiente pariatur quo ut repudiandae.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className="my3" justify="center" alignItems="center">
                <Grid item xs={1}></Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h3">
                        Customisation
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} spacing={1}>
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
        </div>
    );
}

export default About;
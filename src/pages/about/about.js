import React from 'react';
import { makeStyles, Grid, Typography, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import image from './headshot.png';

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
            <Grid container>
                <Grid xs={12} md={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia 
                                className={classes.media}
                                image="./headshot.png"
                                src={image}
                                title="Lukman's headshot"
                            />
                            {/* <img className={classes.media} src={image} alt="" /> */}
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Lukman
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
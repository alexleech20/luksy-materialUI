import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles, Grid, Card, CardMedia, Typography, Box } from '@material-ui/core';
import LeopardAf1 from '../../assets/shoes/airforce-leapord.JPG';
import madnessAf1 from '../../assets/shoes/airforce-madness-side.JPG';

const useStyles = makeStyles((theme) => ({
    Media: {
        height: 550,
        width: '100%',
        objectFit: 'cover'
    },
}));

const TITLE = "Nike";

function Nike() {
    const classes = useStyles();

    return (
        <div className="px2">
            <Helmet>
                <title>
                    { TITLE }
                </title>
            </Helmet>
            <Grid container className="my3">
                <Grid item xs={1}></Grid>
                <Grid item xs={12} md={4} className="p1">
                    <Card>
                        <CardMedia
                            className={classes.Media}
                            image={LeopardAf1}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box>
                        <Typography variant="h3" className="pb3">
                            Client Driven Project
                        </Typography>
                        <Typography>
                            Clients idea coming to life, our own take on a leapord print on Airforce 1's.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container className="my3" justify="center" alignItems="center">
                <Grid item xs={1}></Grid>
                <Grid item xs={12} md={4} className="px3">                  
                    <Box>
                        <Typography variant="h3" className="pb3">
                            Lockdown Madness
                        </Typography>
                        <Typography>
                            This abstract job was done by our main designer Lukman, who wanted to experiment with some water color style paint. 
                            This is one of our examples of our preset designs that we sell.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} className="p1">
                    <Card>
                        <CardMedia 
                            className={classes.Media}
                            image={madnessAf1}
                        />
                    </Card>
                </Grid>                                                               
            </Grid>
        </div>
    );
}

export default Nike;
import React from 'react';
import { Grid, Typography, ListItem, ListItemIcon, Card } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { useStyles } from './contact-styles.js';
import { FiInstagram } from 'react-icons/fi';


function Contact() {

    const TITLE = "Contact Us";

    const classes = useStyles();

    return (
        
        <div>
            <Helmet>
                <title>
                    { TITLE }
                </title>
            </Helmet>

            <Grid container className="my4">
                <Grid item xs={12}>
                    <Typography variant="heroText" className="mb1">
                        Have a chat with us!
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography>
                        Our socials
                    </Typography>
                    <Card className={classes.cardWidth}>
                        <ListItem>
                            <ListItemIcon>
                                <FiInstagram className="pr1" />
                            </ListItemIcon>
                            <Typography>
                                Instagram
                            </Typography>
                        </ListItem>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Typography>

                    </Typography>
                </Grid>

            </Grid>

        </div>
    );
}

export default Contact;
import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        maxHeight: 345,
    },
}));

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

            <h1>
                WELCOME PEOPLE to contact page
            </h1>

        </div>
    );
}

export default Contact;
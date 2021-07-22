import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    bgGrey: {
        backgroundColor: '#D3D3D3',
    },
  }));

function NavBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.bgGrey}>
            <Toolbar>
                <Typography variant="h6">
                    Luksy Designs Customs
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
import React from 'react';
import { makeStyles, withStyles, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button }  from '@material-ui/core';

import Logo from '../../assets/logo/logo2.png';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import ShoesDropDown from '../molecules/navDropDownShoes/shoesDropDown';
import ConnectDropDown from '../molecules/navDropDownConnect/connectDropDown';
import BurgerMenu from '../molecules/navBurgerMenu/navBurgerMenu';


const useStyles = makeStyles((theme) => ({
    bgGrey: {
        backgroundColor: '#D3D3D3',
    },
    logo: {
        maxWidth: 120,
    },
    px2: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
    },
    navLinks: {
        textDecoration: 'none',
        color: '#000000',
        fontSize: '20px',
        textTransform: 'none',
    },
    dNoneUpToMd: {
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}));


function NavBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.bgGrey}>
            <Toolbar>

                <a href="/">
                    <img src={Logo} alt="Luksy Designs Customs" className={classes.logo} />
                </a>
                
                <Link to="/about" className={clsx(classes.navLinks, classes.px2, classes.dNoneUpToMd)}>
                    About
                </Link>

                <Link to="/contact" className={clsx(classes.navLinks, classes.dNoneUpToMd)}>
                    Contact
                </Link>
               
                <div className={classes.px2}>
                    <ShoesDropDown />
                </div>

                <div>
                    <ConnectDropDown />
                </div>

                <div className={classes.dNoneMdUp}>
                    <BurgerMenu />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
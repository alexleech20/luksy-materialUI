import React from 'react';
import { makeStyles, AppBar, Toolbar }  from '@material-ui/core';
import Logo from '../../assets/logo/logo2.png';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import ShoesDropDown from '../molecules/navDropDownShoes/shoesDropDown';
import ConnectDropDown from '../molecules/navDropDownConnect/connectDropDown';
import BurgerMenu from '../molecules/navBurgerMenu/navBurgerMenu';
import theme from '../../App.js';


const useStyles = makeStyles((theme) => ({
    navStyles: {
        backgroundColor: '#353535',
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
        color: 'azure',
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
    dNoneMobile: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        display: 'block',
    }
}));


function NavBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.navStyles}>
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
               
                <div className={clsx(classes.px2, classes.dNoneMobile)}>
                    <ShoesDropDown />
                </div>

                <div className={classes.dNoneMobile}>
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
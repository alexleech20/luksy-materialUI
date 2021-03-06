import React from 'react';
import { makeStyles, AppBar, Toolbar }  from '@material-ui/core';
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
    navTitles: {
        textDecoration: 'none',
        color: '#000000',
    },
    px1: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    uppercaseNone: {
        textTransform: 'none',
    },
    my1: {
        marginLeft: '1rem',
        marginRight: '1rem'
    },
    z100: {
        zIndex: 100,
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
               
                
                <Link to="/about" className={clsx(classes.noDecoration, classes.navTitles, classes.px1, classes.dNoneUpToMd)}>
                    About
                </Link>

                <Link to="/contact" className={clsx(classes.noDecoration, classes.navTitles, classes.dNoneUpToMd)}>
                    Contact
                </Link>

                <div className={clsx(classes.my1, classes.z100, classes.dNoneUpToMd)}>
                    <ShoesDropDown />
                </div>
            
                <div className={clsx(classes.z100, classes.dNoneUpToMd)}>
                    <ConnectDropDown />
                </div>
                

                <div className={classes.dNoneMdUp}>
                    <BurgerMenu />
                </div>
                {/* show and hide burger menu here, media queries */}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
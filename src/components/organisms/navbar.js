import React from 'react';
import { makeStyles, AppBar, Toolbar }  from '@material-ui/core';
import Logo from '../../assets/logo/logo2.png';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import ShoesDropDown from '../molecules/navDropDownShoes/shoesDropDown';
import ConnectDropDown from '../molecules/navDropDownConnect/connectDropDown';


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
    }
}));

function NavBar() {
    const classes = useStyles();
    const [ open, setOpen ] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
    
    const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
    }

    setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open)
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);



    return (
        <AppBar position="static" className={classes.bgGrey}>
            <Toolbar>

                <a href="/">
                    <img src={Logo} alt="Luksy Designs Customs" className={classes.logo} />
                </a>
               
                <Link to="/about" className={clsx(classes.noDecoration, classes.navTitles, classes.px1)}>
                    About
                </Link>

                <Link to="/contact" className={clsx(classes.noDecoration, classes.navTitles)}>
                    Contact
                </Link>

                <div className={classes.my1}>
                    <ShoesDropDown />
                </div>
                
                <div>
                    <ConnectDropDown />
                </div>
            
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
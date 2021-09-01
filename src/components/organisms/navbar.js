import React from 'react';
import { makeStyles, Button, ClickAwayListener, AppBar, Toolbar, Grow, Paper, Popper, MenuItem, MenuList, Typography }  from '@material-ui/core';
import Logo from '../../assets/logo/logo2.png';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import ShoesDropDown from '../molecules/navDropDownShoes/shoesDropDown';

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
                

                {/* <Typography>
                    <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        className={clsx(classes.ml1, classes.uppercaseNone)}
                    >
                        Shoes
                    </Button>
                </Typography>

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose} to="/nike">Nike</MenuItem>
                                        <MenuItem onClick={handleClose}>Vans</MenuItem>
                                        <MenuItem onClick={handleClose}>Kids Shoes</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper> */}

                <Typography>
                    <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        className={clsx(classes.ml1, classes.uppercaseNone)}
                    >
                        Connect
                    </Button>
                </Typography>

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose}>
                                            <a className={classes.navTitles} target="_blank" rel="noreferrer" href="https://www.depop.com/luksydesignscustoms/">
                                                Depop
                                            </a>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <a className={classes.navTitles} target="_blank" rel="noreferrer" href="https://www.instagram.com/luksydesignscustoms/">
                                                Instagram
                                            </a>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <a className={classes.navTitles} target="_blank" rel="noreferrer" href="https://twitter.com/Luksydesignscu1">
                                                Twitter
                                            </a>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <a className={classes.navTitles} target="_blank" rel="noreferrer" href="https://www.facebook.com/luksydesignscustoms">
                                                Facebook
                                            </a>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
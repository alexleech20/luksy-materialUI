import React from 'react';
import { makeStyles, Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, Typography }  from '@material-ui/core';
import clsx from 'clsx';
// import Nike from '../../../pages/shoes/nike';

const useStyles = makeStyles((theme) => ({
    uppercaseNone: {
        textTransform: 'none',
    },
    defaultStyling: {
        textDecoration: 'none',
        color: '#000000',
    },
}));

function ShoesDropDown() {
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
        <div>
            <Typography>
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
                                    <a className={classes.defaultStyling} href="/nike">
                                        <MenuItem onClick={handleClose}>Nike </MenuItem>
                                    </a>
                                    <a className={classes.defaultStyling} href="/vans">
                                        <MenuItem onClick={handleClose}>Vans </MenuItem>
                                    </a>
                                    <a className={classes.defaultStyling} href="/kids-shoes">
                                        <MenuItem onClick={handleClose}>Kids Shoes </MenuItem>
                                    </a>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default ShoesDropDown;
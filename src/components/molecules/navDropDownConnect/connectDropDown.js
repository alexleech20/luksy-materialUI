import React from 'react';
import { makeStyles, Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, Typography }  from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    dropDownLinks: {
        textDecoration: 'none',
        color: '#000000',
    },
    buttonText: {
        fontSize: '20px',
        textTransform: 'none',
        textDecoration: 'none',
        color: '#000000',
    },
}));

function ConnectDropDown() {
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
                    className={clsx(classes.ml1, classes.buttonText)}
                >
                    Connect
                </Button>
            </Typography>

            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ zIndex: 10}}>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>
                                        <a className={classes.dropDownLinks} target="_blank" rel="noreferrer" href="https://www.depop.com/luksydesignscustoms/">
                                            Depop
                                        </a>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <a className={classes.dropDownLinks} target="_blank" rel="noreferrer" href="https://www.instagram.com/luksydesignscustoms/">
                                            Instagram
                                        </a>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <a className={classes.dropDownLinks} target="_blank" rel="noreferrer" href="https://twitter.com/Luksydesignscu1">
                                            Twitter
                                        </a>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <a className={classes.dropDownLinks} target="_blank" rel="noreferrer" href="https://www.facebook.com/luksydesignscustoms">
                                            Facebook
                                        </a>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default ConnectDropDown;
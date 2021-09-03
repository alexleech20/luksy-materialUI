import React from 'react';
import { makeStyles, Container, Grid, Box, Link }  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '-webkit-fill-available',
        position: 'fixed',
        left: '0',
        bottom: '0',
        backgroundColor: '#D3D3D3',
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <footer>
            <Box className={classes.footer} px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 6 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <div>
                                <h3>
                                    Luksy Designs Customs
                                </h3>
                                <p>
                                    Here for all your customising needs! :)
                                </p>
                            </div>
                                
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            {/* <h5>
                                Luksy Designs Customs
                            </h5>
                            <span className="t-grey">
                                We're here for all your custom shoe needs :)
                            </span> */}
                            <Box>
                                <h3>
                                    Help
                                </h3>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box className="pt05">
                                <Link href="/" color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                            <Box className="pt05">
                                <Link href="/" color="inherit">
                                    About Us
                                </Link>
                            </Box>
                        </Grid>

                        {/* use twitter, insta, depop, facebook icons in social list */}

                        <Grid item xs={12} sm={4}>
                            <Box>
                                <h3>
                                    Socials
                                </h3>
                            </Box>
                            <Box>
                                <Link href="https://www.instagram.com/luksydesignscustoms/" color="inherit">
                                    Instagram
                                </Link>
                            </Box>
                            <Box className="pt05">
                                <Link href="https://www.depop.com/luksydesignscustoms/" color="inherit">
                                    Depop
                                </Link>
                            </Box>
                            <Box className="pt05">
                                <Link href="https://www.facebook.com/luksydesignscustoms" color="inherit">
                                    Facebook
                                </Link>
                            </Box>
                            <Box className="pt05">
                                <Link href="https://twitter.com/Luksydesignscu1" color="inherit">
                                    Twitter
                                </Link>
                            </Box>
                            
                        </Grid>
                    </Grid>
                    <Grid container className="mt2">
                        <Box>
                            &copy; {new Date().getFullYear()} Copyright: Luksy Designs Customs. All Rights Reserved.
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;
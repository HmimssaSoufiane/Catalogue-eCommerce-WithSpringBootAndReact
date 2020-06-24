import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import home_banner from '../assets/home_banner1.png'; // with import
import home_banner2 from '../assets/home_banner2.png'; // with import
import home_banner3 from '../assets/home_banner3.png'; // with import


const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },

    button: {
        padding: "15px 25px",
        fontSize: "24px",
        cursor: "pointer",
        textAlign: "center",
        outline: "none",
        color: "#fff0",
        backgroundColor: "#4CAF50",
        border: "none",
        borderRadius: "15px",
        boxShadow: "0 9px #999"
    },
}));

export default function Welcome() {
    const classes = useStyles();
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div >

            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home_banner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home_banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home_banner3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div style={{
                background: "#0c2c39"

            }} className={classes.heroContent}>
                <Container maxWidth="m" >

                    <Typography style={{ color: "#fff" }} component="h1" variant="h2" align="center" gutterBottom>
                        Bienvenue Chez SEBO
                    </Typography>
                    <Typography style={{ color: "#fff" }} variant="h5" align="center" paragraph>
                        Découvrez, achetez la musique de vos artistes préférés sur SEBO..
                        </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Link style={{ textDecoration: "none", color: "#fff" }} className={classes.button} variant="contained" color="primary" to="/SignUp">Inscription</Link>
                            </Grid>
                            <Grid item>
                                <Link style={{ textDecoration: "none", color: "#fff" }} className={classes.button} to="/SignIn">Connexion</Link>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

        </div >
    );
}
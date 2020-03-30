import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
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
}));
export default function Welcome() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm" >

                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Bienvenue-vous chez SEBO.
                         </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Découvrez, achetez la musique de vos artistes préférés sur SEBO..
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Link variant="contained" color="primary" to="/SignUp">Inscription</Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/SignIn">Connexion</Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

            </main>
        </React.Fragment>
    );
}
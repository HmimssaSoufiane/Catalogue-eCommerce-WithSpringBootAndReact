import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';





const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignIn(props) {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [motPasse, setmotPasse] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "email": email, "motPasse": motPasse });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/API/Client/signIn", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result !== "") {
                    props.history.push({
                        pathname: "/Home",
                        state: {
                            o: JSON.parse(result)
                        }
                    });
                }
            })
            .catch(error => console.log('error', error));

    }
    return (
        <div>
            <Container style={{ height: "100vh" }} component="main" maxWidth="sm">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Connexion
                    </Typography>
                    <form className={classes.form} onSubmit={onSubmit} noValidate>
                        <TextField variant="outlined" margin="normal" required fullWidth
                            id="email"
                            label="Adresse e-mail"
                            name="email"
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                            autoFocus
                        />
                        <TextField variant="outlined" margin="normal" required fullWidth
                            name="password"
                            label="Mot de passe"
                            type="password"
                            id="password"
                            onChange={e => {
                                setmotPasse(e.target.value);
                            }}
                            autoComplete="current-password"
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary"
                            className={classes.submit} >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>
        </div>
    );
}


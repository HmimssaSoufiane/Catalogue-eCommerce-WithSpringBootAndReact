import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp(props) {
    const classes = useStyles();
    const [client, setClient] = useState({});
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [motPasse, setmotPasse] = useState("");
    // const [compteType, setCompteType] = useState('');
    // const handleChange = (event) => {
    //     setCompteType(event.target.value);
    // };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        //var raw = JSON.stringify({ "email": email, "password": password });



        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        setClient({
            "id": 0,
            "nom": nom,
            "prenom": prenom,
            "email": email,
            "motPasse": motPasse
        })
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(client),
            redirect: 'follow'
        };

        fetch("http://localhost:8080/API/Client/signUp", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result !== "") {
                    // setClient(JSON.parse(result));
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
        <Container component="main" style={{ height: "100%" }} maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Inscription
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField autoComplete="fname" name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Prenom"
                                autoFocus
                                onChange={e => {
                                    setPrenom(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" required fullWidth
                                id="lastName"
                                label="Nom"
                                name="lastName"
                                autoComplete="lname"
                                onChange={e => {
                                    setNom(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={e => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth
                                name="password"
                                label="Mot de passe"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={e => {
                                    setmotPasse(e.target.value);
                                }}
                            />
                        </Grid>

                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary"
                        className={classes.submit}
                    >
                        Inscription
                     </Button>

                </form>
            </div>

        </Container>
    );
}
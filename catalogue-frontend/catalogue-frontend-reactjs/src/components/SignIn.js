import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = theme => ({
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
    submit: { margin: theme.spacing(3, 0, 2), },
});

class SignIn extends React.Component {
    state = {
        Client: {
            email: "",
            motPasse: ""
        }
    };

    onSubmit = (e) => {
        e.preventDefault();

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/API/Client/clientByEmail/" + this.state.email, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    render() {
        const classes = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Connexion
                </Typography>
                    <form className={classes.form} onSubmit={this.onSubmit} noValidate>
                        <TextField variant="outlined" margin="normal" required fullWidth
                            id="email"
                            label="Adresse e-mail"
                            name="email"
                            value={this.state.email}
                            onChange={e => {
                                this.setState({ email: e.target.value });
                            }}
                            autoFocus
                        />
                        <TextField variant="outlined" margin="normal" required fullWidth
                            name="password"
                            label="Mot de passe"
                            type="password"
                            id="password"
                            value={this.state.password}
                            onChange={e => {
                                this.setState({ password: e.target.value });
                            }}
                            autoComplete="current-password"
                        />
                        <Button type="submit" fullWidthvariant="contained" color="primary" className={classes.submit} >
                            Sign In
                    </Button>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Inscription"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}
export default withStyles(styles, { withTheme: true })(SignIn);

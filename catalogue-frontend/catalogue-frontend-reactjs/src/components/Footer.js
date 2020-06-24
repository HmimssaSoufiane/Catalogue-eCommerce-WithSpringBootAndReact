import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




function Copyright() {
    return (
        <Typography variant="body2" tyle={{ textDecoration: "none", color: "#fff" }} align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/HmimssaSoufiane">
                By Hmimssa
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        //marginTop: theme.spacing(8),
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));


export default function Footer() {
    const classes = useStyles();

    return (
        <div style={{ background: "#0c1217" }}>
            <Container component="main" maxWidth="sm">
                <div className={classes.paper}>

                </div>
                <Box style={{ margin: "0px" }} mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}


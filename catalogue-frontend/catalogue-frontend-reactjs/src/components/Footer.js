import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




function Copyright() {
    return (
        <Typography variant="body2" align="center">
            <span style={{ color: "#fff" }}>{'Copyright ©  '}</span>
            <Link href="https://github.com/HmimssaSoufiane">
                HMIMSSA
            </Link>{' '}
            <span style={{ color: "#fff" }}>   {new Date().getFullYear()}</span>
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
        <div style={{ background: "#0c1217", padding: "10px" }}>
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


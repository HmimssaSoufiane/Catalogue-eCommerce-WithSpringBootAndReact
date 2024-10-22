import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';






const useStyles = makeStyles((theme) => ({
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
}));


export default function Album() {
    const classes = useStyles();
    const [article, setArticle] = useState({});
    const { name } = useParams();


    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch('http://localhost:8080/API/Article/article/' + name, requestOptions)
            .then(response => response.text())
            .then(result => setArticle(JSON.parse(result)))
            .catch(error => console.log('error', error));
    }, [name]);



    return (
        <div style={{ minHeight: "100%", background: "white" }}>
            <main>
                <div style={{
                    // backgroundImage: "url(" + home_banner + ")", backgroundPosition: 'center',
                    // backgroundSize: 'contain',
                    // backgroundRepeat: 'no-repeat',
                }} className={classes.heroContent}>
                    <Paper style={{ marginTop: "100px", verticalAlign: "top", display: 'inline-block', width: "70%" }} className={classes.paper}>
                        <AppBar style={{ background: "#ffbe07d6" }} className={classes.searchBar} position="static" color="default" elevation={0}>
                            <Toolbar>
                                <h2 style={{ padding: "10px 0  5px 0", color: "white" }}> Article Details </h2>
                            </Toolbar>
                        </AppBar>
                        <div className={classes.contentWrapper}>
                            <Table className={classes.table} aria-label="simple table">

                                <TableRow key={article.codeArticle}>
                                    <TableCell style={{ fontWeight: "bold" }} >{"Photo"}</TableCell>
                                    <TableCell ><Avatar alt={article.titre} src="/static/images/avatar/1.jpg" /></TableCell>
                                </TableRow>
                                <TableRow key={article.codeArticle}>
                                    <TableCell style={{ fontWeight: "bold" }}>{"Titre"}</TableCell>
                                    <TableCell >{article.titre}</TableCell>
                                </TableRow>
                                <TableRow key={article.codeArticle}>
                                    <TableCell style={{ fontWeight: "bold" }} >{"Auteur"}</TableCell>
                                    <TableCell >{article.auteur}</TableCell>
                                </TableRow>
                                <TableRow key={article.codeArticle}>
                                    <TableCell style={{ fontWeight: "bold" }} >{"Prix"}</TableCell>
                                    <TableCell >{article.prix}</TableCell>
                                </TableRow>
                                <TableRow key={article.codeArticle}>
                                    <TableCell style={{ fontWeight: "bold" }} >{"Categorie"}</TableCell>
                                    <TableCell >{article.categorie?.cat}</TableCell>
                                </TableRow>
                            </Table>

                        </div>
                    </Paper>
                </div>
            </main>
        </div >
    );
}
import React, { useState, useEffect, useRef } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Slider from '@material-ui/core/Slider';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';




const styles = theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    margin: {
        margin: theme.spacing(1),
    },
    table: {
        minWidth: 650,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
});




function valuetext(value) {
    return `${value}DH`;
}

function Catalogue(props) {
    const { classes } = props;
    const categoriesSelected = useRef(-1);
    const [articles, setArticles] = useState([]);
    const [articlesCopy, setArticlesCopy] = useState([]);
    const [filterBytitre, setFilterByTitre] = useState("");
    const [filterByAuteur, setFilterByAuteur] = useState("");
    const [categories, setCategories] = useState([]);
    const [value, setValue] = React.useState([20, 1000]);

    const handleChangeSlider = (event, newValue) => {
        setValue(newValue);
    };

    const handleChange = (event) => {
        categoriesSelected.current = parseInt(event.target.value);
        (categoriesSelected.current === -1) ? setArticlesCopy(articles) :
            setArticlesCopy(articles.filter(x => x.categorie.refCat === categoriesSelected.current));

    };

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/API/Article/articles", requestOptions)
            .then(response => response.text())
            .then(result => { setArticles(JSON.parse(result)); setArticlesCopy(JSON.parse(result)); })
            .catch(error => console.log('error', error));
    }, []);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/API/Categorie/categories", requestOptions)
            .then(response => response.text())
            //.then(result => console.log(result))
            .then(result => setCategories(JSON.parse(result)))
            .catch(error => console.log('error', error));

    }, []);




    return (
        <main style={{ minHeight: "100%" }}>
            <div>
                <FormControl className={classes.margin}>
                    <TextField id="filled-basic" onChange={e => {
                        setFilterByTitre(e.target.value);
                    }} label="Search by titre" variant="filled" />
                </FormControl>
                <FormControl className={classes.margin}>
                    <TextField id="filled-basic" onChange={e => {
                        setFilterByAuteur(e.target.value);
                    }} label="Search by auteur" variant="filled" />

                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel style={{ padding: "5px" }} htmlFor="outlined-age-native-simple">Categorie</InputLabel>

                    <Select
                        variant="filled"
                        native
                        value={categoriesSelected.current}
                        onChange={handleChange}
                        inputProps={{
                            name: 'Categorie',
                            id: 'filled-age-native-simple',
                        }}
                    >
                        <option aria-label="None" value={-1} >ALL</option>
                        {categories?.map(row => (<option key={row.refCat} value={row.refCat}>{row.cat}</option>
                        ))}

                    </Select>
                </FormControl>
                <FormControl className={classes.margin} style={{ width: "300px" }}>
                    <InputLabel style={{ padding: "5px" }} >Prix</InputLabel>

                    <Slider
                        value={value}
                        onChange={handleChangeSlider}
                        aria-labelledby="range-slider"
                        valueLabelDisplay="on"
                        max={1500}
                        getAriaValueText={valuetext}

                    />
                </FormControl>

            </div>
            <div className={classes.heroContent}>
                <Container maxWidth="lg"  >
                    <TableContainer component={Paper} >
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Article Code</TableCell>
                                    <TableCell >Photo</TableCell>
                                    <TableCell >Titre</TableCell>
                                    <TableCell >Auteur</TableCell>
                                    <TableCell >Prix Unitaire (en DH)</TableCell>
                                    <TableCell >Quantité disponible</TableCell>
                                    <TableCell >Categorie</TableCell>
                                    <TableCell >Ajouter au Panier</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {articlesCopy?.filter(row => (row.titre.toLowerCase().search(filterBytitre) !== -1) && (row.auteur.toLowerCase().search(filterByAuteur) !== -1)).map(row => (
                                    <TableRow key={row.codeArticle}>
                                        <TableCell component="th" scope="row">
                                            <Link
                                                to={`/ArticleDetails/${row.codeArticle}`}
                                            >  {row.codeArticle}</Link>
                                        </TableCell>
                                        <TableCell ><Avatar alt={row.titre} src="/static/images/avatar/1.jpg" /></TableCell>
                                        <TableCell >{row.titre}</TableCell>
                                        <TableCell >{row.auteur}</TableCell>
                                        <TableCell >{row.prix}</TableCell>
                                        <TableCell >{row.stock}</TableCell>
                                        <TableCell>{row.categorie?.cat}</TableCell>
                                        <TableCell >
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<ShoppingCartIcon />}
                                            >
                                                Ajouter au panier
                                                    </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </div>


        </main>

    );

}
export default withStyles(styles)(Catalogue);

import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import TableFooter from '@material-ui/core/TableFooter';

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

const TAX_RATE = 0.07;


function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

// function priceRow(qty, unit) {
//     return qty * unit;
// }

// function createRow(desc, qty, unit) {
//     const price = priceRow(qty, unit);
//     return { desc, qty, unit, price };
// }

function subtotal(items) {
    //return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    return items?.map(item => item.article.prix).reduce((sum, i) => sum + i, 0);
}



function Pannier(props) {
    const { classes } = props;
    const oClient = props.location.oClient;
    const [lignesCommande, setLignesCommande] = useState(oClient?.commandes?.find(row => row.etat.toLowerCase() === "panier")?.lignesCommande);



    const invoiceSubtotal = subtotal(lignesCommande);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    const handleClick = (id) => {
        setLignesCommande(lignesCommande.filter(ligne => ligne.idLigneCommande !== id));
    };
    useEffect(() => {
        console.log(oClient);
    }, [oClient]);



    return (
        <main style={{ minHeight: "100%" }}>
            <div>
                <h1>
                    <span style={{ verticalAlign: "bottom" }}>Pannier</span>
                    <ShoppingCartIcon fontSize="inherit" />
                </h1>
            </div>
            <div className={classes.heroContent}>
                <Container maxWidth="lg"  >
                    <TableContainer component={Paper} >
                        <Table className={classes.table} aria-label="simple table">

                            <TableBody>
                                {
                                    lignesCommande?.map(linge => (
                                        <TableRow key={linge.idLigneCommande}>
                                            <TableCell component="th" scope="row">
                                                <Link
                                                    to={`/ArticleDetails/${linge.article.codeArticle}`}
                                                > Article Details : {linge.article.codeArticle}</Link>
                                            </TableCell>
                                            <TableCell >
                                                <Avatar alt={linge.article.titre}
                                                    src="/static/images/avatar/1.jpg" />
                                            </TableCell>
                                            <TableCell >{linge.article.titre}</TableCell>
                                            <TableCell >{linge.article.prix}</TableCell>
                                            <TableCell >{linge.qteCde}</TableCell>
                                            <TableCell >
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    value={linge.idLigneCommande}
                                                    className={classes.button}
                                                    onClick={() => handleClick(linge.idLigneCommande)}
                                                    startIcon={<HighlightOffIcon />}
                                                >
                                                    Supprimer
                                                    </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                            <TableFooter  >

                                <TableRow>
                                    <TableCell>Tax</TableCell>
                                    <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Total</TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                                </TableRow>
                                <TableRow variant="footer">
                                    <TableCell  >Commander</TableCell>
                                    <TableCell variant="footer">
                                        <Button
                                            variant="contained"
                                            color="secondary"

                                            className={classes.button}
                                            startIcon={<DoneOutlineIcon />}
                                        >
                                            confirmer  la commande
                                                    </Button>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Container>
            </div>


        </main>

    );

}
export default withStyles(styles)(Pannier);

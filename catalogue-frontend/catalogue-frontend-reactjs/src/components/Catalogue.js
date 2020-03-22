import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


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

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

class Catalogue extends React.Component {

    state = {
        articles: [],
        categories: []
    }

    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/API/Article/Articles", requestOptions)
            .then(response => response.text())
            .then(result => this.setState({ articles: JSON.parse(result) }))
            .catch(error => console.log('error', error));

        fetch("http://localhost:8080/API/Categorie/Categories", requestOptions)
            .then(response => response.text())
            //.then(result => console.log(result))
            .then(result => this.setState({ categories: JSON.parse(result) }))
            .catch(error => console.log('error', error));
    }

    handleChange = event => {
        //get
    };
    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <main>
                    <div>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="demo-customized-textbox">Prix</InputLabel>
                            <BootstrapInput id="demo-customized-textbox" />
                        </FormControl>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="demo-customized-select-native">Categorie</InputLabel>
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={"Categorie"}
                                onChange={this.handleChange}
                                input={<BootstrapInput />}
                            ><option aria-label="None" value="" />
                                {this.state.categories.map(row => (<option value={row.refCat}>{row.cat}</option>
                                ))}

                            </NativeSelect>
                        </FormControl>
                    </div>
                    <div className={classes.heroContent}>
                        <Container maxWidth="lg"  >
                            <TableContainer component={Paper} >
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Article Code</TableCell>
                                            <TableCell align="right">Designation</TableCell>
                                            <TableCell align="right">Prix Unitaire</TableCell>
                                            <TableCell align="right">Quantité disponible</TableCell>
                                            <TableCell align="right">Categorie</TableCell>
                                            <TableCell align="right">Ajouter au Panier</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.articles.map(row => (
                                            <TableRow key={row.codeArticle}>
                                                <TableCell component="th" scope="row">
                                                    {row.codeArticle}
                                                </TableCell>
                                                <TableCell align="right">{row.designation}</TableCell>
                                                <TableCell align="right">{row.prix}</TableCell>
                                                <TableCell align="right">{row.stock}</TableCell>
                                                <TableCell align="right">{row.categorie.cat}</TableCell>
                                                <TableCell align="right">
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

                {/* End footer */}
            </React.Fragment >
        );
    }
}
export default withStyles(styles, { withTheme: true })(Catalogue);

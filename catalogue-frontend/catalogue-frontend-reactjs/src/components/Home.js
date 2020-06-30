import React from 'react';
import order from '../assets/order.png'; // with import
import order_ from '../assets/order_.png'; // with import
import product from '../assets/product.png'; // with import
import Image from 'react-bootstrap/Image';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles(theme => ({
    button: {
        padding: "15px 25px",
        fontSize: "24px",
        cursor: "pointer",
        textAlign: "center",
        outline: "none",
        color: "#fff0",
        backgroundColor: "#4CAF50",
        border: "none",
        borderRadius: "15px",
        boxShadow: "0 9px #999"
    },
}));

const mystyle = {
    borderRadius: "10px 10px 10px 10px",
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "5px",
    fontFamily: "Arial",
    margin: "5px",
    maxWidth: "400px",
    display: "inline-block"
};

export default function Home(props) {
    const classes = useStyles();
    const client = props.location.state?.o;
    // useEffect(() => {
    //     console.log(client);
    // }, [client]);



    return (
        <div style={{ minHeight: "100%" }} >
            <div className="site-wrapper">
                <div className="site-wrapper-inner">
                    <div className="cover-container">
                        <div style={{ marginBottom: "30px" }}>
                            <h1 ><span style={{ verticalAlign: "bottom" }}>Home</span><HomeIcon fontSize="inherit" /> </h1>
                        </div>
                        <hr />

                        <div className="inner cover"  >
                            <Row style={{ textAlign: "center", display: "block" }} >
                                <Col xs={6} style={mystyle} md={4}>
                                    <Image src={order} style={{ width: "200px", margin: "16px" }} rounded /><br />
                                    <Link style={{ textDecoration: "none", color: "#fff" }} className={classes.button} to="/Catalogue">Consulter le catalogue</Link>

                                </Col>
                                <Col xs={6} style={mystyle} md={4}>
                                    <Image src={order_} style={{ width: "200px", margin: "16px" }} rounded /> <br />
                                    <Link style={{ textDecoration: "none", color: "#fff" }} className={classes.button} to="/Commandes">Suivre vos commandes </Link>

                                </Col>
                                <Col xs={6} style={mystyle} md={4}>
                                    <Image src={product} style={{ width: "200px", margin: "16px" }} rounded /> <br />
                                    <Link style={{ textDecoration: "none", color: "#fff" }} className={classes.button} to={{
                                        pathname: "/Pannier",
                                        oClient: client
                                    }}>Visualiser le pannier</Link>

                                </Col>
                            </Row>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

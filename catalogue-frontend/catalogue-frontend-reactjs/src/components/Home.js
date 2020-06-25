import React from 'react';
import order from '../assets/order.png'; // with import
import order_ from '../assets/order_.png'; // with import
import product from '../assets/product.png'; // with import
import Image from 'react-bootstrap/Image';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


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



export default function Home() {
    const classes = useStyles();

    return (
        <div style={{ minHeight: "100%" }} >
            <div className="site-wrapper">
                <div className="site-wrapper-inner">
                    <div className="cover-container">
                        <div className="masthead clearfix">
                            <div className="inner">
                                <h3 className="masthead-brand">SEBO</h3>
                            </div>
                        </div>

                        <div class="inner cover"  >
                            <Row >
                                <Col xs={6} md={4}>
                                    <Image src={order} style={{ width: "200px" }} rounded /><br />
                                    <Link style={{ textDecoration: "none", color: "#fff" }} className={classes.button} to="/Catalogue">Consulter le catalogue</Link>

                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src={order_} style={{ width: "200px" }} rounded /> <br />
                                    <Link style={{ textDecoration: "none", color: "#fff" }} className={classes.button} to="/Commandes">Suivre vos commandes </Link>

                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src={product} style={{ width: "200px" }} rounded /> <br />
                                    <Link style={{ textDecoration: "none", color: "#fff" }} className={classes.button} to="/Pannier">Visualiser le pannier</Link>

                                </Col>
                            </Row>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

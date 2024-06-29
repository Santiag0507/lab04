import "../style.css"
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="foot text-dark py-4">
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <h5>Inicio</h5>
                        <ul className="foot-1 list-unstyled">
                            <li>Buscar Tienda</li>
                            <li>Regístrate para recibir correos</li>

                        </ul>
                    </Col>
                    <Col xs={12} md={9}>
                        <Row>
                            <Col xs={6} md={2}>
                                <h5>Abarrotes</h5>
                                <ul className="foot-1 list-unstyled">
                                    <li>Arroz</li>
                                    <li>Papa</li>
                                    <li>Camote</li>
                                    <li>Yuca</li>
                                    <li>Menestras</li>
                                </ul>
                            </Col>
                            <Col xs={6} md={2}>
                                <h5>Carnes</h5>
                                <ul className="foot-1 list-unstyled">
                                    <li>Pollo</li>
                                    <li>Pescado</li>
                                    <li>Res</li>
                                    <li>Pavo</li>
                                    <li>Gallina/Gallo</li>
                                </ul>
                            </Col>
                            <Col xs={6} md={2}>
                                <h5>Uso Personal</h5>
                                <ul className="foot-1 list-unstyled">
                                    <li>Papel Higiénico</li>
                                    <li>Toallas Sanitarias</li>
                                    <li>Shampoo</li>
                                    <li>Pasta Dental/Cepillo</li>
                                    <li>Jabón</li>
                                </ul>
                            </Col>
                            <Col xs={6} md={2}>
                                <h5>Limpieza</h5>
                                <ul className="foot-1 list-unstyled">
                                    <li>Detergente</li>
                                    <li>Limpiadores Multiuso</li>
                                    <li>Esponjas</li>
                                    <li>Bolsas</li>
                                    <li>Ambientadores</li>
                                </ul>
                            </Col>
                            <Col xs={6} md={2}>
                                <h5>Bebidas</h5>
                                <ul className="foot-1 list-unstyled">
                                    <li>Gaseosas</li>
                                    <li>Agua Mineral</li>
                                    <li>Jugos</li>
                                    <li>Hidratante</li>
                                    <li>Alcohol</li>
                                </ul>
                            </Col>
                            <Col xs={6} md={2}>
                                <h5>Snacks</h5>
                                <ul className="foot-1 list-unstyled">
                                    <li>Galletas Dulces</li>
                                    <li>Galletas Saladas</li>
                                    <li>Bocaditos</li>
                                    <li>Barritas Energéticas</li>
                                    <li>Frutos Secos</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="foot-1 mt-3">
                    <Col xs={12} md={3}>
                        <Button variant="light">@Facebook</Button>
                    </Col>
                    <Col xs={12} md={3}>
                        <Button variant="light">@Instagram</Button>
                    </Col>
                    <Col xs={12} md={3}>
                        <Button variant="light">@Twitter</Button>
                    </Col>
                    <Col xs={12} md={3}>
                        <Button variant="light">@WhatsApp</Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;


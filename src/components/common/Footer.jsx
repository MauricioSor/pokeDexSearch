import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {

    return (
        <Container className='bg-dark py-2' fluid id="footer">
            <Row className="container justify-content-center align-items-center">
                <Col sm={12} md={6}>
                    <p className="text-light text-end" id="textoFooter">&copy; Todos los derechos Reservados- MauricioSor</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
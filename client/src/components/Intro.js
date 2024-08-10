import { Container, Col, Row, Button } from 'react-bootstrap';


const Intro = () => {
    return (
            <div className="intro">
                <Container className="text-white d-flex justify-content-center align-items-center">
                    <Row>
                        <Col>
                            <div className="welcome">WELCOME</div>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default Intro
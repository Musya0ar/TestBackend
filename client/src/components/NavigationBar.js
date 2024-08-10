import {Navbar, Container, Nav} from "react-bootstrap"


const NavigationBar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>Musya_AR Portofolio</Navbar.Brand>
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>My Art</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class NavBar extends React.Component {
    render() {
        return(
            <>
                <header>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="/">E-sport</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/"}>Accueil</Nav.Link>
                                    <Nav.Link as={Link} to={"/leagues"}>Ligues</Nav.Link>
                                    <Nav.Link as={Link} to={"/series"}>Séries</Nav.Link>
                                    <Nav.Link as={Link} to={"/matches"}>Matchs</Nav.Link>
                                    <Nav.Link as={Link} to={"/teams"}>Équipes</Nav.Link>
                                    <Nav.Link as={Link} to={"/players"}>Joueurs</Nav.Link>
                                    <Nav.Link as={Link} to={"/games"}>Jeux</Nav.Link>
                                    <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        )
    }
}
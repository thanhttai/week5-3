import React, { useState, useEffect } from "react";
import {
    Navbar,
    Container,
    Form,
    FormControl,
    Button,
    Nav,
} from 'react-bootstrap';

const SearchBox = ({ setQuery }) => {
    const [searchInput, setSearchInput] = useState("Your input here");
    const handleInput = (input) => {
        input.preventDefault();
        setSearchInput(input.target.value);
    };

    const handleSubmit = () => {
        setQuery(searchInput);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">CoderNews</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">News</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchInput}
                            onChange={handleInput}
                        />
                        <Button onClick={handleSubmit} variant="outline-success" >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SearchBox

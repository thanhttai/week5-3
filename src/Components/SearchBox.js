import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom"
import {
    Navbar,
    Container,
    Form,
    FormControl,
    Button,
    Nav,
    Dropdown,
    DropdownButton
} from 'react-bootstrap';

const SearchBox = ({ setQuery, setCategory }) => {
    const [searchInput, setSearchInput] = useState("Your input here");
    const handleInput = (input) => {
        input.preventDefault();
        setSearchInput(input.target.value);
    };

    const handleSubmit = () => {
        setQuery(searchInput);
    };

    const handleCategory = (e) => {

        setCategory(e.target.id);
    }

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
                        {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                        <DropdownButton id="dropdown-basic-button" title="Categories">
                            <Dropdown.Item><Link to="/categories/Sports" id="Sports" onMouseDown={handleCategory} style={{ textDecoration: 'none', color: 'black' }}>Sports</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/categories/Health" id="Health" onMouseDown={handleCategory} style={{ textDecoration: 'none', color: 'black' }}>Health</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/categories/Science" id="Science" onMouseDown={handleCategory} style={{ textDecoration: 'none', color: 'black' }}>Science</Link></Dropdown.Item>

                        </DropdownButton>
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

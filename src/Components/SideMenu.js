import React from 'react';
import { ListGroup } from 'react-bootstrap';



const SideMenu = ({ setCategory }) => {
    const handleCategory = (e) => {

        setCategory(e.target.id);
    }
    return (
        <ListGroup variant="flush" style={{ cursor: "pointer", textAlign: "left", marginTop: "50px", padding: "auto 10px", transform: "translateX(-20%)" }}>
            <ListGroup.Item id="business" onMouseDown={handleCategory}>Business</ListGroup.Item>
            <ListGroup.Item id="entertainment" onMouseDown={handleCategory}>Entertainment</ListGroup.Item>
            <ListGroup.Item id="general" onMouseDown={handleCategory}>General</ListGroup.Item>
            <ListGroup.Item id="health" onMouseDown={handleCategory}>Health</ListGroup.Item>
            <ListGroup.Item id="science" onMouseDown={handleCategory}>Science</ListGroup.Item>
            <ListGroup.Item id="sports" onMouseDown={handleCategory}>Sports</ListGroup.Item>
            <ListGroup.Item id="technology" onMouseDown={handleCategory}>Technology</ListGroup.Item>
        </ListGroup>
    )
}

export default SideMenu;
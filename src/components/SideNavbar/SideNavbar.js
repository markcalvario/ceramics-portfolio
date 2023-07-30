import {React, useState} from "react";
import {NavLink} from "react-router-dom"
import "./SideNavbar.css"

import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'

//icons
//import MenuIcon from '@material-ui/icons/Menu';

const SideNavbar= (props) =>{
    //const [showMenu, setShowMenu]= useState(false);

    return(
        <Col xs = {3} xl = {3}>
            <Nav className="flex-column nav-links">
                <Nav.Link href="/" activeClassName="highlight-link"><span>Mark Anthony Calvario</span></Nav.Link>
                <Nav.Link href="/about" activeClassName="highlight-link">About</Nav.Link>
                <Nav.Link href="/bowls" activeClassName="highlight-link">Bowls</Nav.Link>
                <Nav.Link href="/cups" activeClassName="highlight-link">Cups</Nav.Link>
                <Nav.Link href="/liddedjars" activeClassName="highlight-link">Lidded Jars</Nav.Link>
                <Nav.Link href="/teapots" activeClassName="highlight-link">Teapots</Nav.Link>
                <Nav.Link href="/vases" activeClassName="highlight-link">Vases I</Nav.Link>
                <Nav.Link href="/vases2" activeClassName="highlight-link">Vases II</Nav.Link>
                <Nav.Link href="/vases3" activeClassName="highlight-link">Vases III</Nav.Link>
            </Nav>
       </Col>
    )
}

export default SideNavbar;
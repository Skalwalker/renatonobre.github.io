import React from 'react';
import Link from 'react-router-dom/Link'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


type myState = { }
type myProps = { }

class NavBar extends React.Component<myProps, myState> {
    render(){
        return (
            <Navbar style={{backgroundColor: "transparent", height: '8vh', zIndex: 100 }} expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand style={{color: 'white'}}>Under Construction</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link className='nav-link subtitle' to="/" style={{color: 'white'}}>Home</Link>
                    <Link className='nav-link subtitle' to="/about/core" style={{color: 'white'}}>About</Link>
                    <Link className='nav-link subtitle' to="/skills" style={{color: 'white'}}>Skills</Link>
                    <Link className='nav-link subtitle' to="/experience" style={{color: 'white'}}>Experience</Link>
                    <Link className='nav-link subtitle' to="/achivements" style={{color: 'white'}}>Achivements</Link>
                    <Link className='nav-link subtitle' to="/crafts" style={{color: 'white'}}>Crafts</Link>
                    <Link className='nav-link subtitle' to="/contact" style={{color: 'white'}}>Contact Me</Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}



export default NavBar;

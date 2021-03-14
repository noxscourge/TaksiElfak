import React from 'react'
import {Navbar,Nav,Button,Container,NavDropdown} from 'react-bootstrap'
import Body from './Body'
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
    return (
        

        <header> 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <LinkContainer to="/"> 
        <Navbar.Brand >Noxus</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ">

            <LinkContainer to="/o_nama">  
          <Nav.Link>O nama</Nav.Link>
          </LinkContainer> 

          <LinkContainer to="/pomoc">  
          <Nav.Link href="/pomoc">Pomoc</Nav.Link>
          </LinkContainer>  

          <LinkContainer to="/biografija">  
          <Nav.Link>Biografija vozaca</Nav.Link>
          </LinkContainer>  
           
          </Nav>
          <Nav>
          <LinkContainer to="/login">  
          <Nav.Link ><i className='fas fa-user'></i> Prijavi se</Nav.Link>
            </LinkContainer>  

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      
<div className="dobrodosli">
<h2> <strong> Dobrodosli na nasu web stranicu </strong></h2>
</div>
       
      </header>
 
    )

   
}

export default Header

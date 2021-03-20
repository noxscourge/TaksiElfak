import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
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

         


          <LinkContainer to="/zakazane_voznje">  
          <Nav.Link>Zakazane voznje</Nav.Link>
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

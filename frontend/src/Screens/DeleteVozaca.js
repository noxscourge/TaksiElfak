import React from 'react'

import {Container} from 'react-bootstrap'

import axios from 'axios'

const DeleteVozaca = ({match,history}) => {
    
   

  const DeleteHandler = () => 
  {

    axios.delete(`/api/deleteVozaca/${match.params.id}`);
    history.push('/')

  }

  const ReturnBack = () =>
  { 

        history.push('/');

  }
  
  return (
        <Container>
        


      <h1>Da li zaista zelite da obrisete vozaca? </h1> 
      <button type="submit" onClick={DeleteHandler} > Da </button>
      <button type="submit" onClick={ReturnBack}> Ne </button>
     
      </Container> 
    )
}

export default DeleteVozaca;
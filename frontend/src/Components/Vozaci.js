import React , {useState,useEffect} from 'react'
import {Table,Container,Button} from 'react-bootstrap'



import axios from 'axios'

const Vozaci = () => {
    
  
  
  const [vozaci,setVozaci] = useState([])
  

  useEffect(() => {
   
    const fetchVozaci = async() =>
    {
      const {data} = await axios.get('/api/vozaci')

      setVozaci(data)
    }
    fetchVozaci()
    
  }, [])


 


  
  return (
        <Container>
        <h2> Sta cekas? Zakazi svoju voznju! </h2>
        <Table striped bordered hover  variant="dark">
           
        
        <thead>
          <tr>
          
            <th>Ime</th>
            <th>Prezime</th>
            <th>Status</th>
            <th>Kompanija</th>
            <th>Cena</th>
            <th>  Zakazi voznju?
            </th>
          </tr>
        </thead>
        <tbody>

            {vozaci.map(vozac => (
          <tr key={vozac.id}>
          
              
            <td >{vozac.ime}</td>
            <td >{vozac.prezime}</td>
            <td >{vozac.status} </td>
            <td >{vozac.kompanija} </td>
           <td> {vozac.cena} dinara </td>
          
           <td> {vozac.status==="dostupan" ? (

<Button variant='success' className='btn-sm ml-3' > <i className = 'fas fa-check'></i> <a href={`/Zakazi_Voznju/${vozac.id}`} > Zakazi voznju </a></Button> 
            ) :  
            <Button variant='danger' disabled={true} className='btn-sm ml-3' > <i className = 'fas fa-times'></i> Ne mozete zakazati voznju</Button> } 



           
      </td> 
      <td>

      <a href={`/DeleteVozaca/${vozac.id}`}>Delete</a>
      <a href={`/EditVozaca/${vozac.id}`}> Edit </a> 
     
      </td>

          </tr>
            ))}
        </tbody>
      </Table>

      <a href="/DodajVozaca">Dodaj vozaca </a>
      
      </Container> 
    )
}

export default Vozaci

import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-bootstrap'
import {Row,Col,Image,Table,Container,Button} from 'react-bootstrap'
import Avatar from 'react-avatar'
import vozaci from '../vozaciPodaci' 
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
            <th>Slika</th>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Status</th>
            <th>Kompanija</th>
            <th>  Profil vozaca 
            </th>
            <th>  Zakazi voznju?
            </th>
          </tr>
        </thead>
        <tbody>

            {vozaci.map(vozac => (
          <tr key={vozac._id}>
          
            <td >
              
              <Avatar alt="" src={`/slike_za_profil/${vozac.ime}.jpg`}/>
             
             </td>  
            <td >{vozac.ime}</td>
            <td >{vozac.prezime}</td>
            <td >{vozac.status} </td>
            <td >{vozac.kompanija} </td>
           
           <td>  <a href={`/vozaci/${vozac._id}`}> Link </a> </td>
           <td> {vozac.status==="dostupan" ? (

<Button variant='success' className='btn-sm ml-3' > <i className = 'fas fa-check'></i></Button>
            ) :  
            <Button variant='danger' disabled={true} className='btn-sm ml-3' > <i className = 'fas fa-times'></i></Button> } 

           
      </td> 
          </tr>
            ))}
        </tbody>
      </Table>
      </Container> 
    )
}

export default Vozaci

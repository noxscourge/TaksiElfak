import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'



const Zakazane_Voznje = () => {
    

   

    const [voznje,setVoznja] = useState([])
    useEffect(() => {
   
    const fetchVoznje = async() =>
    {
      const {data} = await axios.get('/api/voznje')

      setVoznja(data)
    }
    fetchVoznje()
    
  }, [])



    
    return (
        <form> 
        <h2 > Lista zakazanih voznji </h2>
        <Table striped bordered hover  variant="dark">
           
        
        <thead>
          <tr>
          
            <th>id voznje</th>
            <th>ime taksiste</th>
            <th>prezime taksiste</th>
            <th>od</th>
            <th>do</th>
            <th>cena</th>
            <th>broj klijenta</th>
            <th>email klijenta</th>
          </tr>
        </thead>
        
        
        <tbody>


        {voznje.map(voznja => (
          <tr key={voznja.id}>
     
            <td >{voznja.id}</td>
            <td >{voznja.vozac_ime}</td>
            <td >{voznja.vozac_prezime} </td>
            <td >{voznja.od} </td>
            <td> {voznja.do} </td>
            <td >{voznja.cena} dinara </td>
            <td> {voznja.broj_telefona} </td>
            <td> {voznja.email} </td>
            <td>

            <Button variant='success'  className='btn-sm ml-3' > <i className = 'fas fa-check'></i> <a href={`/deleteVoznja/${voznja.id}`}> Zavrsena voznja </a> </Button>  


            </td>
          </tr>
        ))}

            


        </tbody>

      </Table>
      
    
      <a href="/"> Vrati se </a>
  
      </form>
    
        
    )}


export default Zakazane_Voznje

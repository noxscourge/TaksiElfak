import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Col,Table} from 'react-bootstrap'
import FormContainer from '../Components/FormContainer'


const Zakazi_Voznju = ({history,match}) => {
   
 const [vozac,setVozac] = useState([]);


 useEffect(()=>
 {

         const fetchVozaca = async () =>
         {
             const {data} = await axios.get(`/api/getTaksistaById/${match.params.id}`)

                
             setVozac(data)
         }

         fetchVozaca()

         
 },[match])
  


   

    const DodajVozacaHandler = () => {
     
  
     var email=document.querySelector('.email').value;
     var broj_telefona =document.querySelector('.broj_telefona').value;
     var od =document.querySelector('.od').value;
     var _do=document.querySelector('._do').value;
     var ime= vozac.ime;
     var prezime = vozac.prezime;
     var cena = vozac.cena;
     var kompanija = vozac.kompanija;
     var trenutna_lokacija=vozac.trenutna_lokacija;
     var vozac_id = vozac.id;
     console.log(vozac_id)

        axios.post(`/api/zakazi_voznju/${match.params.id}`, {email:email, broj_telefona:broj_telefona, od:od, _do:_do, ime:ime, prezime:prezime,cena:cena, kompanija:kompanija, vozac_id:vozac_id});


 
        axios.post(`/api/EditVozaca/${match.params.id}`, {id:match.params.id,ime:ime,prezime:prezime, status:"nedostupan",kompanija:kompanija,trenutna_lokacija:trenutna_lokacija,cena:cena })

                history.push('/');
            
            
    
    }

    return (
 
        <FormContainer> 
        <h2> Zakazivanje vozaca </h2>
        <Table striped bordered hover  variant="dark">
           
        
        <thead>
          <tr>
          
            <th>Ime</th>
            <th>Prezime</th>
            <th>Status</th>
            <th>Kompanija</th>
            <th>Cena</th>
            <th>VozacID</th>
          </tr>
        </thead>
        <tbody>

            <tr> 
            <td >{vozac.ime}</td>
            <td >{vozac.prezime}</td>
            <td >{vozac.status} </td>
            <td >{vozac.kompanija} </td>
            <td> {vozac.cena} </td>
            <td> {vozac.id} </td>
          </tr>
           
        </tbody>
      </Table>

   <Col md={3}> 

  <label>
    Email Adresa:
    <input className='email' type="text" name="email"  placeholder="Unesite vasu email adresu"/>
  </label>

  <label>
    Broj telefona:
    <input className='broj_telefona' type="text" name="broj_telefona" placeholder="Unesite vas broj" />
  </label>

  <label>
    Voznja od:
    <input className='od' type="text" name="od" placeholder="lokacija od koje polazite" />
  </label>


  <label>
    Voznja do:
    <input className='_do' type="text" name="_do"  placeholder="lokacija do koje idete"/>
  </label>



 

  <input type="submit" value="zakazi voznju"  onClick={DodajVozacaHandler}/>
  
  </Col>
   
  </FormContainer>
    
    )
}

export default Zakazi_Voznju

import React from 'react'
import axios from 'axios'
import {Col} from 'react-bootstrap'
import FormContainer from '../Components/FormContainer'


const DodajVozaca = ({history}) => {
   

    const DodajVozacaHandler = () => {
     
  
     var ime=document.querySelector('.ime').value;
     var prezime =document.querySelector('.prezime').value;
     var status =document.querySelector('.select').value;
     console.log(status);

     var kompanija =document.querySelector('.kompanija').value;
     var trenutna_lokacija =document.querySelector('.trenutna_lokacija').value;
     var cena=document.querySelector('.cena').value;
    

        axios.post(`/api/dodajVozaca`,{ime:ime,prezime:prezime,status:status,kompanija:kompanija,
            trenutna_lokacija:trenutna_lokacija,cena:cena})

                history.push('/');
            
            
    
    }

    return (
 <FormContainer> 
   <Col md={3}> 

  
  <label>
    Ime:
    <input className='ime' type="text" name="ime" />
  </label>

  <label>
    Prezime:
    <input className='prezime' type="text" name="prezime" />
  </label>

  <label>
    Status:
  <select className="select">
  <option value="dostupan">dostupan</option>
  <option value="nedostupan">nedostupan</option>
  
 
</select>
  </label>


  <label>
    Kompanija:
    <input className='kompanija' type="text" name="kompanija" />
  </label>

  <label>
    Trenutna Lokacija:
    <input className='trenutna_lokacija' type="text" name="trenutna_lokacija" />
  </label>

  <label>
    Cena:
    <input className='cena' type="number" name="cena" /> 
  </label>


  <input type="submit" value="Dodaj novog takstistu"  onClick={DodajVozacaHandler}/>
  
  </Col>
   
  </FormContainer>
    




    )
}

export default DodajVozaca

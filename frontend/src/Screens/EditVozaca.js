import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Col} from 'react-bootstrap'
import FormContainer from '../Components/FormContainer'


const EditVozaca = ({history,match}) => {
 
    

    useEffect(()=>
    {

            const fetchVozaca = async () =>
            {
                const {data} = await axios.get(`/api/getTaksistaById/${match.params.id}`)

                setVozac(data)
            }

            fetchVozaca()

            console.log(match)
    },[match])


    const [vozac,setVozac] = useState({})
    const [lokacija,setLokacija] = useState('')
    const [ime,setIme] = useState('')
    const [prezime,setPrezime] = useState('')
    const [kompanija,setKompanija] = useState('')
    const [cena,setCena] = useState('')



const EditVozacaHandler = () => 
{

    
   
    var ime=document.querySelector('.ime').value;
    var prezime =document.querySelector('.prezime').value;
    var status =document.querySelector('.select').value;
    var kompanija =document.querySelector('.kompanija').value;
    var trenutna_lokacija =document.querySelector('.trenutna_lokacija').value;
    var cena=document.querySelector('.cena').value;
    var id=document.querySelector('.id').value;

       axios.post(`/api/editVozaca/${match.params.id}`,{id:id,ime:ime,prezime:prezime,status:status,kompanija:kompanija,
           trenutna_lokacija:trenutna_lokacija,cena:cena})

           history.push('/')
            
}
    return (   
        
        

 <FormContainer> 
   <Col md={3}> 
  
  
  <label>
    Ime:
    <input className='ime' type="text" name="ime" placeholder={vozac.ime} value={ime} onChange={e => setIme(e.target.value)}/>
  </label>

  <label>
    Prezime:
    <input className='prezime' type="text" name="prezime" placeholder={vozac.prezime} value={prezime}   onChange={e => setPrezime(e.target.value)} />
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
    <input className='kompanija' type="text" name="kompanija" placeholder={vozac.kompanija} value={kompanija} onChange={e => setKompanija(e.target.value)} />
  </label>

  <label>
    Trenutna Lokacija:
    <input className='trenutna_lokacija' type="text" name="trenutna_lokacija" placeholder={vozac.trenutna_lokacija} value={lokacija} onChange={e => setLokacija(e.target.value)}/>
  </label>

  <label>
    Cena:
    <input className='cena' type="number" name="cena" placeholder={vozac.cena}  value={cena} onChange={e => setCena(e.target.value)}/>  
  </label> 


  
    <input  style={{display:'none'}} className='id' type="text" name="id" value={match.params.id} />
  

  <input type="submit" value="Edit"  onClick={EditVozacaHandler}/>
  
  </Col>
   
  </FormContainer>
    




    )
}

export default EditVozaca

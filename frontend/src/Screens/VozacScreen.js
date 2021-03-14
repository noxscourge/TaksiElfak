import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col,Image,Table,Container,Button,Form} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import Avatar from 'react-avatar'
import FormContainer from '../Components/FormContainer'
import Footer from '../Components/Footer'
const VozacScreen = ({match}) => {
    
    const [vozac,setVozac] = useState({})
    


    useEffect(()=>
    {

            const fetchVozaca = async () =>
            {
                const {data} = await axios.get(`/api/vozaci/${match.params.id}`)

                setVozac(data)
            }

            fetchVozaca()

            console.log(match)
    },[match])


    return (
        <>
            <FormContainer>
           
          
            <Avatar alt="" src={`/slike_za_profil/${vozac.ime}.jpg`}/>
            <h2> Ime : {vozac.ime} </h2>
            <h2> Prezime : {vozac.prezime} </h2>
            <h2> Kompanija : {vozac.kompanija} </h2>
            <h2> Opis : OPDKAOKDOAKOPDKOPAKDOPK
                        AOPKDOKAPODKOPAD
                        SDADADADADADADADASDADADAd
                        ADASDASDASDADASSDADASDADA </h2>

            


            </FormContainer>
          
          
          <Link to="/">Vrati se </Link> 
          
       </>
    )
}

export default VozacScreen

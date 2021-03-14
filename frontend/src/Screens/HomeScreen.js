import React from 'react'
import Vozaci from '../Components/Vozaci'
import {Row,Col,Image,Table,Container} from 'react-bootstrap'

import SlideShow from '../Components/SlideShow'
import Body from '../Components/Body'
import Header from '../Components/Header'
const HomeScreen = () => {
    return (
        <>
            
        <Header/>
        <SlideShow/>
        <Vozaci/>
             <Body/>       
         
        </>
    )
}

export default HomeScreen

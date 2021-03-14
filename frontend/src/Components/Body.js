import React from 'react'
import {Col,Row,Card, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Body = () => {
    return (
           
            <Row>
                <Col sm={5} md={6} lg={4} xl={3}>
                <Link to="/zakazi">
                <Card className='my-5 p-3 rounded'> 
               
                <img src="../taksi.png"  alt=""/>
                <h5> (Napisi tekst da ubacim ovde u pitanju je da se zakaze voznja, 
                    tipa stavi zasto ne biste porucili ugodnu voznju do zeljenog mesta bla bla)
                </h5>

                
                </Card>
                </Link>
               
                </Col>



                <Col sm={12} md={6} lg={4} xl={3}>

                <Link to="/help">
                <Card className='my-5 p-3 rounded'> 

                <img src="../support.png"  alt=""/>
               
                <h5> Imate problema? Tu je nas tutorial kako da zakazete voznju (isto napisi)
                </h5>

                </Card>
                </Link>
                </Col>

               
                
                <Col sm={12} md={6} lg={4} xl={3}>
                <Link to="/o_nama">
                <Card className='my-5 p-3 rounded'> 
                
                
                <img src="../about.jpg " alt="/o_nama"/>
                
                <h5> O Nama treba da napises (Kao koja je svrha aplikacije, koje kompanije su tu itd itd)
                </h5>
                
              </Card>
              </Link>
              </Col>
             

              <Col sm={12} md={6} lg={4} xl={3}>
              <Link to="/o_nama">
                <Card className='my-5 p-3 rounded'> 


                <img src="../about.jpg " alt=""/>

                <h5> (Napisi tekst da ubacim ovde u pitanju je da se zakaze voznja, 
                    tipa stavi zasto ne biste porucili ugodnu voznju do zeljenog mesta bla bla)
                </h5>
              </Card>
              </Link>
              </Col>

            </Row>
   
    )
}

export default Body

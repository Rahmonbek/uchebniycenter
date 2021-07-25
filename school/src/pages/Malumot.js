import React, { Component } from 'react'
import styles from '../css/about.module.css'
import back from '../img/back.png'
import { Container,Row,Col } from 'react-bootstrap'
import logo2 from '../img/12347.png'
import {FaSignInAlt} from 'react-icons/fa'

import { Card, Button,Fab ,IconButton,Divider} from 'ui-neumorphism'
export default class Malumot extends Component {
    render() {
        return (
            <div>
               <div className={styles.top}>
                   
                   <Container>
                       <Row>
                           <Col lg={12}>
                               <div className={styles.navbar}>
                                   <a>Loyiha haqida</a>
                                   <a>Afzalliklar</a>
                                   <a>Qo'llanma</a>
                                   <a>Aloqa</a>
                               </div>
                           </Col>
                           <Col lg={5} style={{padding:'0'}}>
                               <Card className={styles.logo}>
                                   <img src={logo2}/>
                               </Card>
                               <p>O'quv markazlari uchun ma'lumotlar ombori bilan ishlash uchun yaratilgan qulay administrator paneli. Foydalanish uchun qo'ng'iroq qiling ! </p>
                               <Button  depressed color="white" style={{marginLeft:'45px',marginTop:'10px'}} bgColor='#9E81C4'>Qo'ng'iroq qilish</Button>
                           </Col>
                           <Col lg={7}>
                               <img src={back}/>
                           </Col>
                       </Row>
                   </Container>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9E81C4" fill-opacity="1" d="M0,96L18.5,117.3C36.9,139,74,181,111,181.3C147.7,181,185,139,222,117.3C258.5,96,295,96,332,117.3C369.2,139,406,181,443,170.7C480,160,517,96,554,90.7C590.8,85,628,139,665,138.7C701.5,139,738,85,775,74.7C812.3,64,849,96,886,117.3C923.1,139,960,149,997,160C1033.8,171,1071,181,1108,176C1144.6,171,1182,149,1218,117.3C1255.4,85,1292,43,1329,64C1366.2,85,1403,171,1422,213.3L1440,256L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
               </div>
               <Container>
                       <Row>
                       <Col lg={7} className={styles.aboutleft}>
                               <h1>Loyihamiz haqida</h1>
                               <p>Social proof bootstrapping seed money twitter. Product management iPad buzz business-to-consumer.</p>
                           </Col>
                           <Col lg={5} className={styles.aboutright}>
                               <p>“Churn rate paradigm shift innovator facebook android infographic churn paradigm design strategy investor social proof.“</p>
                               <h3>Gerald Richards</h3>
                               <h6>CEO, Example.com</h6>
                           </Col>
                       </Row>
                   </Container>
                   <Container>
                       <Row>
                           <Col lg={4} className={styles.card}>
                               <FaSignInAlt style={{color:'#9E81C4',fontSize:'40px'}}/>
                               <h4>Advance Insights</h4>
                               <p>Churn rate paradigm shift innovator facebook android infographic strategy investor social proof. Churn rate paradigm shift innovator facebook android.</p>
                           </Col>
                           <Col lg={4} className={styles.card}>
                               <FaSignInAlt style={{color:'#9E81C4',fontSize:'40px'}}/>
                               <h4>Advance Insights</h4>
                               <p>Churn rate paradigm shift innovator facebook android infographic strategy investor social proof. Churn rate paradigm shift innovator facebook android.</p>
                           </Col>
                           <Col lg={4} className={styles.card}>
                               <FaSignInAlt style={{color:'#9E81C4',fontSize:'40px'}}/>
                               <h4>Advance Insights</h4>
                               <p>Churn rate paradigm shift innovator facebook android infographic strategy investor social proof. Churn rate paradigm shift innovator facebook android.</p>
                           </Col>
                       </Row>
                   </Container>
            </div>
        )
    }
}

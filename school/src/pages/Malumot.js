import React, { Component } from 'react'
import styles from '../css/about.module.css'
import back from '../img/back.png'
import { Container,Row,Col } from 'react-bootstrap'
import logo2 from '../img/12347.png'
import {FaSignInAlt} from 'react-icons/fa'
import dashboard from '../img/present-left_j5k4mh67.png'
import { Card, Button,Fab ,IconButton,Divider} from 'ui-neumorphism'
import dashboard1 from '../img/present-right_xmbzj1bc.png'
import ReactPlayer from "react-player"
import '../App.css'
export default class Malumot extends Component {
    render() {
        return (
            <div style={{backgroundColor:'white'}}>
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
                           <Col lg={7}>
                               <img src={dashboard} style={{width:'100%'}}/>
                           </Col>
                           <Col lg={5} className={styles.afzalliklar}>
                               <h6>POWERED BY AI</h6>
                               <h1>Advance Insights</h1>
                               <p>Social proof bootstrapping seed money twitter. Product management iPad buzz business-to-consumer. User experience equity influencer.</p>
                               <h4>USER BEHAVIOR PATTERNS</h4>
                               <p>Customer agile development business model canvas ramen seed money. Deployment channels paradigm</p>
                               <h4>USER BEHAVIOR PATTERNS</h4>
                               <p>Customer agile development business model canvas ramen seed money. Deployment channels paradigm</p>
                           </Col>
                           <Col lg={5} style={{marginTop:'100px'}} className={styles.afzalliklar}>
                               <h6>POWERED BY AI</h6>
                               <h1>Advance Insights</h1>
                               <p>Social proof bootstrapping seed money twitter. Product management iPad buzz business-to-consumer. User experience equity influencer.</p>
                               <h4>USER BEHAVIOR PATTERNS</h4>
                               <p>Customer agile development business model canvas ramen seed money. Deployment channels paradigm</p>
                               <h4>USER BEHAVIOR PATTERNS</h4>
                               <p>Customer agile development business model canvas ramen seed money. Deployment channels paradigm</p>
                           </Col>
                           <Col lg={7} style={{marginTop:'100px'}}>
                               <img src={dashboard1} style={{width:'100%'}}/>
                           </Col>
                       </Row>
                   </Container>
             <Container fluid>
                 <Row>
                     <Col lg={12} className={styles.youtube}>
                     <div class="custom-shape-divider-top-1627219937">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
<h6>POWERED BY AI</h6>
                               <h1>Advance Insights</h1>
                               <p>Social proof bootstrapping seed money twitter. Product management iPad buzz business-to-consumer. User experience equity influencer.</p>
                               <ReactPlayer
                               style={{marginLeft:'250px',marginTop:'70px',position:'inherit',zIndex:'111111111111'}}
                               width='800px'
                               height='500px'
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
      />
                       <div class="custom-shape-divider-bottom-1627221721">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
                     </Col>
                 </Row>
             </Container>
             <Container>
                 <Row>
                     <Col lg={12} className={styles.aloqa}>

                     </Col>
                 </Row>
             </Container>
            </div>
        )
    }
}

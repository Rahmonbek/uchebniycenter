import React, { Component } from 'react'
import styles from '../css/about.module.css'
import back from '../img/back.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,Row,Col } from 'react-bootstrap'
import logo2 from '../img/12347.png'
import {FaSignInAlt,FaTelegramPlane,FaPhoneAlt} from 'react-icons/fa'
import dashboard from '../img/present-left_j5k4mh67.png'
import { Card, Button,Fab ,IconButton,Divider} from 'ui-neumorphism'
import dashboard1 from '../img/present-right_xmbzj1bc.png'
import ReactPlayer from "react-player"
import '../App.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineInstagram,AiOutlineMail} from 'react-icons/ai'
import Aos from 'aos';
import 'aos/dist/aos.css';
export default class Malumot extends Component {
    componentDidMount(){
        Aos.init({
          duration:2000
      
        });
      }
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
                           <Col lg={5} md={6} sm={12} style={{padding:'0'}}>
                               <div className={styles.logo}>
                                   <img src={logo2}/>
                               </div>
                               <p>O'quv markazlari uchun ma'lumotlar ombori bilan ishlash uchun yaratilgan qulay administrator paneli. Foydalanish uchun qo'ng'iroq qiling ! </p>
                               <button  depressed color="white" style={{marginLeft:'45px',marginTop:'10px'}} bgColor='#9E81C4'><FaPhoneAlt style={{marginRight:'10px',marginTop:'-5px'}}/> Qo'ng'iroq qilish</button>
                           </Col>
                           <Col lg={7}  md={6} sm={12}>
                               <img src={back}/>
                           </Col>
                       </Row>
                   </Container>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9E81C4" fill-opacity="1" d="M0,96L18.5,117.3C36.9,139,74,181,111,181.3C147.7,181,185,139,222,117.3C258.5,96,295,96,332,117.3C369.2,139,406,181,443,170.7C480,160,517,96,554,90.7C590.8,85,628,139,665,138.7C701.5,139,738,85,775,74.7C812.3,64,849,96,886,117.3C923.1,139,960,149,997,160C1033.8,171,1071,181,1108,176C1144.6,171,1182,149,1218,117.3C1255.4,85,1292,43,1329,64C1366.2,85,1403,171,1422,213.3L1440,256L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
               </div>
               <Container>
                       <Row>
                       <Col lg={7}  md={6} sm={12} className={styles.aboutleft}>
                               <h1>Loyihamiz haqida</h1>
                               <p>Social proof bootstrapping seed money twitter. Product management iPad buzz business-to-consumer.</p>
                           </Col>
                           <Col lg={5}  md={6} sm={12} className={styles.aboutright}>
                               <p>“Churn rate paradigm shift innovator facebook android infographic churn paradigm design strategy investor social proof.“</p>
                               <h3>Gerald Richards</h3>
                               <h6>CEO, Example.com</h6>
                           </Col>
                       </Row>
                   </Container>
                   <Container fluid style={{position:'relative',padding:'0'}}>
                   <svg id="wave" style={{position:'absolute',transform:'rotate(0deg)', transition: '0.3s'}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(182, 148, 225, 1)" offset="0%"></stop><stop stop-color="rgba(134, 110, 167, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:'translate(0, 0px)', opacity:'1'}} fill="url(#sw-gradient-0)" d="M0,49L48,98C96,147,192,245,288,236.8C384,229,480,114,576,89.8C672,65,768,131,864,179.7C960,229,1056,261,1152,302.2C1248,343,1344,392,1440,383.8C1536,376,1632,310,1728,277.7C1824,245,1920,245,2016,277.7C2112,310,2208,376,2304,367.5C2400,359,2496,278,2592,228.7C2688,180,2784,163,2880,147C2976,131,3072,114,3168,147C3264,180,3360,261,3456,310.3C3552,359,3648,376,3744,351.2C3840,327,3936,261,4032,245C4128,229,4224,261,4320,261.3C4416,261,4512,229,4608,228.7C4704,229,4800,261,4896,285.8C4992,310,5088,327,5184,334.8C5280,343,5376,343,5472,351.2C5568,359,5664,376,5760,318.5C5856,261,5952,131,6048,73.5C6144,16,6240,33,6336,73.5C6432,114,6528,180,6624,228.7C6720,278,6816,310,6864,326.7L6912,343L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"></path></svg>
                       <Row>
                           <Col lg={4}  md={6} sm={12}  className={styles.card1} data-aos="fade-up">
                               <FaSignInAlt style={{color:'#9E81C4',fontSize:'40px'}}/>
                               <h4>Advance Insights</h4>
                               <p>Churn rate paradigm shift innovator facebook android infographic strategy investor social proof. Churn rate paradigm shift innovator facebook android.</p>
                           </Col>
                           <Col lg={4}  md={6} sm={12} className={styles.card} data-aos="fade-up">
                               <FaSignInAlt style={{color:'#9E81C4',fontSize:'40px'}}/>
                               <h4>Advance Insights</h4>
                               <p>Churn rate paradigm shift innovator facebook android infographic strategy investor social proof. Churn rate paradigm shift innovator facebook android.</p>
                           </Col>
                           <Col lg={4}  md={6} sm={12} className={styles.card} data-aos="fade-up">
                               <FaSignInAlt style={{color:'#9E81C4',fontSize:'40px'}}/>
                               <h4>Advance Insights</h4>
                               <p>Churn rate paradigm shift innovator facebook android infographic strategy investor social proof. Churn rate paradigm shift innovator facebook android.</p>
                           </Col>
                       </Row>
            
                   </Container>
                   <Container>
                       <Row>
                       <Col lg={7} md={6} sm={12}>
                               <img src={dashboard} style={{width:'100%'}} data-aos="fade-right"/>
                           </Col>
                           <Col lg={5}  md={6} sm={12} className={styles.afzalliklar} data-aos="fade-left">
                               <h6>POWERED BY AI</h6>
                               <h1>Advance Insights</h1>
                               <p>Social proof bootstrapping seed money twitter. Product management iPad buzz business-to-consumer. User experience equity influencer.</p>
                               <h4>USER BEHAVIOR PATTERNS</h4>
                               <p>Customer agile development business model canvas ramen seed money. Deployment channels paradigm</p>
                               <h4>USER BEHAVIOR PATTERNS</h4>
                               <p>Customer agile development business model canvas ramen seed money. Deployment channels paradigm</p>
                           </Col>
                           <Col lg={5}  md={6} sm={12} style={{marginTop:'100px'}} className={styles.afzalliklar} data-aos="fade-right">
                               <h6>POWERED BY AI</h6>
                               <h1>Advance Insights</h1>
                               <p>Social proof bootstrapping seed money twitter. Product management iPad buzz business-to-consumer. User experience equity influencer.</p>
                               <h4>USER BEHAVIOR PATTERNS</h4>
                               <p>Customer agile development business model canvas ramen seed money. Deployment channels paradigm</p>
                               <h4>USER BEHAVIOR PATTERNS</h4>
                               <p>Customer agile development business model canvas ramen seed money. Deployment channels paradigm</p>
                           </Col>
                           <Col lg={7} md={6} sm={12} style={{marginTop:'100px'}} data-aos="fade-left">
                               <img src={dashboard1} style={{width:'100%'}}/>
                           </Col>
                       </Row>
                   </Container>
             <Container fluid>
                 <Row>
                     <Col lg={12}  md={12} sm={12} className={styles.youtube}>
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
                               data-aos="fade-up"
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
                            <h1>Biz bilan aloqa</h1>
                            <Row>
                                <Col lg={2}  md={4} sm={6} className={styles.aloqacard} data-aos="zoom-in">
                                    <div><HiOutlineLocationMarker style={{color:'white'}}/></div>
                                    <p><b>Manzil: </b> Yakkasaroy tumani</p>
                                </Col>
                                <Col lg={2}  md={4} sm={6} className={styles.aloqacard} data-aos="zoom-in">
                                    <div><FaPhoneAlt style={{color:'white'}}/></div>
                                    <p><b>Telefon: </b>+9983398567165</p>
                                </Col>
                                <Col lg={2}  md={4} sm={6} className={styles.aloqacard} data-aos="zoom-in">
                                    <div><AiOutlineMail style={{color:'white'}}/></div>
                                    <p><b>E-mail: </b>kathfygfbqb@gmail.com</p>
                                </Col>
                                <Col lg={2}  md={4} sm={6} className={styles.aloqacard} data-aos="zoom-in">
                                    <div><FaTelegramPlane style={{color:'white'}}/></div>
                                    <p><b>Telegram: </b>@it_tower</p>
                                </Col>
                                <Col lg={2}  md={4} sm={6} className={styles.aloqacard} data-aos="zoom-in">
                                    <div><AiOutlineInstagram style={{color:'white'}}/></div>
                                    <p><b>Instagram: </b>@it_tower</p>
                                </Col>
                            </Row>
                     </Col>
                 </Row>
             </Container>
            </div>
        )
    }
}

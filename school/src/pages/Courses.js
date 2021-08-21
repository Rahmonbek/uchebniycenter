import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/courses.module.css';
import  '../css/scroll.module.css';
import '../App.css';
import { Button, Col, Container, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import logo from '../img/logo1.png'
import frontend from '../img/frontend.jpg'
import backend from '../img/backend.png'
import fullstack from '../img/fullstack.png'
import { BrowserRouter,Route,Link } from 'react-router-dom';
import Malumot from './Malumot';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WebIcon from '@material-ui/icons/Web';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {FaChevronDown} from 'react-icons/fa'

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Menu, Switch } from 'antd'
import { NavLink } from 'react-router-dom';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import {YMaps, Map, Clusterer, Placemark, 
  TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl } from 'react-yandex-maps'
import {Carousel} from '3d-react-carousal';
import { getGroups } from '../host/Config';
import { getTrainingS } from '../host/Config';
import Category from './Category';

  export default class Courses extends Component {
   
    state={
expanded:[],
justifyActive:'tab1',
group:[],
traning:[],
date:"",
points:[
    {
      name: "IT Tower",
      param: [41.317648, 69.230585], 
    }, 
],

    }

    getDate(){
      var today = new Date();
      var date = today.getFullYear()+"-"+((today.getMonth()+1)<10? "0"+(today.getMonth()+1): (today.getMonth()+1))+"-"+((today.getDate()+1)<10? "0"+today.getDate(): today.getDate());
      this.setState({
        date: date
      })

 
    }
  
    getGroupS=()=>{
      getGroups().then(res=>{
   
        this.setState({
          group:res.data
        })
        
      }).catch(err=>{console.log(err)})
    }
  
  
    getTraningS=()=>{
      getTrainingS().then(res=>{
   
        this.setState({
          traning:res.data
        })
        
      }).catch(err=>{console.log(err)})
     
    }
echoTraining=(id)=>{
  var t={}
  for(let i=0; i<this.state.traning.length; i++){
    if(id===this.state.traning[i].id){
t=this.state.traning[i]

    }
  }
  return(t)
}
    componentDidMount(){
      Aos.init({
        duration:2000
    
      });
      this.getGroupS();
    this.setState({expanded:[false, false, false]});

    this.getTraningS();
    this.getDate();
    }
    
  
    handleExpandClick = (id) => {
      var a=this.state.expanded
      a[id]=!a[id]
   
      this.setState({expanded:a})
    };
    
    handleJustifyClick = (value) => {
      if (value === this.state.justifyActive) {
        return;
      }
  
      this.setState({justifyActive:value});
    };


 
    render(){
      
      let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />, 
      <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
      <img  src="https://picsum.photos/800/302/?random" alt="3" />  , 
      <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
      <img src="https://picsum.photos/800/304/?random" alt="5" />  ];

      const { active, group,traning } = this.state;
      return (
        
        <div>
   
            <div className={styles.bg}>
           
      <header className={styles.header}>

                      <div className={styles.navbar}>
                             <ul>
                             
                             <Link to="/malumot"><li>Biz haqimizda</li></Link>
                             <Link to="/xarita"><li>Xarita</li></Link>
                             
                             <Link to='/login'><li >Kirish</li></Link>
                             {/* <li style={{margin:'10px 0px'}}>|</li>
                             <Link to="/lcenter"><li style={{marginLeft:'10px'}}>Ro'yxatdan o'tish</li></Link> */}
                               
                               
                               </ul>
                      </div>
  
    
    

                       <Carousel slides={slides} autoplay={false} interval={2000} style={{marginTop:'50px'}}/>
                         
                      
                          
                       <a href='#1'>
                       <div className={styles.bottom}>
                         <FaChevronDown style={{fontSize:'20px',}}/>
                         </div>
                       </a>
                       </header>
                      
   
                      
                    
   
                    {/* Section----- */}
                    <div id='1' className={styles.section}>
                    <Container>
                    <h1 data-aos="zoom-in-up">Yangi kurslar</h1>
                    
                    <Category/>
                    {/* <MDBTabs justify className='mb-3' >
        <MDBTabsItem style={{marginBottom:'40px'}}>
          <MDBTabsLink onClick={() => this.handleJustifyClick('tab1')} active={this.state.justifyActive === 'tab1'} >
          All
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem style={{marginBottom:'40px'}}>
          <MDBTabsLink onClick={() => this.handleJustifyClick('tab2')} active={this.state.justifyActive === 'tab2'}>
           IT
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem style={{marginBottom:'40px'}}>
          <MDBTabsLink onClick={() => this.handleJustifyClick('tab3')} active={this.state.justifyActive === 'tab3'}>
            TIL
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem style={{marginBottom:'40px'}}>
          <MDBTabsLink onClick={() => this.handleJustifyClick('tab4')} active={this.state.justifyActive === 'tab4'}>
            ABITURENT
          </MDBTabsLink>
        </MDBTabsItem>
        
      </MDBTabs> */}

      
      <Row>    
            {
              group && Array.isArray(group)?group.map((item,key)=>{

               return(
               
                (item.start_date>=this.state.date)?(
                  
                  <Col lg={4} md={6} sm={12}>
                  <Row>
     <Col lg={12}>
                    
                      <Card className={styles.root} style={{margin:'auto', marginBottom:'20px'}} data-aos="zoom-in-up">
                      
                      {

                        traning &&(Array.isArray(traning))?
                          <CardHeader 

                          
                avatar={
                  <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}}>
                 
                <img src={this.echoTraining(item.training_center).photo} style={{width:'30px', height:'30px'}}/>
              
                  
                    
                  </Avatar>
                }
                
                action={
                    
                <Link to='/registration/uz'>
                <div className={styles.singup}>
                   <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Registratsiya</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton  >
                    <PersonAddIcon color="primary"/>
                  </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
                    
                  </div>
                </Link>
                  
                  
                }
                title={this.echoTraining(item.training_center).name}
               
                subheader={item.name}
                
              />
                        :''
                      }
                      <CardMedia
                        className={styles.media}
                        image={item.image}
                        
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          
                         <p style={{fontSize:'15px'}}> <b>Boshlanish vaqti: </b>{item.start_date}</p>
                         <p style={{fontSize:'15px'}}> <b>Mentor: </b>{item.teacher}</p>
                         <p style={{fontSize:'15px'}}> <b>Kurs muddati: </b>{item.duration} oy</p>
                         <p style={{fontSize:'15px'}}> <b>Kurs kunlari: </b>{item.days}</p>
                         <p style={{fontSize:'15px'}}> <b>Kurs vaqti: </b>{item.time}</p>
                          <p style={{fontSize:'15px'}}> <b>Kategoriya: </b>{item.category}</p>
                        
                        
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                      <OverlayTrigger
                     
                     placement="bottom"
                     overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>O'quv markaz to'g'risida batafsil ma'lumot</Tooltip>}
                   >
                     {({ ref, ...triggerHandler }) => (
                       <Button
                       size='small'
                         variant="#F2F2F2"
                         {...triggerHandler}
                         className="d-inline-flex align-items-center"
                       >
                         <Image
                           ref={ref}
                           
                         />
                        
                        <IconButton >
                          <InfoOutlinedIcon />
                        </IconButton> 
                       </Button>
                     )}
                   </OverlayTrigger>
                      <OverlayTrigger
                     
                     placement="bottom"
                     overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Web - sahifa</Tooltip>}
                   >
                     {({ ref, ...triggerHandler }) => (
                       <Button
                       size='small'
                         variant="#F2F2F2"
                         {...triggerHandler}
                         className="d-inline-flex align-items-center"
                       >
                         <Image
                           ref={ref}
                           
                         />
                        
                        <IconButton >
                          <WebIcon />
                        </IconButton> 
                       </Button>
                     )}
                   </OverlayTrigger>
                        
                       <OverlayTrigger
                     
               placement="bottom"
               overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
             >
               {({ ref, ...triggerHandler }) => (
                 <Button
                   variant="#F2F2F2"
                   {...triggerHandler}
                   className="d-inline-flex align-items-center"
                 >
                   <Image
                     ref={ref}
                     
                   />
                    <a href={this.echoTraining(item.training_center).telegram}>
                          <IconButton >
                          <TelegramIcon />
                        </IconButton>
                       </a>
                   
                 </Button>
               )}
             </OverlayTrigger>
                    
                       
                       <OverlayTrigger
                     
               placement="bottom"
               overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
             >
               {({ ref, ...triggerHandler }) => (
                 <Button
                   variant="#F2F2F2"
                   {...triggerHandler}
                   className="d-inline-flex align-items-center"
                 >
                   <Image
                     ref={ref}
                     
                   />
                   <a href={this.echoTraining(item.training_center).instagram}>
                          <IconButton >
                          <InstagramIcon />
                        </IconButton>
                       </a>
                   
                 </Button>
               )}
             </OverlayTrigger>
                       <OverlayTrigger
                     
               placement="bottom"
               overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
             >
               {({ ref, ...triggerHandler }) => (
                 <Button
                   variant="#F2F2F2"
                   {...triggerHandler}
                   className="d-inline-flex align-items-center"
                 >
                   <Image
                     ref={ref}
                     
                   />
                    <a href={`tel:${this.echoTraining(item.training_center).phone_number}`}>
                          <IconButton >
                          <CallIcon />
                        </IconButton>
                       </a>
                   
                 </Button>
               )}
             </OverlayTrigger>
                       
                        <OverlayTrigger
                     
               placement="bottom"
               overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
             >
               {({ ref, ...triggerHandler }) => (
                 <Button
                   variant="#F2F2F2"
                   {...triggerHandler}
                   className="d-inline-flex align-items-center"
                 >
                   <Image
                     ref={ref}
                     
                   />
                   <a href={`mailto:${this.echoTraining(item.training_center).email}`}>
                          <IconButton >
                          <MailOutlineIcon />
                        </IconButton>
                        </a>
                   
                 </Button>
               )}
             </OverlayTrigger>
                        
                        <OverlayTrigger
                     
               placement="bottom"
               overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Kurs haqida batafsil ma'lumot</Tooltip>}
             >
               {({ ref, ...triggerHandler }) => (
                 <Button
             variant="#F2F2F2"
                   {...triggerHandler}
                   className="d-inline-flex align-items-center"
                 >
                   <Image
                     ref={ref}
                     
                   />
               <IconButton 
                          className={clsx(styles.expand, {
                            [styles.expandOpen]: this.state.expanded[key],
                          })}
                          onClick={()=>{this.handleExpandClick(0)}}
                          aria-expanded={this.state.expanded[0]}
                          aria-label="show more"
                          
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                   
                 </Button>
               )}
             </OverlayTrigger>
                        
                      </CardActions>
                      <Collapse in={this.state.expanded[0]} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography paragraph>{item.name}</Typography>
                          <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                          </Typography>
                          <Typography paragraph>
                            {item.description}
                          </Typography>
                          
                          <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  
                    {/* </Col>
                    <Col lg={12}>
                    <Card className={styles.root} style={{margin:'auto', marginBottom:'20px'}} data-aos="zoom-in-up">
              <CardHeader 
                avatar={
                  <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}}>
                    <img src={logo} style={{width:'30px', height:'30px'}}/>
                  </Avatar>
                }
                
                action={
                    
                <Link to='/registration/uz'>
                <div className={styles.singup}>
                   <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Registratsiya</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton  >
                    <PersonAddIcon color="primary"/>
                  </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
                    
                  </div>
                </Link>
                  
                  
                }
                title="Backend Developer"
                
                // subheader="01.08.2021"
              />
              <CardMedia
                className={styles.media}
                image={backend}
              //   title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                 <p> <b>Boshlanish vaqti: </b>01.08.2021</p>
                 <p> <b>Mentor: </b>Ahmedov Abror</p>
                 <p> <b>Kurs muddati: </b>6 oy</p>
                 <p> <b>Kurs kunlari: </b>Dushanba, Chorshanba, Juma</p>
                 <p> <b>Kurs vaqti: </b>12:00-16:00</p>
                  <p> <b>Kategoriya: </b>Dasturlash</p>
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 <OverlayTrigger
             
             placement="bottom"
             overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>O'quv markaz to'g'risida batafsil ma'lumot</Tooltip>}
           >
             {({ ref, ...triggerHandler }) => (
               <Button
                 variant="#F2F2F2"
                 {...triggerHandler}
                 className="d-inline-flex align-items-center"
               >
                 <Image
                   ref={ref}
                   
                 />
                <IconButton >
                  <InfoOutlinedIcon />
                </IconButton>
                 
               </Button>
             )}
           </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
             <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
        <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Kurs haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[1],
                  })}
                  onClick={()=>{this.handleExpandClick(1)}}
                  aria-expanded={this.state.expanded[1]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
              
              </CardActions>
              <Collapse in={this.state.expanded[1]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Backend Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
                    </Col>
                  </Row>
                 
                  </Col>
      
                  <Col lg={4} md={6} sm={12}>
                  <Row>
                    <Col lg={12}>
                    <Card className={styles.root} style={{margin:'auto', marginBottom:'20px'}} data-aos="zoom-in-up">
              <CardHeader 
                avatar={
                  <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}}>
                    <img src={logo} style={{width:'30px', height:'30px'}}/>
                  </Avatar>
                }
                
                action={
                    
                <Link to='/registration/uz'>
                <div className={styles.singup}>
                   <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Registratsiya</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton  >
                    <PersonAddIcon color="primary"/>
                  </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
                    
                  </div>
                </Link>
                  
                  
                }
                title="Full Stack Developer"
                
                // subheader="01.08.2021"
              />
              <CardMedia
                className={styles.media}
                image={fullstack}
              //   title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                 <p> <b>Boshlanish vaqti: </b>01.08.2021</p>
                 <p> <b>Mentor: </b>Ahmedov Abror</p>
                 <p> <b>Kurs muddati: </b>10 oy</p>
                 <p> <b>Kurs kunlari: </b>Dushanba, Chorshanba, Juma</p>
                 <p> <b>Kurs vaqti: </b>12:00-16:00</p>
                  <p> <b>Kategoriya: </b>Dasturlash</p>
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 <OverlayTrigger
             
             placement="bottom"
             overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>O'quv markaz to'g'risida batafsil ma'lumot</Tooltip>}
           >
             {({ ref, ...triggerHandler }) => (
               <Button
                 variant="#F2F2F2"
                 {...triggerHandler}
                 className="d-inline-flex align-items-center"
               >
                 <Image
                   ref={ref}
                   
                 />
                <IconButton >
                  <InfoOutlinedIcon />
                </IconButton>
                 
               </Button>
             )}
           </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
         <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Kurs haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
         <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[2],
                  })}
                  onClick={()=>{this.handleExpandClick(2)}}
                  aria-expanded={this.state.expanded[2]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
              
              </CardActions>
            
              <Collapse in={this.state.expanded[2]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Full Stack Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
                    </Col>
                 <Col lg={12}>
                 <Card className={styles.root} style={{margin:'auto', marginBottom:'20px'}} data-aos="zoom-in-up">
              <CardHeader 
                avatar={
                  <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}}>
                    <img src={logo} style={{width:'30px', height:'30px'}}/>
                  </Avatar>
                }
                
                action={
                    
                <Link to='/registration/uz'>
                <div className={styles.singup}>
                   <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Registratsiya</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton  >
                    <PersonAddIcon color="primary"/>
                  </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
                    
                  </div>
                </Link>
                  
                  
                }
                title="Frontend Developer"
                
                // subheader="01.08.2021"
              />
              <CardMedia
                className={styles.media}
                image={frontend}
              //   title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                 <p> <b>Boshlanish vaqti: </b>01.08.2021</p>
                 <p> <b>Mentor: </b>Ahmedov Abror</p>
                 <p> <b>Kurs muddati: </b>4 oy</p>
                 <p> <b>Kurs kunlari: </b>Dushanba, Chorshanba, Juma</p>
                 <p> <b>Kurs vaqti: </b>12:00-16:00</p>
                  <p> <b>Kategoriya: </b>Dasturlash</p>
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 <OverlayTrigger
             
             placement="bottom"
             overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>O'quv markaz to'g'risida batafsil ma'lumot</Tooltip>}
           >
             {({ ref, ...triggerHandler }) => (
               <Button
                 variant="#F2F2F2"
                 {...triggerHandler}
                 className="d-inline-flex align-items-center"
               >
                 <Image
                   ref={ref}
                   
                 />
                <IconButton >
                  <InfoOutlinedIcon />
                </IconButton>
                 
               </Button>
             )}
           </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
             <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
              
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
                
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Kurs haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
     variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
          <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[3],
                  })}
                  onClick={()=>{this.handleExpandClick(3)}}
                  aria-expanded={this.state.expanded[3]}
                  aria-label="show more"
                  
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
                
              </CardActions>
              <Collapse in={this.state.expanded[3]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Frontend Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
                 </Col>
                  </Row>
                  </Col>
      
                 
                  <Col lg={4} md={6} sm={12}>
                 <Row>
                   <Col lg={12}>
                   <Card className={styles.root} style={{margin:'auto', marginBottom:'20px'}} data-aos="zoom-in-up">
              <CardHeader 
                avatar={
                  <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}}>
                    <img src={logo} style={{width:'30px', height:'30px'}}/>
                  </Avatar>
                }
                
                action={
                    
                <Link to='/registration/uz'>
                <div className={styles.singup}>
                   <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Registratsiya</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton  >
                    <PersonAddIcon color="primary"/>
                  </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
                    
                  </div>
                </Link>
                  
                  
                }
                title="Backend Developer"
                
                // subheader="01.08.2021"
              />
              <CardMedia
                className={styles.media}
                image={backend}
              //   title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                 <p> <b>Boshlanish vaqti: </b>01.08.2021</p>
                 <p> <b>Mentor: </b>Ahmedov Abror</p>
                 <p> <b>Kurs muddati: </b>6 oy</p>
                 <p> <b>Kurs kunlari: </b>Dushanba, Chorshanba, Juma</p>
                 <p> <b>Kurs vaqti: </b>12:00-16:00</p>
                  <p> <b>Kategoriya: </b>Dasturlash</p>
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 <OverlayTrigger
             
             placement="bottom"
             overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>O'quv markaz to'g'risida batafsil ma'lumot</Tooltip>}
           >
             {({ ref, ...triggerHandler }) => (
               <Button
                 variant="#F2F2F2"
                 {...triggerHandler}
                 className="d-inline-flex align-items-center"
               >
                 <Image
                   ref={ref}
                   
                 />
                <IconButton >
                  <InfoOutlinedIcon />
                </IconButton>
                 
               </Button>
             )}
           </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
            
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
              
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Kurs haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
              <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[4],
                  })}
                  onClick={()=>{this.handleExpandClick(4)}}
                  aria-expanded={this.state.expanded[4]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
            
              </CardActions>
              <Collapse in={this.state.expanded[4]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Backend Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
                   </Col>
                   <Col lg={12}>
                   <Card className={styles.root} style={{margin:'auto', marginBottom:'20px'}} data-aos="zoom-in-up">
              <CardHeader 
                avatar={
                  <Avatar aria-label="recipe" className={styles.avatar} style={{backgroundColor:'white'}}>
                    <img src={logo} style={{width:'30px', height:'30px'}}/>
                  </Avatar>
                }
                
                action={
                    
                <Link to='/registration/uz'>
                <div className={styles.singup}>
                   <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Registratsiya</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton  >
                    <PersonAddIcon color="primary"/>
                  </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
                    
                  </div>
                </Link>
                  
                  
                }
                title="Full Stack Developer"
                
                // subheader="01.08.2021"
              />
              <CardMedia
                className={styles.media}
                image={fullstack}
              //   title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                 <p> <b>Boshlanish vaqti: </b>01.08.2021</p>
                 <p> <b>Mentor: </b>Ahmedov Abror</p>
                 <p> <b>Kurs muddati: </b>10 oy</p>
                 <p> <b>Kurs kunlari: </b>Dushanba, Chorshanba, Juma</p>
                 <p> <b>Kurs vaqti: </b>12:00-16:00</p>
                  <p> <b>Kategoriya: </b>Dasturlash</p>
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                 <OverlayTrigger
             
             placement="bottom"
             overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>O'quv markaz to'g'risida batafsil ma'lumot</Tooltip>}
           >
             {({ ref, ...triggerHandler }) => (
               <Button
                 variant="#F2F2F2"
                 {...triggerHandler}
                 className="d-inline-flex align-items-center"
               >
                 <Image
                   ref={ref}
                   
                 />
                <IconButton >
                  <InfoOutlinedIcon />
                </IconButton>
                 
               </Button>
             )}
           </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telegram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='@ItTower'>
                  <IconButton >
                  <TelegramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
               
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Instagram</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <a href='http://instagram.com/ItTower'>
                  <IconButton >
                  <InstagramIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Telefon qilish</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a href='tel:+998935555555'>
                  <IconButton >
                  <CallIcon />
                </IconButton>
               </a>
           
         </Button>
       )}
     </OverlayTrigger>
               
                <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Email</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
           <a>
                  <IconButton >
                  <MailOutlineIcon />
                </IconButton>
                </a>
           
         </Button>
       )}
     </OverlayTrigger>
              <OverlayTrigger
             
       placement="bottom"
       overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>Kurs haqida batafsil ma'lumot</Tooltip>}
     >
       {({ ref, ...triggerHandler }) => (
         <Button
           variant="#F2F2F2"
           {...triggerHandler}
           className="d-inline-flex align-items-center"
         >
           <Image
             ref={ref}
             
           />
            <IconButton
                  className={clsx(styles.expand, {
                    [styles.expandOpen]: this.state.expanded[5],
                  })}
                  onClick={()=>{this.handleExpandClick(5)}}
                  aria-expanded={this.state.expanded[5]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
           
         </Button>
       )}
     </OverlayTrigger>
   
               
              </CardActions>
            
              <Collapse in={this.state.expanded[5]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Full Stack Developer kursi</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card> */}
                   </Col>
                 </Row>
                  </Col>
                ):""
      
                 
                
              )}):''
            }
   </Row>
             
           
             
         </Container>

        
      
         </div>   
         <footer >
             <div className={styles.footer}>
               <Container>
                 <Row>
                   <Col lg={6} md={6} sm={12}  className={styles.col}>
                   <YMaps >
        <Map
          width='90%'
          height='280px'
          defaultState={{
            center: [41.311151, 69.279716],
            zoom: 8
          }}
        >
          <Clusterer options={{  preset: 'islands#invertedVioletClusterIcons',  groupByCoordinates: false, }}  >
            {this.state.points.map((coordinates, index) => (
              
              <Placemark  balloonContent= '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />'
              iconContent= {coordinates.name}   key={index}
               geometry={coordinates.param} 
               options={{preset: "islands#blueStretchyIcon",
               // Отключаем кнопку закрытия балуна.
               balloonCloseButton: false,
                // Балун будем открывать и закрывать кликом по иконке метки.
               hideIconOnBalloonOpen: false,
               openBalloonOnClick:true}}/>
            ))}
          </Clusterer> 
          <GeolocationControl options={{ float: 'left' }} />
          <TypeSelector options={{ float: 'right' }} />
          <TrafficControl options={{ float: 'right' }} />
          <RouteButton options={{ float: 'right' }} />
          <ZoomControl options={{ float: 'left' }} />
  
        </Map>
    </YMaps>
                   </Col>
                   <Col lg={6} md={6} sm={12} className={styles.contact}>
                     {/* <Row> */}
                     <div>
                     <div className={styles.logo}>
                         <img src={logo} /> 
                     </div>
                     <h4 style={{color:'#fff', fontSize:'20px', textAlign:'center', marginBottom:'30px'}}>IT Tower</h4>
                     </div>

                     <div>
                       
                         <Col> 
                         <p style={{textAlign:'center'}}>Biz haqimizda</p>
                         <div className={styles.connection} style={{ marginLeft:'auto', marginRight:'auto'}}>
                           
                         <Link to="/malumot/">
                         <IconButton ><InfoOutlinedIcon color="primary" style={{fontSize:'23px',}}/></IconButton>
                         </Link>
                         </div></Col>
                         <Col>
                         <p style={{textAlign:'center'}}>Aloqa</p>
                         <div style={{display:'flex'}}>
                         <div className={styles.connection}>
                         <a href='@ItTower'>
                         <IconButton ><TelegramIcon color="primary" style={{fontSize:'23px'}}/></IconButton></a>
                         </div>
                         <div className={styles.connection}>
                         <a href='tel:+998935555555'>
                         <IconButton ><CallIcon color="primary" style={{fontSize:'23px'}}/></IconButton></a>
                         </div>
                         <div className={styles.connection}>
                         <a href='http://instagram.com/ItTower'>
                         <IconButton ><InstagramIcon color="primary" style={{fontSize:'23px'}}/></IconButton></a>
                         </div>
                         <div className={styles.connection}>
                         <a href="mailto:it_tower@gmail.com">
                         <IconButton ><MailOutlineIcon color="primary" style={{fontSize:'23px'}}/></IconButton></a>
                         </div>
                           </div>
                       </Col>
                       
                     </div>
                    
                     {/* </Row> */}

                   </Col>
                 </Row>
               </Container>
               </div>
             </footer>
            
         </div>
         
        </div>
       );
    }
   
    
  }




  

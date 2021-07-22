import React, { Component, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/courses.module.css';
import { Button, Col, Container, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import logo from '../img/logo1.png'
import frontend from '../img/frontend.jpg'
import backend from '../img/backend.png'
import fullstack from '../img/fullstack.png'

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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {FaSignInAlt} from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  export default class Courses extends Component {
    
    state={
expanded:[]
    }
    componentDidMount(){
      Aos.init({
        duration:2000
    
      });
    this.setState({expanded:[false, false, false]})
    }
    
  
    handleExpandClick = (id) => {
      var a=this.state.expanded
      a[id]=!a[id]
   
      this.setState({expanded:a})
    };
  
    render(){
      return (
        
        <div>
   
            <div className={styles.bg}>
           
                       <header className={styles.header}>
                         <Link to='/main/uz'>
                         <div className={styles.log_in}>
                         <FaSignInAlt  / >
                         </div>
                         </Link>
                      
                           <h1 >Yangi kurslar</h1>
                         
                       </header>
                      
   
                      
                    
   
                    {/* Section----- */}
                    <div className={styles.section}>
                    <Container>
   
                      <ul>
                        <li>ALL</li>
                        <li>IT</li>
                        <li>TIL</li>
                        <li>ABITURENT</li>
                      </ul>
                    
             <Row>
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
    overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'20px'}}>Registratsiya</Tooltip>}
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
  </OverlayTrigger>,
                 {/* <IconButton  >
                 <PersonAddIcon color="primary"/>
               </IconButton> */}
               
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
             
             </Typography>
           </CardContent>
           <CardActions disableSpacing>
             <IconButton aria-label="share">
               <ShareIcon />
             </IconButton>
             <IconButton
               className={clsx(styles.expand, {
                 [styles.expandOpen]: this.state.expanded[0],
               })}
               onClick={()=>{this.handleExpandClick(0)}}
               aria-expanded={this.state.expanded[0]}
               aria-label="show more"
               
             >
               <ExpandMoreIcon />
             </IconButton>
           </CardActions>
           <Collapse in={this.state.expanded[0]} timeout="auto" unmountOnExit>
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
    overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'20px'}}>Registratsiya</Tooltip>}
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
  </OverlayTrigger>,
                 
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
             
             </Typography>
           </CardContent>
           <CardActions disableSpacing>
             <IconButton aria-label="share">
               <ShareIcon />
             </IconButton>
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
    overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'20px'}}>Registratsiya</Tooltip>}
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
  </OverlayTrigger>,
                 
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
             
             </Typography>
           </CardContent>
           <CardActions disableSpacing>
             <IconButton aria-label="share">
               <ShareIcon />
             </IconButton>
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
    overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'20px'}}>Registratsiya</Tooltip>}
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
  </OverlayTrigger>,
                 
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
             
             </Typography>
           </CardContent>
           <CardActions disableSpacing>
             <IconButton aria-label="share">
               <ShareIcon />
             </IconButton>
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
    overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'20px'}}>Registratsiya</Tooltip>}
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
  </OverlayTrigger>,
                 
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
             
             </Typography>
           </CardContent>
           <CardActions disableSpacing>
             <IconButton aria-label="share">
               <ShareIcon />
             </IconButton>
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
    overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'20px'}}>Registratsiya</Tooltip>}
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
  </OverlayTrigger>,
                 
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
             
             </Typography>
           </CardContent>
           <CardActions disableSpacing>
             <IconButton aria-label="share">
               <ShareIcon />
             </IconButton>
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
         </Card>
                </Col>
              </Row>
               </Col>
   
              
             </Row>
   
             
         </Container>
         </div>   
         </div>
        </div>
       );
    }
   
    
  }




  

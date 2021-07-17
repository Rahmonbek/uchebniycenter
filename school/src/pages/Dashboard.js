import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import style from '../css/Dashboard.module.css'
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { Bar, Tooltip, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';

export default class Dashboard extends Component {
   
    state={
        data :[
            {
                "name": "2021 Mart",
                "O'quvchilar": 24,
                "Foyda": 2400000,
                "O'qituvchilar": 4
              },
              {
                "name": "2021 Aprel",
                "O'quvchilar": 13,
                "Foyda": 1300000,
                "O'qituvchilar": 3
              },
              {
                "name": "2021 May",
                "O'quvchilar": 98,
                "Foyda": 9800000,
                "O'qituvchilar": 8
              },
              {
                "name": "2021 Iyun",
                "O'quvchilar": 39,
                "Foyda": 3900000,
                "O'qituvchilar": 9
              },
              {
                "name": "2021 Iyul",
                "O'quvchilar": 48,
                "Foyda": 4800000,
                "O'qituvchilar": 8
              },
              {
                "name": "2021 Avgust",
                "O'quvchilar": 38,
                "Foyda": 3800000,
                "O'qituvchilar": 8
              },
              {
                "name": "2021 Mart",
                "O'quvchilar": 43,
                "Foyda": 4300000,
                "O'qituvchilar": 3
              },{
                "name": "2021 Mart",
                "O'quvchilar": 24,
                "Foyda": 2400000,
                "O'qituvchilar": 4
              },
              {
                "name": "2021 Aprel",
                "O'quvchilar": 13,
                "Foyda": 1300000,
                "O'qituvchilar": 3
              },
              {
                "name": "2021 May",
                "O'quvchilar": 98,
                "Foyda": 9800000,
                "O'qituvchilar": 8
              },
              {
                "name": "2021 Iyun",
                "O'quvchilar": 39,
                "Foyda": 3900000,
                "O'qituvchilar": 9
              },
              {
                "name": "2021 Iyul",
                "O'quvchilar": 48,
                "Foyda": 4800000,
                "O'qituvchilar": 8
              },
              {
                "name": "2021 Avgust",
                "O'quvchilar": 38,
                "Foyda": 3800000,
                "O'qituvchilar": 8
              },
              {
                "name": "2021 Mart",
                "O'quvchilar": 43,
                "Foyda": 4300000,
                "O'qituvchilar": 3
              },
            ], 
          grafWidth:0
    }
    componentDidMount(){
  
     
    }

    render() {
        return (
            <div>
         <div className={style.head}>
             <h1 className={style.h} >Statistika</h1>
<Row style={{width:'90%'}}>
<Col lg="4" md="6" sm="12">
    <div className={style.cards}>
        <Row>
            <Col lg="4">
               <div className={style.icon}>
               <div className={style.iconItem} style={{width:'160px', height:'60px', backgroundColor:'#f9d40d'}}>
               <PersonOutlinedIcon style={{color:'white', fontSize:'30px'}}/>
               </div>
               </div>
            </Col>
            <Col lg="8">
              <p className={style.xira}>  O'quvchilar</p>
              <h1 className={style.title}>85</h1>
              <p className={style.xira2}><span style={{fontWeight:'bold', color:'#f9d40d'}}>14 %</span> o'sdi</p>
            </Col>
        </Row>
    </div>
</Col><Col lg="4" md="6" sm="12">
    <div className={style.cards}>
        <Row>
            <Col lg="4">
               <div className={style.icon}>
               <div className={style.iconItem} style={{width:'160px', height:'60px', backgroundColor:'#de0202'}}>
               <GroupOutlinedIcon style={{color:'white', fontSize:'30px'}} />
               </div>
               </div>
            </Col>
            <Col lg="8">
              <p className={style.xira}> Guruhlar</p>
              <h1 className={style.title}>10</h1>
              <p className={style.xira2}><span style={{fontWeight:'bold', color:'#de0202'}}>14 %</span> o'sdi</p>
            </Col>
        </Row>
    </div>
</Col><Col lg="4" md="6" sm="12">
    <div className={style.cards}>
        <Row>
            <Col lg="4">
               <div className={style.icon}>
               <div className={style.iconItem} style={{width:'160px', height:'60px', backgroundColor:'green'}}>
               <PersonOutlinedIcon style={{color:'white', fontSize:'30px'}} />
               </div>
               </div>
            </Col>
            <Col lg="8">
              <p className={style.xira}>O'qituvchilar</p>
              <h1 className={style.title}>6</h1>
              <p className={style.xira2}><span style={{fontWeight:'bold', color:'green'}}>14 %</span> o'sdi</p>
            </Col>
        </Row>
    </div>
</Col></Row>
         </div>

         <div className={style.graf} >
             <Row style={{justifyConten:'center'}}>
                 <Col lg={4} md={6} sm={12}>
                 <div style={{overFlowX:'hidden', width:'100%'}} >
                 <BarChart style={{backgroundColor:'white', marginTop:'20px'}} width={900} height={300} data={this.state.data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis/>
  <Tooltip />
  <Legend />
  <Bar dataKey="O'quvchilar" fill="#f9d40d" /> 
  <Bar dataKey="O'qituvchilar" fill="#f9440d" /> 
  <Bar dataKey="Foyda" fill="#f5d40d" />
  
</BarChart></div>
                 </Col>
             </Row>
              </div>
            </div>
        )
    }
}

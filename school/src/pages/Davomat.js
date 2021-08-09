import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import styles from '../css/davomat.module.css'
import {Modal} from 'antd'
import { getGroups,getStudents } from '../host/Config';
import { getTraining } from '../host/Config';
import BootstrapTable from 'react-bootstrap-table-next';
import { Card, Button,Fab ,IconButton,Divider} from 'ui-neumorphism'
import {AiOutlinePlus} from 'react-icons/ai'
import {MdDateRange} from 'react-icons/md'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
export default function Davomat() {
  const [count, setCount] = useState(0);
    const today = new Date();
    const [date,setDate]=useState('')
    const [groups,setGroups]=useState([])
    const [numberGroup,getNumberGroup]=useState(4)
    const [students,setStudents]=useState([
      {
        id:1,
        full_name:'hbgyerg  gyegvwty',
        group:'group1'
      },
      {
        id:2,
        full_name:' gyegvwty',
        group:'group1'
      },
      {
        id:3,
        full_name:'hbg  gyegvwty',
        group:'group1'
      }
    ])
    const [visible,setVisible]=useState(false)
    const  showModal = () => {
       setVisible(true) 
    };
  
    const hideModal = () => {
      setVisible(false) 
    }
    const getDate=()=>{
      showModal()
    }
    const sanaGenerate=(cell, row, rowIndex, formatExtraData)=>{
      return(
        <div>
        <IconButton onClick={()=>getDate()} rounded text={false} bgColor={'#E4EBF5'} style={{marginLeft:'10px'}}><MdDateRange/></IconButton>
        <IconButton onClick={()=> getColumn()} rounded text={false} bgColor={'#E4EBF5'} style={{marginLeft:'10px'}}><AiOutlinePlus/></IconButton>
        </div>
      )
    }
    const [column,setColumn]=useState([
      {
            dataField: 'id',
            text: 'Guruh',
            formatter: (cell, row, rowIndex, extraData) => (
              <div>
                <span>{row.full_name}</span>
              </div>
            ),
            footer: ''
          },
      {
      dataField: 'inStock',
      text: 'Sana',
      headerFormatter:sanaGenerate,
      formatter: (cellContent, row) => (
        <div className="checkbox disabled">
          <label>
            <input type="checkbox"  onClick={()=>console.log(row)}/*checked={ row.inStock }*//>
          </label>
        </div>
      ),
      footer: "Jo'natish",
      // footerStyle:{
      //   display:'inline-block',
      //   backgroundColor:'#E4EBF5',
      //   margin:'10px',
      //   borderRadius: '50px',
      //   background: '#E4EBF5',
      //    boxShadow:  '5px 5px 10px #c2c8d0,-5px -5px 10px #ffffff',
      //    border:'none'
      // }
    }])
    var column2=column
    const getColumn=()=>{
      var newColumn=[{
        dataField: 'inStock',
        text: 'Sana',
        headerFormatter:sanaGenerate,
        formatter: (cellContent, row) => (
          <div className="checkbox disabled">
            <label>
              <input type="checkbox"  onClick={()=>console.log(row)}/*checked={ row.inStock }*//>
            </label>
          </div>
        ),
        footer: "Jo'natish",
        // footerStyle:{
        //   display:'inline-block',
        //   backgroundColor:'#E4EBF5',
        //   margin:'10px',
        //   borderRadius: '50px',
        //   background: '#E4EBF5',
        //    boxShadow:  '5px 5px 10px #c2c8d0,-5px -5px 10px #ffffff',
        //    border:'none'
        // }
      },]
      var column3=column2.concat(newColumn)     
      setColumn(column3)
      console.log(column2,column3,column)
      
    }
    // const getStudentS=()=>{
    //   getStudents().then(res=>{
    //     console.log(res.data)
    //     setStudents(res.data)
    //     console.log(students,numberGroup)
    //   }).catch(err=>{console.log(err)})
    // }
    const getGroupS=()=>{
      console.log(column)
      console.log(count)
        getGroups().then(res=>{
          console.log(res.data)
          setGroups(res.data)
          
        }).catch(err=>{console.log(err)})
      }
      useEffect(()=>{
       getGroupS()
      },[count])
    return (
        
        <div>
            <Container fluid style={{padding:'5%'}}> 
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <Row>
                            {
                              groups && Array.isArray(groups)?groups.map((item,key)=>{
                                  return(
                                      <Col lg={1} style={{marginLeft:'20px'}}>
                                         <Button onClick={()=>getNumberGroup(`${item.id}`)}> {item.name}</Button>
                                      </Col>
                                  )
                              }):''
                            }   
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col lg={12}  style={{marginTop:'100px'}}>
                    <BootstrapTable
                          keyField="id"
                          data={students}
                          columns={column}
                          />
                    </Col>
                </Row>
            </Container>
            <Modal
          title="Sanani tanlang"
          visible={visible}
          onOk={hideModal}
          width={300}
          onCancel={hideModal}
          okText= "Saqlash"
          cancelText= "O'chirish"
        >
         <DatePicker
         selected={date}
            onChange={(e) => {
             setDate(e)
              }}
            className="form-control"
            minDate={today}
            customInput={
              <input
                type="text"
                id="validationCustom01"
                placeholder="First name"
                defaultValue="08/19/2021"
              />
            }
          />
        </Modal>
        </div>
        
    )
}


import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import styles from '../css/davomat.module.css'
import {Modal} from 'antd'
import { idT } from '../host/Host';

import { getGroups,getStudents,createDavomat,editDavomat,getAttendance} from '../host/Config';
import { Card, Button,Fab ,IconButton,Divider,Checkbox ,Chip} from 'ui-neumorphism'
import {AiOutlinePlus} from 'react-icons/ai'
import {MdDateRange} from 'react-icons/md'
import { getTraining } from '../host/Config';
import BootstrapTable from 'react-bootstrap-table-next';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Input } from 'antd';
import {DatePicker} from 'antd'
export default function OqituvchiTable() {
  const [visible,setVisible]=useState(false)
  const [edit,setEdit] =useState(null)
const [date,setDate]=useState('')
  const  showModal = () => {
    setVisible(true) 
 };
 const getDate=(val)=>{
  setDate(val)
  hideModal()
}
 const hideModal = () => {
   setVisible(false) 
 }
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [form] = Form.useForm();
  const onFill = () => {
 
  };
  const [groups,setGroups]=useState([])
  const [students,setStudents]=useState([])
  const [studentArray,setStudenarray]=useState([])
  const [numberGroup,getNumberGroup]=useState([1])
  const [number, setNumber]=useState(2)
  const getNumber=(id)=>{
    setNumber(id)
    setNumber(id)
    console.log(number)
  }
  const setNumberGroup=()=>{
    console.log(numberGroup)
    var n=numberGroup
    n.push(Math.floor(Math.random()*10-1))
    console.log(numberGroup)
    setEdit(1)
  }
  const getStudentS=()=>{
    getStudents().then(res=>{
      setStudents(res.data)
    }).catch(err=>{console.log(err)})
  }
  const [attendance,setAttendance]=useState([])
  const getAttendances=()=>{
    getAttendance().then(res=>{
      setAttendance(res.data)
      console.log(attendance)
    }).catch(err=>{console.log(err)})
  }
  const get=(val)=>{
    studentArray.push(val.id)
   setStudenarray(studentArray)
  }
  const getStudent=()=>{
    var newObj={
      day:'2021-08-22T23:08:00+05:00',
      training_center:idT,
      group:2,
      students:studentArray
    }
        if (edit === null) {
          createDavomat(newObj).then(res => { console.log(res) }).catch(err => { console.log(err) })
        }
        else {
          editDavomat(newObj, edit).then(res => { console.log(res) }).catch(err => { console.log(err)})
        }
        hideModal()

  }
  const [studentBygroup,setStudentBygroup]=useState([])
  const getS=()=>{
    var studentBygroup = students.filter(function (el)
    {
      return el.group==number
    }
    )
    setStudentBygroup(studentBygroup)   
  }
  const getGroupS=()=>{
      getGroups().then(res=>{
        setGroups(res.data)
        
      }).catch(err=>{console.log(err)})
    }
    useEffect(()=>{
      getGroupS()
      getStudentS()
      getS()
      getAttendances()
     },[number,students,numberGroup])
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
                                         <Button active={number==item.id?true:false} onClick={()=>getNumber(`${item.id}`)}> {item.name}</Button>
                                      </Col>
                                  )
                              }):''
                            }   
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col lg={12}  style={{marginTop:'100px'}}>
                    <Card >
                    <Row>
                      <Col lg={3} style={{paddingTop:'60px',paddingLeft:'16px'}}>
                        <Card inset style={{padding:'13px'}}>
                        {
                          studentBygroup && Array.isArray(studentBygroup)?studentBygroup.map(item=>{
                            return(
                             
                              
                                <div>
                                    <p>{item.full_name}</p>
                                  <Divider dense  />
                              </div>
                             
                            )
                          }):''
                        }
                        </Card>
                      </Col>
                      <Divider dense  style={{width:'10px',height:'100%'}}/>
                      {
                        numberGroup.map(item=>{
                          return(
                            
                            
                             
                               
                                  <Col lg={2}  style={{paddingTop:'15px'}}>
              <IconButton onClick={()=>showModal()}  rounded text={false} bgColor={'#E4EBF5'} style={{marginLeft:'10px'}}><MdDateRange/></IconButton>
              <IconButton onClick={()=>setNumberGroup()} rounded text={false} bgColor={'#E4EBF5'} style={{marginLeft:'10px'}}><AiOutlinePlus/></IconButton>
              {
                studentBygroup && Array.isArray(studentBygroup)?studentBygroup.map((item,key)=>{
                  return(
                    <div style={{marginBottom:'15px',marginTop:'10px'}}>
                      
                       {
                       
                             attendance.map(item4=>{
                               return(
                                item4.students.map(item3=>{
                                  return(
                                    
                                      <Checkbox checked={item.id==item3} onClick={()=>get(item)}  color='var(--success)' style={{display:'block'}}/>
                                    
                                  )
                                  })
                               )
                             })
                }  
         
                      
                    </div>
                  )
                }):''
              }
                                               <Button onClick={()=>getStudent()} style={{margin:'15px'}}>Saqlash</Button>
              
                            </Col>
                                
                              
                            
                          
                            
                          )
                        })
                      }
                    </Row>
                    </Card>
                </Col>
                </Row>
            </Container>
            <Modal
          title="Sanani tanlang"
          visible={visible}
          width={400}
          footer={false}
        >
          <Form {...layout} form={form} name="control-hooks" onFinish={getDate}>
            <Form.Item name="date" label="Sanani kiriting" rules={[{ required: true }]}>
              <Input placeholder="24.08.2021"/>
            </Form.Item>  
            <Button type="primary" htmlType="submit">
          Saqlash
        </Button>
    </Form>
        </Modal>
    </div>
  )
}

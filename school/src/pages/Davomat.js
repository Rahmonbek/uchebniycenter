
import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { idT } from '../host/Host';
import { NeuTextInput } from "neumorphism-react";
import { getGroups,getStudents,createDavomat,editDavomat,getAttendance} from '../host/Config';
import { Card, Button,IconButton,Divider,Checkbox} from 'ui-neumorphism'
import {BiRefresh} from 'react-icons/bi'
export default function OqituvchiTable() {
const [date,setDate]=useState('')
 const getDate=(val)=>{
   console.log(val)
  setDate(val)
}
  const [groups,setGroups]=useState([])
  const [students,setStudents]=useState([])
  const [studentArray,setStudenarray]=useState([])
  const [numberGroup,getNumberGroup]=useState([1])
  const [number, setNumber]=useState(1)
  const getNumber=(id)=>{
    setNumber(id)
    setNumber(id)
    console.log(number)
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
   console.log()
  }
  const [edit,setEdit]=useState(null)
  const getStudent=()=>{
    var newObj={
      day:date,
      training_center:idT,
      group:number,
      students:studentArray
    }
        if (edit === null) {
          createDavomat(newObj).then(res => { console.log(res) }).catch(err => { console.log(err) })
        }
        else {
          editDavomat(newObj, edit).then(res => { console.log(res) }).catch(err => { console.log(err)})
        }

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
                        
                        
                                attendance.map((val,key5)=>{
                              return(
                                (number==val.group)?(
 <Col lg={2}  style={{paddingTop:'15px'}}>
              {/* <Button size='small'  color='#4CAF50'>{val.day}</Button> */}
              <NeuTextInput
              type="date"
    color="#E4EBF5"
    onChange={(newValue) => getDate(newValue)}
    width="123px"
    height="30px"
    distance={1}
    value={val.day}
    fontSize={12}
    fontColor="#4CAF50"
  />
               {
                 studentBygroup && Array.isArray(studentBygroup)?studentBygroup.map((item,key)=>{
                   return(
                     <div style={{marginBottom:'15px',marginTop:'10px'}}>
                       
                        {
                        
                              
                                 val.students.map(item3=>{
                                   return(
                                     
                                       (item.group==val.group)?<Checkbox checked={item.id==item3} onClick={()=>get(item)}  color='var(--success)' style={{display:'block'}}/>:''
                                     
                                   )
                                   })
                               
                 }  
          
                       
                     </div>
                   )
                 }):''
               }
                                                <IconButton rounded text={false} bgColor={'#E4EBF5'}  onClick={()=>getStudent()} style={{fontSize:'15px',marginTop:'10px',marginLeft:'5px',marginBottom:'5px'}}><BiRefresh style={{color:'#4CAF50'}}/></IconButton>
               
                             </Col>
                                ):''
                              )
                            })}
               <Col lg={2}  style={{paddingTop:'15px'}}>
               <NeuTextInput
              type="date"
    color="#E4EBF5"
    width="123px"
    height="30px"
    distance={1}
    placeholder="01.01.2021"
    fontSize={12}
    fontColor="#4CAF50"
    onChange={(newValue) => getDate(newValue)}
  />
               {
                 studentBygroup && Array.isArray(studentBygroup)?studentBygroup.map((item,key)=>{
                   return(
                     <div style={{marginBottom:'15px',marginTop:'10px'}}>
                                                          
                                       <Checkbox  onClick={()=>get(item)}  color='var(--success)' style={{display:'block'}}/>                   
                     </div>
                   )
                 }):''
               }
                                                <Button size='small' onClick={()=>getStudent()} style={{margin:'15px'}}>Saqlash</Button>
               
                             </Col>
                               
                                
                      
                    </Row>
                    </Card>
                </Col>
                </Row>
            </Container>
    </div>
  )
}

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
import {DatePicker} from 'antd'
export default function Davomat() {
  const [count, setCount] = useState(0);
    const today = new Date();
    const [groups,setGroups]=useState([])
    const [numberGroup,getNumberGroup]=useState(1)
    const [students,setStudents]=useState([])
    const [visible,setVisible]=useState(false)
    const [date, setDate]=useState('')
  const [datef, setDatef]=useState('')
const [id,setId]=useState(0)
const idGenerate=()=>{
   return (setId(id+1))

}
    const  showModal = () => {
       setVisible(true) 
    };
  
    const hideModal = () => {
      setVisible(false) 
    }
    const getDate=(cell)=>{
      console.log(cell)
      showModal()
    }
    const sanaGenerate=(cell, row, rowIndex, formatExtraData)=>{
      return(
        <div>
        <IconButton onClick={()=>getDate(cell)} rounded text={false} bgColor={'#E4EBF5'} style={{marginLeft:'10px'}}><MdDateRange/></IconButton>
        <IconButton onClick={()=> getColumn()} rounded text={false} bgColor={'#E4EBF5'} style={{marginLeft:'10px'}}><AiOutlinePlus/></IconButton>
        </div>
      )
    }
    const chengeDate=(date, dateString)=>{
      setDate(dateString)
      setDatef(date)
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
      dataField:'enrf',
      text: 'Sana',
      headerFormatter:sanaGenerate,
      formatter: (cellContent, row) => (
        <div className="checkbox disabled">
          <label>
            <input type="checkbox"  onClick={()=>console.log(row)}/*checked={ row.inStock }*//>
          </label>
        </div>
      ),
      classes: 'id-custom-cell',
      footer: "Jo'natish",
      formatExtraData: idGenerate,
      footerStyle:{
        width:'200px',
        backgroundColor:'#E4EBF5',
        margin:'20px',
        borderRadius: '50px',
        background: '#E4EBF5',
         boxShadow:  '5px 5px 10px #c2c8d0,-5px -5px 10px #ffffff',
         border:'none'
      }
    }])
    var column2=column
    const getColumn=()=>{
      var newColumn=[{
      dataField:'enrf',
      text: 'Sana',
      headerFormatter:sanaGenerate,
      formatExtraData: idGenerate,
      formatter: (cellContent, row) => (
        <div className="checkbox disabled">
          <label>
            <input type="checkbox"  onClick={()=>console.log(row)}/*checked={ row.inStock }*//>
          </label>
        </div>
      ),
      classes: 'id-custom-cell',
      footer: "Jo'natish",
      footerStyle:{
        width:'200px',
        backgroundColor:'#E4EBF5',
        margin:'20px',
        borderRadius: '50px',
        background: '#E4EBF5',
         boxShadow:  '5px 5px 10px #c2c8d0,-5px -5px 10px #ffffff',
         border:'none'
      }
      },]
      var column3=column2.concat(newColumn)     
      setColumn(column3)     
    }
    const getStudentS=()=>{
      getStudents().then(res=>{
        setStudents(res.data)
      }).catch(err=>{console.log(err)})
    }
    const getGroupS=()=>{
        getGroups().then(res=>{
          console.log(res.data)
          setGroups(res.data)
          
        }).catch(err=>{console.log(err)})
      }

    //   const onFinish=()=>{         
    //   let formData = new FormData();
      
    //   formData.append(
    //     "dat",
    //     date ?? ""
    //   );
    //   formData.append(
    //     "group",
    //   value.phone_number ?? ""
    //   ); 
    //   formData.append(
    //     "photo",
    //    image?? null
    //   );        
    //   formData.append(
    //     "text",
    //     value.text ?? "",
    //   );
    //   formData.append(
    //     "training_center",
    //   idT   
    //   );  
    //   if (edit === null) {
    //     createTeacher(formData).then(res => { getTrainingS() }).catch(err => { console.log(err) })
    //   }
    //   else {
    //     editTeacher(formData, edit).then(res => { getTrainingS() }).catch(err => { console.log(err)})
    //   }
    //   hideModal()
    // }
      useEffect(()=>{
       getGroupS()
       getStudentS()
       idGenerate()
      },[column])
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
                          style={{backgroundColor:'white'}}
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
        <DatePicker  value={datef} onChange={chengeDate}/>
        </Modal>
        </div>
        
    )
}

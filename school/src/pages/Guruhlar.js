import React, { useState, } from 'react'
import { Container, Col, Row,Image, OverlayTrigger,  Tooltip } from 'react-bootstrap';
import styles from '../css/news.module.css'
import { Button, Input, Select, Modal, Form, DatePicker, TimePicker,} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/modalStyle.css";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import style from '../css/courses.module.css';
import '../App.css'
import {createGroup} from '../host/Config'
import Aos from 'aos';
import 'aos/dist/aos.css';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ImageDemo from './ImageDemo';
import { idT } from '../host/Host';


const { TextArea } = Input;



export default function Guruhlar() {
  const[expanded, setExpanded]=useState([])
  const [justifyActive, setJustifyActive]=useState('tab1')
  const [teachers, setteachers]=useState([])
  const [son, setSon]=useState(0)
  const [edit, setEdit]=useState(null)
  const [category, setCategory]=useState([
    {
      id:'1',
      name:'Web dasturshlash'
  },
  {
      id:'2',
      name:'Android',
  },
  {
      id:'3',
      name:'SMM'
  },
  {
      id:'4',
      name:'subject'
  },
  {
      id:'5',
      name:'Grafik dizaynerlik'
  },
  {
      id:'6',
      name:'Bugalterlik'
  }
  ])
  const [subject, setsubject]=useState([
    {
      id:'1',
      name:'HTML'
  },
  {
      id:'2',
      name:'CSS',
  },
  {
      id:'3',
      name:'React'
  },
  {
      id:'4',
      name:'Ingliz tili'
  },
  {
      id:'5',
      name:'Python'
  },
  {
      id:'6',
      name:'Django'
  }
  ])
  const [previewVisible, setPreviewVisible]=useState(false)
  const [teacher, setteacher]=useState([
    {id:1,
      fullname:'Isdmoilov Rahmon'},
      {id:2,
          fullname:'Ismodilov Rahmon'},
          {id:3,
              fullname:'Ismoilov Radhmon'},
              {id:4,
                  fullname:'Ismodfilov Rahmon'},
                  {id:5,
                      fullname:'Ismoilov Rahmdon'},
                      {id:6,
                          fullname:'Idsmoilov Rahmon'},
                          {id:7,
                              fullname:'Ismoilov Rahmodn'}
  ])
  const [grlar, setGrlar]=useState([
    {
      id: 1,
      name: 'tower02',
      duration:3, 
      teacher: ["allakim"],
      category:['Web dasturlash', 'Android'],
      subject:['HTML', 'CSS', 'React'],
      image:'https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg',
      days: ['Dushanba', 'Seshanba', 'Payshanba'],
      vaqt: ["12:00.00","14:00.00"],
      date:"21-11-2020",
      money:500000,
      percent:[30],
      qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus kina",
  },
  {
      id: 2,
      name: 'tower02 ',
      duration: 3, 
      teacher: ["allakim",'teacher'],
      category:['Web dasturlash', 'Android'],
      subject:['HTML', 'CSS', 'React'],
      image:'https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg',
      days: ['Dushanba', 'Seshanba', 'Payshanba'],
      vaqt: ["12:00.00","15:00.00"],
      date:"21-11-2020",
      money: 500000,
      percent:[30, 20],
      qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus kina",
  },
  {
    id: 3,
    name: 'tower02',
    duration:3, 
    teacher: ["allakim"],
    category:['Web dasturlash', 'Android'],
    subject:['HTML', 'CSS', 'React'],
    image:'https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg',
    days: ['Dushanba', 'Seshanba', 'Payshanba'],
    vaqt: ["12:00.00","14:00.00"],
    date:"21-11-2020",
    money: 500000,
    percent:[30],
    qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus kina",
},
{
    id: 4,
    name: 'tower02 ',
    duration: 3, 
    teacher: ["allakim",'teacher'],
    category:['Web dasturlash', 'Android'],
    subject:['HTML', 'CSS', 'React'],
    image:'https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg',
    days: ['Dushanba', 'Seshanba', 'Payshanba'],
    vaqt: ["12:00.00","15:00.00"],
    date:"21-11-2020",
    money: 500000,
    percent:[30, 20],
    qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus kina",
}
  ])
  const [show, setShow]=useState(false)
  const [guruh, setGuruh]=useState({})
const [date, setDate]=useState('')
const [time, setTime]=useState('')
  const [form] = Form.useForm();

  const chengeDate=(date, dateString)=>{
    setDate(dateString)
    console.log(dateString)
  }
  const chengeTime=(date, dateString)=>{
    setTime(dateString)
    console.log(dateString)
  }
    
const handleCancel=()=>{
  setteachers([])
setEdit(null)
setDate('')
setTime('')
onReset()
  
  var g=document.querySelectorAll('#percent')

for(let i=0; i<g.length; i++){
g[i].value=""
// console.log(g[i].attributes.value.nodeValue)
}
setShow(false)
  
}
const onFinish=(value)=>{
  
  
var percent=[]
var g=document.querySelectorAll('#percent')

for(let i=0; i<g.length; i++){
percent[i]=g[i].value
// console.log(g[i].attributes.value.nodeValue)
}

console.log(percent)

var config={
    // id: grlar[grlar.length-1].id+1,
            name: value.name,
            duration:value.duration, 
            teacher: value.teacher,
            category:value.category,
            subject: value.subject,
            image:value.image,
            days: value.days,
            time: time,
            start_date: date,
            percent: percent,
            // qushimcha: value.qushimcha, 
            money: value.money,
            training_center:idT
           
           
            
            
  }
  
  createGroup(config).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
  handleCancel()
}
const handleExpandClick = (id) => {
var a= expanded
  a[id]=!a[id]
  setExpanded(a)
};

const onReset = () => {
  form.resetFields();
  setEdit(null)
};
const openModal = () => {
  setShow(true)
}
const teacherlar=(value)=>{
  setteachers(value)
}
  const { Option } = Select;
      
const editGuruh=(id)=>{
  // setGuruh(grlar[id])
form.setFieldsValue(grlar[id])
setDate(grlar[id].date)
setTime(grlar[id].vaqt)
setShow((prev)=>{return(true)})
setteachers([])
openModal()
  
}
  return (
    <div>
                      <input type="checkbox" id="modal" className={styles.smbox}/>
                <label for="modal" className="modal-background" ></label>
                <Container fluid><br/><br/>
                <Button onClick={()=>{openModal()}} type="primary">Gurux qo'shish</Button>
                  <Row>
                      {
                          grlar.map((item, key)=>{
                              return(<Col lg={4} md={6} sm={12} style={{marginTop:'20px'}}>
                                   <Card className={style.root}>
           <CardHeader 
             
             title={item.name}
             
             // subheader="01.08.2021"
           />
           <CardMedia
             className={style.media}
             image={item.image}
           //   title="Paella dish"
           />
           <CardContent>
             <Typography variant="body2" color="textSecondary" component="p">
             <p> <b>teacher: </b>{item.teacher.map((item1, key)=>{return(
               <p>{item1} - {item.percent[key]}%</p>
             )})}</p>
             <p> <b>Yo'nalishi: </b>{item.category.map(item1=>{return(item1+' ')})}</p>
             <p> <b>subject/Dasturlar: </b>{item.subject.map(item1=>{return(item1+' ')})}</p>
             <p> <b>Kurs puli (oylik): </b>{item.money} so'm</p>
             
              <p> <b>Boshlanish vaqti: </b>{item.date}</p>
             
              <p> <b>durationi: </b>{item.duration} oy</p>
              <p> <b>dayslari: </b>{item.days.map(item1=>{return(item1+' ')})}</p>
              <p> <b>Vaqti: </b>{item.vaqt.map(item=>{return(item +' - '+ item)})}</p>
              
             </Typography>
           </CardContent>
           <CardActions disableSpacing style={{display:'flex', justifyContent:'space-around'}}>
           <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>O'zgartirish</Tooltip>}
        >
          {({ ref, ...triggerHandler }) => (
            <Button
            onClick={()=>{editGuruh(key)}}
          
              variant="blue"
              {...triggerHandler}
              className="d-inline-flex align-items-center"
            >
              <Image
                ref={ref}
                
              />
             
             <IconButton >
               <BorderColorIcon />
             </IconButton> 
            </Button>
          )}
        </OverlayTrigger>
             
        <OverlayTrigger
          
          placement="bottom"
          overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>O'chirish</Tooltip>}
        >
          {({ ref, ...triggerHandler }) => (
            <Button
           
              variant="#f70707d9"
              {...triggerHandler}
              className="d-inline-flex align-items-center"
            >
              <Image
                ref={ref}
                
              />
             
             <IconButton >
               <DeleteIcon />
             </IconButton> 
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
                 [styles.expandOpen]: expanded[key],
               })}
               onClick={()=>{handleExpandClick(key)}}
               aria-expanded={expanded[key]}
               aria-label="show more"
               
             >
               <ExpandMoreIcon />
             </IconButton>
        
      </Button>
    )}
  </OverlayTrigger>
             
           </CardActions>
           <Collapse in={expanded[key]} timeout="auto" unmountOnExit>
             <CardContent>
             
               <Typography paragraph style={{fontSize:'16px'}}>
             {item.qushimcha}
            
               </Typography>
               
             
             </CardContent>
           </Collapse>
         </Card>
                              </Col>)
                          })
                      }
                  </Row>
                </Container>
                <Modal title="Guruh" width="70%" visible={show} footer={false} onCancel={handleCancel}>
                <Form
                form={form} 
      name="basic"
      id="formGuruh"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true, ...guruh}}
      onFinish={onFinish}
      
    >
        <Row>
            <Col lg={6} md={12} sm={12}>
            <Form.Item
            
        label="Guruhni nomini kiriting"
        name="name"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <Input placeholder="Guruhning nomini kiriting"/>
      </Form.Item>

      <Form.Item
label="Guruhning yo'nalishini tanlang"
name="category"
rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Select
             
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Yo'nalishni tanlang"
    
    optionLabelProp="label"
  >
       {
          category.map(item=>{
              return(<Option value={item.name}  label={item.name}><div className="demo-option-label-item">{item.name}</div></Option>)
          })
      }
     
  </Select>
</Form.Item>

<Form.Item
        label="Guruhda o'tiladigan subjectni/dasturlarni tanlang"
        name="subject"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Select 
        
  mode="multiple"
  style={{ width: '100%' }}
  placeholder="Yo'nalishni tanlang"
 
  optionLabelProp="label">
      {
          subject.map(item=>{
              return(<Option value={item.name}>{item.name}</Option>)
          })
      }
      
      
      
      </Select>
</Form.Item>
<Form.Item
    label="Guruhning o'qituvchisini tanlang"
    name="teacher"
    rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Select
        
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="O'qutuvchini tanlang"
    onChange={teacherlar}
    optionLabelProp="label"
>
       {
          teacher.map(item=>{
              return(<Option value={item.fullname}  label={item.fullname}><div className="demo-option-label-item">{item.fullname}</div></Option>)
          })
      }
     
  </Select>

</Form.Item>
<Form.Item
label="Guruhning kurs pulini kiriting (oylik to'lov so'mda)"
        name="money"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}>
          <Input type="number" min="0"/>
        </Form.Item>
<Row>
    <Col lg={6}>
    <Form.Item
        label="Ochilish sanasini kiriting"
       name="start_date"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <DatePicker onChange={chengeDate}
        />
      </Form.Item>


    </Col>
    <Col lg={6}>
    <Form.Item
        //
        label="Dars vaqtini kiriting"
        name="time"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <TimePicker.RangePicker  onChange={chengeTime}/>
      </Form.Item >


    </Col>
</Row>
      
            </Col>
<Col lg={6} sm={12} md={12}>
<Row>
    <Col lg={5}>
    <Form.Item
        label="Dars nechchi oy davom etishini kiriting"
        name="duration"
        
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <Input type="number" min="0"/>
      </Form.Item>

    
    </Col>
    <Col lg={7}>
    <Form.Item
        label="Haftani qaysi dayslari dars bo'lishini kiriting"
        name="days"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Select
         
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Hafta dayslarini tanglang"
    
    optionLabelProp="label"
  >
       <Option value="Dushanba"  label="Dushanba"><div className="demo-option-label-item">Dushanba</div></Option>
       <Option value="Seshanba"  label="Seshanba"><div className="demo-option-label-item">Seshanba</div></Option>
       <Option value="Chorshanba"  label="Chorshanba"><div className="demo-option-label-item">Chorshanba</div></Option>
       <Option value="Payshanba"  label="Payshanba"><div className="demo-option-label-item">Payshanba</div></Option>
       <Option value="Juma"  label="Juma"><div className="demo-option-label-item">Juma</div></Option>
       <Option value="Shanba"  label="Shanba"><div className="demo-option-label-item">Shanba</div></Option>
       <Option value="Yakshanba"  label="Yakshanba"><div className="demo-option-label-item">Yakshanba</div></Option>
     
  </Select>

</Form.Item>

    </Col>
    </Row>      
    <Form.Item         
        label="Guruh uchun qo'shimcha ma'lumot kiriting"
        name="image"
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
        <Input type="file" required={true} style={{marginBottom:'20px'}}/>
        {ImageDemo(guruh.image)}
</Form.Item>
    <Form.Item         
        label="Guruh uchun qo'shimcha ma'lumot kiriting"
        name="qushimcha"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<TextArea  rows={10} cols={60}/>
</Form.Item>  
{ teachers.map((item5, key)=>{
    return(
      <>
        <p>{item5}ga beriladigan summa percent miqdorda</p>
        <Input id="percent" defaultValue={()=>{return (guruh.percent[key]==undefined)? 0: guruh.percent[key]}} placeholder="100%" name={item5+key} min="0" max="100" type="number"/>
        <br/>
      </>
    )
  }) 
}
</Col>
        </Row>

      <Form.Item>
      <Button type="danger" onClick={handleCancel} htmlType="button">
          Bekor qilish
        </Button>

      <Button type="primary" htmlType="submit">
          Saqlash
      </Button>
      </Form.Item>
      </Form>
      </Modal>
    </div>
  )
}

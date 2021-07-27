import React, { useState, useForm, useEffect } from 'react'
import { Container, Col, Row,Image, OverlayTrigger,  Tooltip } from 'react-bootstrap';
import styles from '../css/news.module.css'
import { Button, Input, Select, Table, Modal, Form, DatePicker, TimePicker, InputNumber, Upload, message } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import "../css/modalStyle.css";
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';  
import style from '../css/courses.module.css';
import '../App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
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
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import BorderColorIcon from '@material-ui/icons/BorderColor';


const { TextArea } = Input;



export default function Guruhlar() {
  const[expanded, setExpanded]=useState([])
  const [justifyActive, setJustifyActive]=useState('tab1')
  const [mentors, setMentors]=useState([])
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
      name:'Fanlar'
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
  const [fanlar, setFanlar]=useState([
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
  const [mentor, setMentor]=useState([
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
  const [date, setDate]=useState('')
  const [grlar, setGrlar]=useState([
    {
      id: 1,
      name: 'tower02',
     muddat:'3', 
      mentor: ["allakim"],
      yonalish:['Web dasturlash', 'Android'],
      fanlar:['HTML', 'CSS', 'React'],
      image:'https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg',
      kun: ['Dushanba', 'Seshanba', 'Payshanba'],
      vaqt: "12:00.00-14:00.00",
      date:"21-11-2020",
      tolov:"500000",
      foiz:["30"],
      qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus kina",
  },
  {
      id: 2,
      name: 'tower02 ',
     muddat:'3', 
      mentor: ["allakim",'Mentor'],
      yonalish:['Web dasturlash', 'Android'],
      fanlar:['HTML', 'CSS', 'React'],
      image:'https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg',
      kun: ['Dushanba', 'Seshanba', 'Payshanba'],
      vaqt: "12:00.00-15:00.00",
      date:"21-11-2020",
      tolov:"500000",
      foiz:["30", '20'],
      qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus kina",
  },
  {
    id: 3,
    name: 'tower02',
   muddat:'3', 
    mentor: ["allakim"],
    yonalish:['Web dasturlash', 'Android'],
    fanlar:['HTML', 'CSS', 'React'],
    image:'https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg',
    kun: ['Dushanba', 'Seshanba', 'Payshanba'],
    vaqt: "12:00.00-14:00.00",
    date:"21-11-2020",
    tolov:"500000",
    foiz:["30"],
    qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus kina",
},
{
    id: 4,
    name: 'tower02 ',
   muddat:'3', 
    mentor: ["allakim",'Mentor'],
    yonalish:['Web dasturlash', 'Android'],
    fanlar:['HTML', 'CSS', 'React'],
    image:'https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg',
    kun: ['Dushanba', 'Seshanba', 'Payshanba'],
    vaqt: "12:00.00-15:00.00",
    date:"21-11-2020",
    tolov:"500000",
    foiz:["30", '20'],
    qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus Lorem ipsum doler amet ui oxar darbi qorfus kina",
}
  ])
  const [show, setShow]=useState(false)
  const [guruh, setGuruh]=useState({})

  const [form] = Form.useForm();
const editGuruh=(id)=>{
//  setGuruh({...grlar[id]})
 
 onReset()

  form.setFieldsValue(grlar[id])
  setEdit(id)
  setShow(true)
 
  console.log(form.getFieldValue())
}


const handleCancel=()=>{
  setShow(false)
  onReset()
  var g=document.querySelectorAll('#foiz')

for(let i=0; i<g.length; i++){
g[i].value=""
// console.log(g[i].attributes.value.nodeValue)
}
}
const onFinish=(value)=>{
// var date=value.date._d.toLocaleDateString()
// var time=value.vaqt[0]._d.toLocaleTimeString()+ ' - '+value.vaqt[1]._d.toLocaleTimeString()
var foiz=[]
var g=document.querySelectorAll('#foiz')

for(let i=0; i<g.length; i++){
foiz[i]=g[i].value
// console.log(g[i].attributes.value.nodeValue)
}

console.log(foiz)

var config={
    id: grlar[grlar.length-1].id+1,
            name: value.name,
           muddat:value.muddat, 
            mentor: value.mentor,
            yonalish:value.yonalish,
            fanlar:value.fanlar,
            image:"https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg",
            kun: value.kun,
            // vaqt: time,
            // date:date,
            foiz:foiz,
            qushimcha: value.qushimcha, 
            tolov:value.tolov
  }
  var guruhlar=grlar
  guruhlar.push(config)
  setGrlar(guruhlar)
  console.log(grlar)
handleCancel()
}
const handleExpandClick = (id) => {
var a= expanded
  a[id]=!a[id]
  setExpanded(a)
};

const handleJustifyClick = (value) => {
if (value === justifyActive) {
  return;
}
  setJustifyActive(value)
};
const onReset = () => {
  form.resetFields();
  setEdit(null)
};
const mentorlar=(value)=>{
  setMentors(value)
}
  const { Option } = Select;
        const uploadButton = (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          );
      
        const columns = [
            {
                title: '#',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Gurux nomi',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Mentor',
                dataIndex: 'mentor',
                key: 'mentor',
            },
            {
                title: "O'quv yo'nalishi",
                dataIndex: 'soha',
                key: 'soha',
            },
            {
                title: "Dars kun(lar)i",
                dataIndex: 'kun',
                key: 'kun',
            },
            {
                title: "Dars vaqti",
                dataIndex: 'vaqt',
                key: 'vaqt',
            },
            {
                title: "Qo'shimcha",
                dataIndex: "qushimcha",
                key: "qushimcha",
            },
            {
                title: "O'zgartirish",
                dataIndex: "id",
                key: 'operation',
                render: (id) => <Button type="primary" onClick={() => { this.editRow(id) }}>O'zgartirish</Button>,
            },
        ];
  return (
    <div>
                      <input type="checkbox" id="modal" className={styles.smbox}/>
                <label for="modal" className="modal-background" ></label>
                <Container fluid><br/><br/>
                <Button onClick={()=>{setShow(true)}} type="primary">Gurux qo'shish</Button>
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
             <p> <b>Mentor: </b>{item.mentor.map((item1, key)=>{return(
               <p>{item1} - {item.foiz[key]}%</p>
             )})}</p>
             <p> <b>Yo'nalishi: </b>{item.yonalish.map(item1=>{return(item1+' ')})}</p>
             <p> <b>Fanlar/Dasturlar: </b>{item.fanlar.map(item1=>{return(item1+' ')})}</p>
             <p> <b>Kurs puli (oylik): </b>{item.tolov} so'm</p>
             
              <p> <b>Boshlanish vaqti: </b>{item.date}</p>
             
              <p> <b>Muddati: </b>{item.muddat} oy</p>
              <p> <b>Kunlari: </b>{item.kun.map(item1=>{return(item1+' ')})}</p>
              <p> <b>Vaqti: </b>{item.vaqt}</p>
              
             </Typography>
           </CardContent>
           <CardActions disableSpacing style={{display:'flex', justifyContent:'space-around'}}>
           <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="button-tooltip-2"    style={{marginTop:'15px'}}>O'zgartirish</Tooltip>}
        >
          {({ ref, ...triggerHandler }) => (
            <Button
            onClick={()=>{editGuruh(key); 
            setShow(true)}}
          
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
      initialValues={{ remember: true, guruh }}
      onFinish={onFinish}
      
    >
        <Row>
            <Col lg={6} md={12} sm={12}>
            <Form.Item
            
        label="Guruhni nomini kiriting"
        name="name"
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <Input initialValue={guruh.name} placeholder="Guruhning nomini kiriting"/>
      </Form.Item>

      <Form.Item
      initialValue={guruh.yonalish}         
label="Guruhning yo'nalishini tanlang"
        name="yonalish"
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}
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
initialValue={guruh.fanlar}         
label="Guruhda o'tiladigan fanlarni/dasturlarni tanlang"
        name="fanlar"
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Select 
 mode="multiple"
 style={{ width: '100%' }}
 placeholder="Yo'nalishni tanlang"
 
 optionLabelProp="label">
      {
          fanlar.map(item=>{
              return(<Option value={item.name}>{item.name}</Option>)
          })
      }
      
      
      
      </Select>
</Form.Item>
<Form.Item
initialValue={guruh.mentor}         
label="Guruhning o'qituvchisini tanlang"
        name="mentor"
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="O'qutuvchini tanlang"
    onChange={mentorlar}
        optionLabelProp="label"
  >
       {
          mentor.map(item=>{
              return(<Option value={item.fullname}  label={item.fullname}><div className="demo-option-label-item">{item.fullname}</div></Option>)
          })
      }
     
  </Select>

</Form.Item>
<Form.Item
initialValue={guruh.tolov}
label="Guruhning kurs pulini kiriting (oylik to'lov so'mda)"
        name="tolov"
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}>
          <Input type="number" min="0"/>
        </Form.Item>
<Row>
    {/* <Col lg={6}>
    <Form.Item
    initialValue={guruh.date}
        label="Ochilish sanasini kiriting"
        name="date"
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <DatePicker />
      </Form.Item>


    </Col>
    <Col lg={6}>
    <Form.Item
    initialValue={guruh.vaqt}
        label="Dars vaqtini kiriting"
        name="vaqt"
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <TimePicker.RangePicker />
      </Form.Item>


    </Col> */}
</Row>
      
            </Col>
<Col lg={6} sm={12} md={12}>
<Row>
    <Col lg={5}>
    <Form.Item
    initialValue={guruh.muddat}
        label="Dars nechchi oy davom etishini kiriting"
        name="muddat"
        
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <InputNumber min="0"/>
      </Form.Item>

    
    </Col>
    <Col lg={7}>
    <Form.Item
    initialValue={guruh.kun}         
label="Haftani qaysi kunlari dars bo'lishini kiriting"
        name="kun"
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Hafta kunlarini tanglang"
    
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
    initialValue={guruh.image}         
label="Guruh uchun qo'shimcha ma'lumot kiriting"
        name="image"
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Input type="file"/>
</Form.Item>
    <Form.Item
    initialValue={guruh.qushimcha}         
label="Guruh uchun qo'shimcha ma'lumot kiriting"
        name="qushimcha"
        rules={[{ required: false, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<TextArea rows={10} cols={60}/>
</Form.Item>
{
  mentors.map((item5, key)=>{
    return(
      <>
  <p>{item5}ga beriladigan summa foiz miqdorda</p>
<Input id="foiz" placeholder="100%" name={item5+key} min="0" max="100" type="number"/>
<br/>
</>
)
  })
}
</Col>
        </Row>

      <Form.Item
      initialValue={guruh.qilis}>
      <Button type="danger" onClick={handleCancel} htmlType="button">
Bekor qilish
        </Button>
        

      <Button type="primary" htmlType="submit">
          
          Saqlash
       
     </Button>
      </Form.Item>

    </Form>
{/* {document.getElementById('formGuruh').reset()} */}
      </Modal>

    </div>
  )
}

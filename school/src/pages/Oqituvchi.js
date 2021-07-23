import React,{useState} from 'react'
import { Modal, Button, Cascader, DatePicker, Upload } from 'antd';
import styles from '../css/davomat.module.css'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {BsPersonPlusFill} from 'react-icons/bs'
import { Form, Input, Select } from 'antd';
import {AiFillEdit,AiOutlineDelete} from 'react-icons/ai'
import {Table} from 'react-bootstrap'
import moment from 'moment';
import rasm1 from '../img/frontend.jpg'
export default function Oqituvchiqoshish() {
    const [edit,setEdit]=useState(null)
    const [oqituvchi,setOqituvchi]=useState([
        {
            name:'Abdulbosit Xayitov',
            tugilgansana:'2021-06-30',
            telefon:'+87647568775',
            email:'xayitov@gmail.com',
            rasm: <img style={{width:'200px'}} src={rasm1}/>,
            yonalish:'front-end developer',
            texnologiyalar:['html','css','bootstrap','js','ajax','react','redux','android'],
            malumot:'bhgberu hgbuhurh uyhvyuvbyuhyu hguyh2uqhf2 yh2u3gh2uyhg yuhgyuhryurfhfyqfb quyfhqyugbq hbqhybfhqbf',
            ishsana:"2021-06-30" 
            
        }
    ])
    const dateFormat = 'YYYY/MM/DD'
    const [visible,setVisible]=useState(false)
    const showModal = () => {
        setVisible(true)
    }
    const  hideModal = () => {
        onReset()
        setVisible(false)
     }
     const { Option } = Select;
     const layout = {
       labelCol: {
           span: 8,
       },
       wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
wrapperCol: {
    offset: 8,
    span: 16,
},
} 
const [form] = Form.useForm();
const [gender,setGender]=useState([])
const onGenderChange = (value) => {
  setGender([])
  setGender(value)
};
const [data,setDate]=useState([])
const [data1,setDate1]=useState([])
  const onFinish = (values) => {
      console.log(values)
      var newoquvchi = {
          name:values.name,
          tugilgansana:data1,
          telefon:values.telefon,  
          email:values.email,  
        //   rasm:values.rasm,  
          yonalish:values.yonalish,
          texnologiyalar:values.texnologiyalar,
          malumot:values.malumot,
          ishsana:data
      }
      console.log(newoquvchi)
      var newoqituvchilar=oqituvchi
      if(edit===null){
          newoqituvchilar.push(newoquvchi)
      setOqituvchi(newoqituvchilar)
      }else{
          newoqituvchilar[edit]=newoquvchi
          setEdit(null)
      }
      hideModal()
      onReset()
  }
  const dates=(date,dateString)=>{
      setDate(dateString)
      console.log(data)
  }
  const dates1=(date,dateString)=>{
    setDate1(dateString)
    console.log(data1)
}
  const onReset = () => {
      form.resetFields();
      setEdit(null)
  };

  const onFill = (id) => { 
      var newoqituvchilar=oqituvchi[id]
      console.log(newoqituvchilar)
      form.setFieldsValue({
        name:newoqituvchilar.name,
        tugilgansana:newoqituvchilar.tugilgansana,
        telefon:newoqituvchilar.telefon,  
        email:newoqituvchilar.email,  
      //   rasm:newoqituvchilar.rasm,  
        yonalish:newoqituvchilar.yonalish,
        texnologiyalar:newoqituvchilar.texnologiyalar,
        malumot:newoqituvchilar.malumot,
        ishsana:newoqituvchilar.ishsana
      });
      console.log(id)
      setEdit(id)
      showModal()
  };
const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };
  const children = [];

        children.push(<Option key='html'>html</Option>);
        children.push(<Option key='css'>css</Option>);
        children.push(<Option key='bootstrap'>bootstrap</Option>);
        children.push(<Option key='js'>js</Option>);
        children.push(<Option key='ajax'>ajax</Option>);
        children.push(<Option key='react'>react</Option>);
        children.push(<Option key='redux'>redux</Option>);
return (
    <div  style={{padding:'5%'}}>
            <div>
            <Button onClick={showModal}>O'qituvchi qo'shish <BsPersonPlusFill style={{color:'#3F6AD8',marginLeft:'10px',marginTop:'-5px',cursor:'pointer'}}/></Button>
            </div>
            <div style={{padding:'10px'}} className={styles.backgroundTable}>
            <h5>O'qituvchilar ro'yxati</h5>
            <Table responsive style={{marginTop:'20px'}} style={{color:'rgba(0,0,0,0.7)'}}>
                        <thead>
                            <tr>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>#</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>F.I.O</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Tug'ilgan sana</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Telefon</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>E-mail</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Rasm</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Yo'nalish</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Texnologiyalar</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Ma'lumot</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Sana</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>O'zgartirish/O'chirish</th>
                            </tr>
                        </thead>
                        {
                          oqituvchi && Array.isArray(oqituvchi)? oqituvchi.map((item,key)=>{
                              return(
                                <tbody>
                                <tr>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{key+1}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.name}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.tugilgansana}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.telefon}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.email}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.rasm}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.yonalish}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{
                                item.texnologiyalar && Array.isArray(item.texnologiyalar)?item.texnologiyalar.map(item=>{
                                   return(
                                       <ul>
                                           <li>{item}</li>
                                       </ul>
                                   )
                                }):''
                                
                                } 
                                </td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>
                                    <p style={{width:'250px'}}>{item.malumot}</p>
                                </td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.ishsana}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8'}}><AiFillEdit onClick={()=> onFill(`${key}`)} style={{fontSize:'16px',color:'green',marginLeft:'5px',marginTop:'-5px'}}/> <AiOutlineDelete style={{fontSize:'16px',color:'red',marginLeft:'5px',marginTop:'-5px'}}/> </td>
                                </tr>
                            </tbody>
                              )
                          }):''
                        }
                        </Table>
            </div>
            <Modal
             width={700}
             footer={false}
             title="O'qituvchi qo'shish"
             visible={visible}
             onOk={hideModal}
             onCancel={hideModal}
           >
             <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
         <Form.Item
           name="name"
           label="F.I.O"
           rules={[
             { 

               required: true,
             },
           ]}
         >
           <Input />
         </Form.Item>
         <Form.Item  name="bfhbf" label="Tug'ilgan sana:">
        <DatePicker type="object" name="tugilgansana"/>
      </Form.Item>
         <Form.Item
           name="telefon"
           label="Telefon raqami:"
           rules={[
             {
               required: true,
             },
           ]}
         >
           <Input />
         </Form.Item>
         <Form.Item
           name="email"
           label="E-mail"
           rules={[
             {
               required: true,
             },
           ]}
         >
           <Input />
         </Form.Item>
         <Form.Item
        name="rasm"
        label="Rasm"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Rasm jo'natish</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name="yonalish"
        label="Yo'nalishni tanlang"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          onChange={onGenderChange}
          allowClear
        >
          <Option value="Front-end">Front-end</Option>
          <Option value="Backend (Python+Jango)">Backend (Python+Jango)</Option>
          <Option value="Unity">Unity</Option>
        </Select>
      </Form.Item>
      <Form.Item name="texnologiyalar" label="Texnologiyalar:" rules={[{ required: true }]}>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Iltimos tanlang!"
                            >
                                {children}
                            </Select>
                        </Form.Item>
                        <Form.Item name="malumot"
                        label="Ma'lumot kiriting:"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input.TextArea rows="3" placeholder="Qo'shimcha ma'lumot..." />
                        </Form.Item>
         <Form.Item className={edit===null?'':styles.date2}  label="Ish boshlagan sana:">
         <DatePicker name="ishsana"   onChange={dates} placeholder="Sanani tanlang"/>
       </Form.Item>
         <Form.Item {...tailLayout}>
           <Button type="primary" htmlType="submit">
           Saqlamoq
           </Button>
           <Button htmlType="button" onClick={onReset}>
           O'chirmoq
           </Button>
         </Form.Item>
       </Form>
           </Modal>
           </div>
       )
   }
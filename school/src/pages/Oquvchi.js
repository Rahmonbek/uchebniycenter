import React,{useState} from 'react'
import { Modal, Button, Cascader, DatePicker } from 'antd';
import styles from '../css/davomat.module.css'
import {BsPersonPlusFill} from 'react-icons/bs'
import { Form, Input, Select } from 'antd';
import {AiFillEdit,AiOutlineDelete} from 'react-icons/ai'
import {Table} from 'react-bootstrap'
import moment from 'moment';
export default function Oqituvchiqoshish() {
    const [edit,setEdit]=useState(null)
    const [oqituvchi,setOqituvchi]=useState([
        {
            name:'Abdulbosit Xayitov',
            telefon:'+87647568775',
            telefon2:'+8743568775',
            kurslar:["python", "1-py"],
            sana:"2021-07-08"
            
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
  const onFinish = (values) => {
      console.log(values)
      var newoquvchi = {
          name:values.name,
          telefon:values.telefon,  
          telefon2:values.telefon2,  
          kurslar:values.kurslar,
          sana:data
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
  const onReset = () => {
      form.resetFields();
      setEdit(null)
  };

  const onFill = (id) => {
  
      var newoqituvchilar=oqituvchi[id]
      console.log(newoqituvchilar)
      form.setFieldsValue({
          name:newoqituvchilar.name,
          telefon:newoqituvchilar.telefon,  
          telefon2:newoqituvchilar.telefon2,  
          kurslar:newoqituvchilar.kurslar,
          sana:newoqituvchilar.sana
      });
      console.log(id)
      setEdit(id)
      showModal()
  };
const kurslar1 = [
  {
    value: 'python',
    label: 'Python',
    children: [
      {
        value: '1-py',
        label: '1-py',
      },
      {
          value: '2-py',
          label: '2-py',
        },
        {
          value: '3-py',
          label: '3-py',
        },
    ],
  },
  { value: 'frontEnd',
  label: 'Front-end',
  children: [
    {
      value: '1-fr',
      label: '1-fr',
    },
    {
        value: '2-fr',
        label: '2-fr',
      },
  ],
},
];
return (
    <div  style={{padding:'5%'}}>
            <div>
            <Button onClick={showModal}>O'quvchi qo'shish <BsPersonPlusFill style={{color:'#3F6AD8',marginLeft:'10px',marginTop:'-5px',cursor:'pointer'}}/></Button>
            </div>
            <div style={{padding:'10px'}} className={styles.backgroundTable}>
            <h5>O'quvchilar ro'yxati</h5>
            <Table style={{marginTop:'20px'}} style={{color:'rgba(0,0,0,0.7)'}}>
                        <thead>
                            <tr>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>#</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>F.I.O</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Telefon</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Qo'shimcha telefon</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Kurs/guruh</th>
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
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.telefon}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.telefon2}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>
                                   {
                                      item.kurslar && Array.isArray(item.kurslar)? item.kurslar.map((item,key)=>{
                                           return(
                                               <ul>
                                                   <li>{item}</li>
                                               </ul>
                                           )
                                       }):''
                                   } 
                                </td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.sana}</td>
                                {/* <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.sana}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.oy}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.summa} */}
                            
                            
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
             title="O'quvchi qo'shish"
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
           name="telefon2"
           label="Qo'shimcha telefon raqami:"
           rules={[
             {
               required: true,
             },
           ]}
         >
           <Input />
         </Form.Item>
         <Form.Item
           name="kurslar"
           label="Kurs/guruh"
           rules={[
             {
               type: 'array',
               required: true,
               message: 'Kurs/guruhni tanlang!',
             },
           ]}
         >
           <Cascader options={kurslar1} placeholder="Kurs/guruhni tanlang"/>
         </Form.Item>
         <Form.Item className={edit===null?'':styles.date2} name="sanas"   label="Qabul qilingan sana:">
         <DatePicker  id="sana" onChange={dates} placeholder="Sanani tanlang"/>
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
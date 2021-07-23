import React,{useState,useEffect} from 'react'
import { Modal, Button, Cascader, DatePicker } from 'antd';
import styles from '../css/davomat.module.css'
import {Container,Row,Col} from 'react-bootstrap'
import {BsPersonPlusFill} from 'react-icons/bs'
import { Form, Input, Select } from 'antd';
import {FiPieChart,FiCheckCircle} from 'react-icons/fi'
import {FcPlus} from 'react-icons/fc'
import {AiFillEdit,AiOutlineDelete} from 'react-icons/ai'
import {Table} from 'react-bootstrap'

export default function Tolov() {
    const [guruhlar,setGuruhlar]=useState(
        [
            {
                guruh:'1-FR',
                oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva'],
                oy:['1-oy','2-oy','3-oy','4-oy','5-oy'],
            },
            {
                guruh:'2-FR',
                oquvchilar:['malikov hayotjona','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva'],
                oy:['1-oy','2-oy','3-oy','4-oy']

            },
            {
                guruh:'3-FR',
                oquvchilar:['malikov','hayatov',,'axmedova','qarshiyeva','yusupova','mirzayeva'],
                oy:['1-oy','2-oy','3-oy','4-oy']

            },
            {
                guruh:'4-FR',
                oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva'],
                oy:['1-oy','2-oy','3-oy']

            },
            {
                guruh:'5-FR',
                oquvchilar:['malikov','hayatov umid','axmedova','qarshiyeva','yusupova','mirzayeva'],
                oy:['1-oy','2-oy','3-oy','4-oy','5-oy']

            },
            {
                guruh:'6-FR',
                oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva'],
                oy:['1-oy','2-oy','3-oy','4-oy']

            },
        ]
    )
        const [python,setPyton]=useState(
            [
                {
                    guruh:'1-PY',
                    oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
                },
                {
                    guruh:'2-PY',
                    oquvchilar:['malikov hayotjona','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
                },
                {
                    guruh:'3-PY',
                    oquvchilar:['malikov','hayatov',,'axmedova','qarshiyeva','yusupova','mirzayeva']
                },
                {
                    guruh:'4-PY',
                    oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
                },
                {
                    guruh:'5-PY',
                    oquvchilar:['malikov','hayatov umid','axmedova','qarshiyeva','yusupova','mirzayeva']
                },
                {
                    guruh:'6-PY',
                    oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
                }
            ]
        )
    
        const [unit,setUnit]=useState(
            [
                {
                    guruh:'1-Un',
                    oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
                },
                {
                    guruh:'2-Un',
                    oquvchilar:['malikov hayotjona','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
                },
                {
                    guruh:'3-Un',
                    oquvchilar:['malikov','hayatov',,'axmedova','qarshiyeva','yusupova','mirzayeva']
                },
                {
                    guruh:'4-Un',
                    oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
                },
                {
                    guruh:'5-Un',
                    oquvchilar:['malikov','hayatov umid','axmedova','qarshiyeva','yusupova','mirzayeva']
                },
                {
                    guruh:'6-Un',
                    oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
                }
            ]
        )
    const kurslar1 = [
        {
          value: 'python',
          label: 'Python',
          children: [
            {
              value: '1-py',
              label: '1-py',
              children:[
                  {
                      value:'Malikov',
                      label:'Malikov'
                  },
                  {
                    value:'Malikov hayot',
                    label:'Malikov'
                },
                {
                    value:'Malikov umid',
                    label:'Malikov umid'
                }
              ]
            },
            {
                value: '2-py',
                label: '2-py',
                children:[
                    {
                        value:'Malikova lobar',
                        label:'Malikova lobar'
                    },
                    {
                      value:'abrorov shaxzod',
                      label:'abrorov shaxzod'
                  },
                  {
                      value:'Malikov umid',
                      label:'Malikov umid'
                  }
                ]
              },
              {
                value: '3-py',
                label: '3-py',
              },
          ],
        },
        { value: 'Front-end',
        label: 'Front-end',
        children: [
          {
            value: '1-fr',
            label: '1-fr',
            children:[
                {
                    value:'Malikova lobar',
                    label:'Malikova lobar'
                },
                {
                  value:'abrorov shaxzod',
                  label:'abrorov shaxzod'
              },
              {
                  value:'Malikov umid',
                  label:'Malikov umid'
              }
            ]
            
          },
          {
              value: '2-fr',
              label: '2-fr',
            },
        ],
      },
      ];
      const onFill = (id) => {
  
        var newoqituvchilar=tolov[id]
        console.log(newoqituvchilar)
        form.setFieldsValue({
            kurslar:newoqituvchilar.name, 
            summa:newoqituvchilar.summa,
            sana:newoqituvchilar.sana
        });
        console.log(id)
        setEdit(id)
        showModal()
    };
    const onFinish = (values) => {
        console.log(values)
        var newoquvchi = {
            name:values.kurslar,
            summa:values.summa,
            sana:data
        }
        console.log(newoquvchi)
        var newoqituvchilar=tolov
        if(edit===null){
            newoqituvchilar.push(newoquvchi)
        setTolov(newoqituvchilar)
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
    const [edit,setEdit]=useState(null)
    const [tolov,setTolov]=useState([
        {
            name:['Front-end','1-fr','Malikova lobar'],
            summa:'350000',
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
const [oylar,setOy]=useState('0')
const [data,setDate]=useState([])  
const [datas,setDatas]=useState([])
const takeOy=()=>{
     setDatas([])
     setDatas(guruhlar[oylar].oy)
 }
 useEffect(()=>{
     takeOy()
 },[oylar])
    return (
        <div style={{padding:'5%'}}>
              <div style={{marginBottom:'20px'}}>
            <Button onClick={showModal}>To'lov <FcPlus style={{color:'#3F6AD8',marginLeft:'10px',marginTop:'-5px',cursor:'pointer'}}/></Button>
            </div>
            <div style={{padding:'10px',marginBottom:'20px'}} className={styles.backgroundTable}>
            <h5>Oxirgi to'lov qilganlar ro'yxati</h5>
            <Table style={{marginTop:'20px'}} style={{color:'rgba(0,0,0,0.7)'}}>
                        <thead>
                            <tr>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>#</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>F.I.O</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Kurs</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Guruh</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Summa</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>Sana</th>
                            <th style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>O'zgartirish/O'chirish</th>
                            </tr>
                        </thead>
                        {
                          tolov && Array.isArray(tolov)? tolov.map((item,key)=>{
                              return(
                                <tbody>
                                <tr>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{key+1}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.name[2]}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.name[0]}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.name[1]}</td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.summa}
                                {
                                     (item.summa<350000)?<FiPieChart style={{fontSize:'16px',color:'red',marginLeft:'5px',marginTop:'-5px'}}/>:<FiCheckCircle style={{fontSize:'16px',color:'green',marginLeft:'5px',marginTop:'-5px'}}/>
                                }
                                </td>
                                <td style={{borderBottom:' 1px solid #3F6AD8',padding:'10px'}}>{item.sana}</td>                          
                                <td style={{borderBottom:' 1px solid #3F6AD8'}}><AiFillEdit onClick={()=> onFill(`${key}`)} style={{fontSize:'16px',color:'green',marginLeft:'5px',marginTop:'-5px'}}/> <AiOutlineDelete style={{fontSize:'16px',color:'red',marginLeft:'5px',marginTop:'-5px'}}/> </td>
                                </tr>
                            </tbody>
                              )
                          }):''
                        }
                        </Table>
            </div>
            <Container>
                <Row>
                <Col lg={4} md={6} sm={12} className={styles.card1}>
                        <h1>Front-end guruhlari</h1>
                        <Row>
                            
                                {
                                    guruhlar.map((item,key)=>{
                                        return(
                                            <Col lg={2} style={{padding:'0'}} onClick={()=>{setOy(`${key}`)} } className={styles.gr}>{item.guruh}</Col>
                                        )
                                    })
                                }
                            
                        </Row>
                    </Col>
                    <Col lg={4} md={6} sm={12} className={styles.card2}>
                        <h1>Python+Jango guruhlari</h1>
                        <Row>
                            
                                {
                                    python.map((item,key)=>{
                                        return(
                                            <Col lg={2} style={{padding:'0'}} className={styles.gr2}>{item.guruh}</Col>
                                        )
                                    })
                                }
                            
                        </Row>
                    </Col>
                    <Col lg={4} md={6} sm={12} className={styles.card3}>
                        <h1>Mobile Unity guruhlari</h1>
                        <Row>
                            
                                {
                                    unit.map((item,key)=>{
                                        return(
                                            <Col lg={2} style={{padding:'0'}} className={styles.gr3}>{item.guruh}</Col>
                                        )
                                    })
                                }
                            
                        </Row>
                    </Col>
                    <Col lg={12} style={{marginTop:'20px',padding:'10px',paddingLeft:'20px'}} className={styles.card1}>
                        <Row>
                            {
                                datas.map(item=>{
                                    return(
                                        <Col lg={2} style={{padding:'0',color:'black'}} className={styles.gr}>{item}</Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
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
           name="kurslar"
           label="Kurs/guruh/F.I.O"
           rules={[
             {
               type: 'array',
               required: true,
               message: 'Kurs/guruh/F.I.O tanlang!',
             },
           ]}
         >
           <Cascader options={kurslar1} placeholder="Kurs/guruh/F.I.O tanlang"/>
         </Form.Item>
         <Form.Item
          name="summa"
          label="Summa"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Summani kiriting"/>
          </Form.Item>
         <Form.Item className={edit===null?'':styles.date2} name="sanas"   label="To'langan sana:">
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

import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Button,Table} from 'react-bootstrap'
import styles from '../css/davomat.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal,Form} from 'antd';
import { Select,Input} from 'antd';
import {BsPersonPlusFill} from 'react-icons/bs'
import MUIDataTable from "mui-datatables";
import { DatePicker, Space } from 'antd';
import {FcPlus} from 'react-icons/fc'
import {FiPieChart,FiCheckCircle} from 'react-icons/fi'
import {AiFillEdit,AiOutlineDelete} from 'react-icons/ai'
export default function Tolov() {
const [visible,setVisible]=useState(false)
const { Option } = Select;
const provinceData = ['1-fr', '2-fr','3-fr'];
const cityData = {
  '1-fr': ['malikov', 'hayatov', 'yusupov'],
  '2-fr': ['mamajonava', 'umidov', 'masuqdova'],
  '3-fr':['olimov','mirzayeva','feruza']
};


const [cities, setCities] = React.useState(cityData[provinceData[0]]);
const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);
const[kurslar,setKurslar]=useState([])
const handleProvinceChange = value => {
      setKurslar(value)
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
};

 const onSecondCityChange = value => {
    setSecondCity(value);
  };
    const [oylar,setOy]=useState('0')
    const [dataone,setData1]=useState([])
    const [tolov,setTolov]=useState([
        {
            ismi:'malikov',
            guruh:'2-fr',
            sana:'2021-07-21',
            oy:'may',
            summa:'350000'
        }
    ])
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
       const [data,setData]=useState([])
       const [data3,setData3]=useState([])
       const takeOy=()=>{
            setData([])
            setData(guruhlar[oylar].oy)
            setData1([])
            setData1(guruhlar[oylar].oquvchilar)
            setData3([])
            setData3(guruhlar[oylar].oquvchilar)
        }
        useEffect(()=>{
            takeOy()
        },[oylar])
        const showModal = () => {
            setVisible(true)
          };
        const [edit,setEdit]=useState(null)
         const  hideModal = () => {
             document.getElementById('formAdmin').reset()
             setVisible(false)
          };
          const [oylar1,setOylar]=useState([])
          const [sana,setSana]=useState([])
          const onChange=(value)=> {
            setOylar(value)
          }
          const onChangedate=(date, dateString)=> {
            setSana(dateString)
          }
          const saveTolov=()=>{
            var guruh1=kurslar
            var name=secondCity
            var oy=oylar1
            var summa=document.getElementById('summa').value
            var date=sana
            var tolov1={
                guruh1,
                name,
                oy,
                summa,
                date
            }
         }
         const [form] = Form.useForm();

         const layout = {
           labelCol: { span: 8 },
           wrapperCol: { span: 16 },
         };
         const tailLayout = {
           wrapperCol: { offset: 8, span: 16 },
         };
        const onFinish = (values) => {
            console.log(values);
        };

        const onReset = () => {
            form.resetFields();
        };

        const onFill = () => {
            form.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
            });
        };

    return (
        
        <div>
            <Container className={styles.container} fluid style={{padding:'5%'}}> 
                <Row>
                <div>
                  <h1 style={{fontSize:'25px'}}>To'lov<FcPlus onClick={showModal} style={{color:'#3F6AD8',marginLeft:'10px',marginTop:'-5px',cursor:'pointer'}}/></h1>
                </div>
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
                                data.map(item=>{
                                    return(
                                        <Col lg={2} style={{padding:'0',color:'black'}} className={styles.gr}>{item}</Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                    <Col lg={12} className={styles.backgroundTable}>
                        <h5>Oxirgi to'lov qilganlar</h5>
                    <Table style={{marginTop:'20px'}}>
                        <thead>
                            <tr style={{color:'rgba(0,0,0,0.7)'}}>
                            <th style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>#</th>
                            <th style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>F.I.O</th>
                            <th style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>Guruh</th>
                            <th style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>Sana</th>
                            <th style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>Oy</th>
                            <th style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>Summa</th>
                            <th style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>O'zgartirish/O'chirish</th>
                            </tr>
                        </thead>
                        {
                          tolov.map((item,key)=>{
                              return(
                                <tbody>
                                <tr>
                                <td style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>{key+1}</td>
                                <td style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>{item.guruh}</td>
                                <td style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>{item.ismi}</td>
                                <td style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>{item.sana}</td>
                                <td style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>{item.oy}</td>
                                <td style={{borderBottom:' 1px solid rgba(0,0,0,0.1)',padding:'10px'}}>{item.summa}
                                {
                                     (item.summa<350000)?<FiPieChart style={{fontSize:'16px',color:'red',marginLeft:'5px',marginTop:'-5px'}}/>:<FiCheckCircle style={{fontSize:'16px',color:'green',marginLeft:'5px',marginTop:'-5px'}}/>
                                }
                                </td>
                                <td style={{borderBottom:' 1px solid rgba(0,0,0,0.1)'}}><AiFillEdit style={{fontSize:'16px',color:'green',marginLeft:'5px',marginTop:'-5px'}}/> <AiOutlineDelete style={{fontSize:'16px',color:'red',marginLeft:'5px',marginTop:'-5px'}}/> </td>
                                </tr>
                            </tbody>
                              )
                          })
                        }
                        </Table>
                                  
                        </Col>
                </Row>
            </Container>
            <Modal
                    title="To'lov"
                    visible={visible}
                    onOk={saveTolov}
                    onCancel={hideModal}
                    >
                     <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
                    </Modal>
        </div>
    )
}

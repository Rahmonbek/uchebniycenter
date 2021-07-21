import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Button,Table,Form } from 'react-bootstrap'
import styles from '../css/davomat.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal} from 'antd';
import { Select } from 'antd';
import {BsPersonPlusFill} from 'react-icons/bs'
import MUIDataTable from "mui-datatables";
import { DatePicker, Space } from 'antd';
import {FcPlus} from 'react-icons/fc'
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
          const [kurs,setKurs]=useState([])
          const [sana,setSana]=useState([])
          const onChange=(value)=> {
            setKurs(value)
          }
          const onChangedate=(date, dateString)=> {
            setSana(dateString)
          }
          const saveTolov=()=>{
            var kurs1=kurs
            var guruh1=kurslar
            var name=secondCity
            var oy=document.getElementById('oy').value
            var summa=document.getElementById('summa').value
            var date=sana
            var tolov1={
                kurs1,
                guruh1,
                name,
                oy,
                summa,
                date
            }
            console.log( kurs1,
                guruh1,
                name,
                oy,
                summa,
                date)
         }

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
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>F.I.O</th>
                            <th>Sana</th>
                            <th>To'lov</th>
                            </tr>
                        </thead>
                        {
                          data3.map((item,key)=>{
                              return(
                                <tbody>
                                <tr>
                                <td>{key+1}</td>
                                <td>{item}</td>
                                <td>{item.sana}</td>
                                <td>{item.tolov}</td>
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
                     <Form id="formAdmin">
                     <Form.Label style={{display:'block'}}>Kursni tanlang</Form.Label>
                     <Form.Group>
                      <Select
                        showSearch
                        style={{ width:'100%' }}
                        placeholder="Kursni tanlang"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="front-end">Fron-end</Option>
                        <Option value="python+jango">Python+jango</Option>
                        <Option value="Unity">Unity</Option>
  </Select>,
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="kurs">
                            <Form.Label style={{display:'block'}}>Guruhni va F.I.O tanlang</Form.Label>
                            <Select defaultValue={provinceData[0]} style={{ width: '50%' }} onChange={handleProvinceChange}>
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select style={{ width: '50%' }} value={secondCity} onChange={onSecondCityChange}>
        {cities.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="oy">
                            <Form.Label>Oyni kiriting</Form.Label>
                            <Form.Control type="text" min="0"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="summa">
                            <Form.Label>Summani kiriting</Form.Label>
                            <Form.Control type="number" min="0" />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label style={{display:'block'}}>Sanani kiriting</Form.Label>
                        <Space direction="vertical">
                            <DatePicker onChange={onChangedate} />
                        </Space>
                        </Form.Group>
                        </Form>
                    </Modal>
        </div>
    )
}

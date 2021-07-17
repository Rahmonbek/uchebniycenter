import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Button,Table,Form } from 'react-bootstrap'
import styles from '../css/davomat.module.css'
import MUIDataTable from "mui-datatables";
export default function Davomat() {
    const [oylar,setOy]=useState('0')
    const [dataone,setData1]=useState([])
    const [guruhlar,setGuruhlar]=useState(
        [
            {
                guruh:'1-FR',
                oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva'],
                oy:['1-oy','2-oy','3-oy','4-oy','5-oy'],
                oy_1:['1-dars','1-dars','1-dars','1-dars','1-dars','1-dars','1-dars','1-dars','1-dars','1-dars','1-dars','1-dars']
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
            setData1()
            setData1(guruhlar[oylar].oquvchilar)
            setData3([])
            setData3(guruhlar[oylar].oquvchilar)
        }
        useEffect(()=>{
            takeOy()
        },[oylar])
    return (
        
        <div>
            <Container className={styles.container} fluid style={{padding:'5%'}}> 
                <Row>
                    <Col lg={4} md={6} sm={12} className={styles.card1}>
                        <h1>Davomat  Front-end guruhlari</h1>
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
                        <h1>Davomat  Python+Jango guruhlari</h1>
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
                        <h1>Davomat mobile Unix guruhlari</h1>
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
                     
                                    <Table striped bordered hover responsive>
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>guruh</th>
                                        <th>
                                            <p>1-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                        <th>
                                            <p>2-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                        <th>
                                            <p>3-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                        <th>
                                            <p>4-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                        <th>
                                            <p>5-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                        <th>
                                            <p>6-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                        <th>
                                            <p>7-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                        <th>
                                            <p>8-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                        <th>
                                            <p>9-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                        <th>
                                            <p>10-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                        <th>
                                            <p>11-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                        <th>
                                            <p>12-dars</p>
                                            <p><input type="date"></input></p>
                                        </th>
                                      </tr>
                                    </thead>
                                    {
                               dataone.map((item,key)=>{
                                   return(
                                    <tbody>
                                                        <tr>
                                                        <td>{key+1}</td>
                                                        <td>{item}</td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
             <td><Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox"/></Form.Group></td>
  
                                                    </tr>
                                                    </tbody>
                                   )
                                      })
                                    }
                                  </Table>
                        </Col>
                </Row>
            </Container>
        </div>
    )
}

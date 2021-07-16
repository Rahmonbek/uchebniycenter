import React,{useState} from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import styles from '../css/davomat.module.css'
export default function Davomat() {
    const [guruhlar,setGuruhlar]=useState(
        [
            {
                guruh:'1-FR',
                oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
            },
            {
                guruh:'2-FR',
                oquvchilar:['malikov hayotjona','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
            },
            {
                guruh:'3-FR',
                oquvchilar:['malikov','hayatov',,'axmedova','qarshiyeva','yusupova','mirzayeva']
            },
            {
                guruh:'4-FR',
                oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
            },
            {
                guruh:'5-FR',
                oquvchilar:['malikov','hayatov umid','axmedova','qarshiyeva','yusupova','mirzayeva']
            },
            {
                guruh:'6-FR',
                oquvchilar:['malikov','hayatov','yunusova','axmedova','qarshiyeva','yusupova','mirzayeva']
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
                                            <Col lg={4} className={styles.gr}>{item.guruh}</Col>
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
                                            <Col lg={4} className={styles.gr2}>{item.guruh}</Col>
                                        )
                                    })
                                }
                            
                        </Row>
                    </Col>
                    <Col lg={4} md={6} sm={12} className={styles.card3}>
                        <h1>Davomat mobile Unit guruhlari</h1>
                        <Row>
                            
                                {
                                    unit.map((item,key)=>{
                                        return(
                                            <Col lg={4} className={styles.gr3}>{item.guruh}</Col>
                                        )
                                    })
                                }
                            
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

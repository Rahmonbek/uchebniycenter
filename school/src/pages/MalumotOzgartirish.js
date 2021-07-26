import {  Button,  Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, {useState} from 'react'
import { Row } from 'react-bootstrap';
import './MalumotOzgartirish.css';
const url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPEMT1O67rK1vm-LfTOAU28Xkwdb2Vx4Ekw&usqp=CAU'

export default function Malumot_ozgartirish() {
    
    const [admin, setAdmin]=useState([
        {
            name: 'IT Tower',
            email: 'info@gmail.com',
            number: 998999349707,
            tgLink: 'https://t.me/IT_Tower_Admin',
            insLink: 'https://t.me/IT_Tower_Admin',
            faLink: 'https://t.me/IT_Tower_Admin',
            address: 'Manzil',
            izoh: 'Izoh...',
        }
    ])
    const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 16,
        offset: 8,
        },
    },
    };
    return (
        <div>
            <Form
            name="edit"
            id="editForm"
            style={{marginLeft:"auto", marginRight:"auto", marginTop:"30px", marginBottom: "30px", padding:"40px", }}
            >
                <Row>
                    <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
                        <Form.Item
                            name="name"
                            label="O'quv markaz nomi"
                        >
                            <Input 
                                className="input1"
                                placeholder="IT Tower"
                                defaultValue={admin[0].name}
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            ]}
                        >
                            <Input 
                                className="input1"
                                placeholder="info@gmail.com"
                                defaultValue={admin[0].email}
                            />
                        </Form.Item>
                        <Form.Item
                            name="number"
                            label="Tel. raqam"
                            >
                            <Input 
                                className="input1"
                                placeholder="998*********"
                                defaultValue={admin[0].number}
                            />
                        </Form.Item>
                        <Form.Item
                            name="tgLink"
                            label="Telegram link"
                            >
                            <Input 
                                className="input1"
                                placeholder="https://t.me/IT_Tower_Admin"
                                defaultValue={admin[0].tgLink}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
                        <Form.Item
                            name="file"
                            label="O`quv markaz logotipi"
                            >
                            <Input 
                                className="input1"
                                type="file"
                            />
                        </Form.Item>
                        <div className="w-100 h-100" style={{position: 'relative'}}>
                            <img src={url} className="images" style={{width:"150px", height:"150px"}} alt="Logotip rasmi"/>
                        </div>
                    </div>
                    <Form.Item
                        name="insLink"
                        label="Instagram link"
                        className="col-lg-6 offset-md-3 col-md-9 px-3"
                        >
                        <Input 
                            className="input1"
                            placeholder="https://t.me/IT_Tower_Admin"
                            defaultValue={admin[0].insLink}
                        />
                    </Form.Item>
                    <Form.Item
                        name="faLink"
                        label="Facebook link"
                        className="col-lg-6 offset-md-3 col-md-9 px-3"
                        >
                        <Input 
                            className="input1"
                            placeholder="https://t.me/IT_Tower_Admin"
                            defaultValue={admin[0].faLink}
                        />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Manzil"
                        className="col-lg-6 offset-md-3 col-md-9 px-3"
                        >
                        <TextArea 
                            className="input1"
                            placeholder="Manzil"
                            style={{height: 150}}
                            defaultValue={admin[0].address}
                        >
                        </TextArea>
                    </Form.Item>
                    <Form.Item
                        name="izoh"
                        label="Izoh"
                        className="col-lg-6 offset-md-3 col-md-9 px-3"
                        >
                        <TextArea 
                            className="input1"
                            placeholder="Izoh..."
                            style={{height: 150}}
                            defaultValue={admin[0].izoh}
                        >
                        </TextArea>
                    </Form.Item>

                </Row>




            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                Save
                </Button>
            </Form.Item>
            </Form>
        </div>
    )
}

import React, { Component } from "react"
import style from "../css/LearningCenter.module.css"
import img1 from "../img/lgg.png"
import { Button, Upload, Form, Select, Input } from 'antd';
import {UploadOutlined} from "@ant-design/icons"

export default class LearningCenter extends Component {


    render() {

        const normFile = (e) => {
            console.log('Upload event:', e);
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          };
        return (
            <div className={style.mat}>
                <div className={style.adPanel}>
                    <div className={style.rasm}>
                        <img src={img1} />
                    </div>
                    <div className={style.forf}>
                        <h2>O'quv markazi haqida</h2>
                        <br />
                        <br />
                        <br />
                        <Form
                            name="basic"
                            wrapperCol={{ span: 24 }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                            
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input id="nom"/>
                                <label for="nom" className={style.placeholder}>O'quv markazining nomini</label>
                            </Form.Item>

                            <Form.Item
                            
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input id="non"/>
                                <label for="non" className={style.placeholder}>Email</label>
                            </Form.Item>
                            <Form.Item
                                name="upload"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                
                            >
                                <Upload name="logo" action="/upload.do" listType="picture" maxCount="1">
                                    <Button icon={<UploadOutlined />} style={{backgroundColor:"#f0f0f0"}}>Logotip kiriting</Button>
                                </Upload>
                            </Form.Item>



                            <Form.Item wrapperCol={{ offset: 1, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
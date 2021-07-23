import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import styles from '../css/news.module.css'
import { Form, Input, Button, Select, TimePicker, Table } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import "../css/modalStyle.css"



export default class Guruhlar extends Component {

    state = {

        edit: null,
        grlar: [
            {
                id: 1,
                name: 'tower02',
                soha: 'Unix',
                mentor: "allakim",
                kun: 'Dushanba Seshanba Payshanba',
                vaqt: "12:00-14:00",
                qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus kina"
            },
            {
                id: 2,
                name: 'tower02 ',
                soha: 'Unix',
                mentor: "allakim",
                kun: 'Dushanba Seshanba Payshanba',
                vaqt: "12:00-15:00",
                qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus kina"
            },
            {
                id: 3,
                name: 'tower02 ',
                soha: 'Unix',
                mentor: "allakim",
                kun: 'Dushanba Seshanba Payshanba',
                vaqt: "12:00-16:00",
                qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus kina"
            },
        ]
    }

    formRef = React.createRef();



    onFinish = (values) => {
        var ob = {
            id: this.state.grlar.length + 1,
            name: values.name,
            mentor: values.mentor,
            soha: values.soha,
            kun: values.kun.join(" "),
            vaqt: `${values.vaqt[0].format("HH:mm")}-${values.vaqt[1].format("HH:mm")}`,
            qushimcha: values.qushimcha
        }
        var mas = this.state.grlar
        if (this.state.edit === null) { mas.push(ob) }
        else {
            ob.id = this.state.edit + 1
            mas[this.state.edit] = ob
        }
        this.setState({
            grlar: mas
        })
        console.log(mas)
        this.onReset()
    };
<<<<<<< Updated upstream
    onReset = () => {
        this.formRef.current.resetFields();
        this.setState({
            edit: null,
        })
        document.getElementById("modal").checked = false
    };
    clform = () => {
        this.formRef.current.resetFields();
=======

handleCancel=()=>{
    this.setState({
        show:false,
        edit: null,
        iValue:{
            id: '',
            name: '',
            soha: '',
            mentor: "",
            kun: '',
            vaqt: ""
        }
    })
    document.getElementById("formGrh").reset()
}
edit=(x)=>{
    var m={
        name:this.state.grlar[x].name,
        mentor:this.state.grlar[x].mentor
>>>>>>> Stashed changes
    }
    editRow = (x) => {

        var a = this.state.grlar[x - 1]
        var day = a.kun.split(" ")
        var tim = a.vaqt.split("-")
        var time = [moment(tim[0], 'HH:mm'), moment(tim[1], 'HH:mm')]
        this.setState({
            edit: x - 1
        })
        this.formRef.current.setFieldsValue({
            name: a.name,
            mentor: a.mentor,
            soha: a.soha,
            kun: day,
            vaqt: time,
            qushimcha: a.qushimcha
        });

        document.getElementById("modal").checked = true
    }

<<<<<<< Updated upstream
=======
resetForm=()=>{
    document.querySelector("#formGrh").reset()
    
}
openModal=()=>{
 console.log(
    document.getElementById("formGrh") 
 )
    this.setState({
        show:true
    })
    // document.getElementById("formGrh").reset()
>>>>>>> Stashed changes

}
componentDidUpdate(){
    console.log(document.querySelector("#formGrh"))
}
    render() {
        const { Option } = Select;
        const layout = {
            wrapperCol: {
                span: 22,
                offset: 1,
            },
            labelCol: {
                offset: 1
            }
        };
        const tailLayout = {
            wrapperCol: {
                span: 22,
                offset: 1
            },
        };
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
        const children = [];

        children.push(<Option key='Dushanba'>Dushanba</Option>);
        children.push(<Option key='Seshanba'>Seshanba</Option>);
        children.push(<Option key='Chorshanba'>Chorshanba</Option>);
        children.push(<Option key='Payshanba'>Payshanba</Option>);
        children.push(<Option key='JUMA'>JUMA</Option>);
        children.push(<Option key='Shanba'>Shanba</Option>);

        return (
            <div>
                <input type="checkbox" id="modal" className={styles.smbox}/>
                <label for="modal" className="modal-background" onClick={this.clform}></label>
                <div className="modal">
                    <div className="modal-header">
                        <h3>Gurux haqida</h3>
                        <label for="modal" onClick={this.clform}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC" width="16" height="16" alt="" />
                        </label>
                    </div>

                    <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                        <Form.Item name="name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Gurux nomini kiriting" />
                        </Form.Item>
                        <Form.Item
                            name="mentor"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Biriktirilgan mentorni kiriting" />
                        </Form.Item>
                        <Form.Item name="soha" rules={[{ required: true }]}>
                            <Select
                                placeholder="O'quv yo'nalishini tanlang"
                                allowClear
                            >
                                <Option value="React front-end">React front-end</Option>
                                <Option value="Back-end">Back-end</Option>
                                <Option value="Unix">Unix</Option>
                            </Select>
                        </Form.Item>

<<<<<<< Updated upstream
                        <Form.Item name="kun" rules={[{ required: true }]}>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select"
                            >
                                {children}
                            </Select>
                        </Form.Item>
                        <Form.Item name="vaqt" label="Dars vaqtini kiriting" rules={[{ required: true }]}>
                            <TimePicker.RangePicker showTime={{ format: 'HH:mm' }} />
                        </Form.Item>
                        <Form.Item name="qushimcha"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input.TextArea rows="3" placeholder="Qo'shimcha ma'lumot..." />
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                        >
                            {({ getFieldValue }) =>
                                getFieldValue('gender') === 'other' ? (
=======
                                <Form  id="formGrh" name="basic" onFinish={this.onFinish} initialValues={{remember:true, ...this.state.iValue}}>
                                    <Form.Item name="name"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Gurux nomini kiriting" />
                                    </Form.Item>
>>>>>>> Stashed changes
                                    <Form.Item
                                        name="customizeGender"
                                        label="Customize Gender"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                ) : null
                            }
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button htmlType="submit" type="primary">
                                Saqlash
                            </Button>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Button htmlType="button" onClick={this.onReset}>
                                Bekor qilish
                            </Button>
                        </Form.Item>
                    </Form>

                </div>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Table
                                className={styles.table}
                                dataSource={this.state.grlar}
                                columns={columns}
                                bordered
                                title={() => {
                                    return (
                                        <div className={styles.header}>
                                            <h4>Guruhlar ro'yxati</h4>
                                            <Button onClick={() => document.getElementById("modal").checked = true}>Gurux qo'shish</Button>
                                        </div>)
                                }}
                            />;
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import styles from '../css/news.module.css'
import { Form, Input, Button, Select, TimePicker,Modal } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import MUIDataTable from "mui-datatables";
import moment from 'moment';
import '../css/modalStyle.css'



export default class Guruhlar extends Component {

    state = {
        iValue:{},
        show:false,
        edit: null,
        grlar: [
            {
                id: 1,
                name: 'tower02',
                soha: 'Unix',
                mentor: "allakim",
                kun: 'Dushanba Seshanba Payshanba',
                vaqt: "12:00-16:00"
            },
            {
                id: 2,
                name: 'tower03 ',
                soha: 'Unix',
                mentor: "allakim",
                kun: 'Dushanba Seshanba Payshanba',
                vaqt: "12:00-16:00"
            },
            {
                id: 3,
                name: 'tower04 ',
                soha: 'Unix',
                mentor: "allakim",
                kun: 'Dushanba Seshanba Payshanba',
                vaqt: "12:00-16:00"
            },
        ]
    }



    onFinish = (values) => {
        var ob = {
            id: this.state.grlar.length + 1,
            name: values.name,
            mentor: values.mentor,
            soha: values.soha,
            kun: values.kun.join(" "),
            vaqt: `${values.vaqt[0].format("HH:mm")}-${values.vaqt[1].format("HH:mm")}`,
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

        this.handleCancel()
    };

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
    document.querySelector("#formGrh").reset()
}
edit=(x)=>{
    var m={
        name:this.state.grlar[x].name,
        mentor:this.state.grlar[x].mentor
    }

    this.setState({
        edit:x,
        iValue:m
    })

this.openModal()
}

resetForm=()=>{
    document.querySelector("#formGrh").reset()
    
}
openModal=()=>{
    document.querySelector("#formGrh").reset()
 
    this.setState({
        show:true
    })
}

    render() {
        const { Option } = Select;
        const layout = {
            labelCol: {offset:1},
            wrapperCol: {
                offset:1,
                span: 22,
            }
        };
        const tailLayout = {
            wrapperCol: {
                offset:1,
                span: 23,
            },
        };
        const columns = [
            {
                name: "id",
                label: "#",
                options: {
                    filter: true,
                    sort: false,
                }
            },
            {
                name: "name",
                label: "gr Nomi",
                options: {
                    filter: true,
                    sort: false,
                },
            },
            {
                name: "soha",
                label: "Soxasi",
                options: {
                    filter: true,
                    sort: false,
                },
            },
            {
                name: 'mentor',
                label: "Mas'ul mentor",
                options: {
                    filter: true,
                    sort: false,
                },
            },
            {
                name: "kun",
                label: "Dars kunlari",
                options: {
                    filter: true,
                    sort: false,
                },
            },
            {
                name: "vaqt",
                label: "Dars vaqtlari",
                options: {
                    filter: true,
                    sort: false,
                },
            },
            {
                name: "id",
                label:"O'zgartirish",
                options: {
                    filter: false,
                    sort: false,
                    empty: true,
                    customBodyRenderLite: () => {
                        return (
                            <Button className={styles.inputFormBtn1}>
                                O'zgartirish
                            </Button>
                        );
                    }
                }

            },
        ];
        const options = {
            filterType: 'checkbox',
            responsive: 'scroll',
            onRowClick: (rowData, rowState) => {
              this.edit( rowState.rowIndex)
            },
        };
        const children = [];

        children.push(<Option key='Dushanba'>Dushanba</Option>);
        children.push(<Option key='Seshanba'>Seshanba</Option>);
        children.push(<Option key='Chorshanba'>Chorshanba</Option>);
        children.push(<Option key='Payshanba'>Payshanba</Option>);
        children.push(<Option key='JUMA'>JUMA</Option>);
        children.push(<Option key='Shanba'>Shanba</Option>);

        return (
            <div className={styles.matt}>

<Modal title="Gurux haqida" footer={null} visible={this.state.show} onCancel={this.handleCancel}>

                                <Form {...layout}  name="control-ref" onFinish={this.onFinish} id="formGrh" initialValues={{remember:true, ...this.state.iValue}}>
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
                                    <Form.Item name="soha" 
                                     rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                    >
                                        <Select
                                            placeholder="O'quv yo'nalishini tanlang"
                                            allowClear
                                        >
                                            <Option style={{zIndex:11111}} value="React front-end">React front-end</Option>
                                            <Option style={{zIndex:11111}} value="Back-end">Back-end</Option>
                                            <Option style={{zIndex:11111}} value="Unix">Unix</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item name="kun" rules={[{ required: true }]}>
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            style={{ width: '100%' }}
                                            placeholder="O'quv kun(lar)ini tanlang"
                                        >
                                            {children}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item name="vaqt" label="Dars vaqtini kiriting" rules={[{ required: true }]}>
                                        <TimePicker.RangePicker showTime={{ format: 'HH:mm' }} />
                                    </Form.Item>
                                    <Form.Item
                                        noStyle
                                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                                    >
                                        {({ getFieldValue }) =>
                                            getFieldValue('gender') === 'other' ? (
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
                                        <Button htmlType="submit" style={{backgroundColor:'#3F6AD8',border:'none',color:'white'}}>
                                            Saqlash
                                        </Button>
                                        &nbsp;
                                        &nbsp;
                                        &nbsp;
                                        <Button htmlType="button" onClick={this.handleCancel}>
                                            Bekor qilish
                                        </Button>
                                    </Form.Item>
                                </Form>
      </Modal>
           

                <Container fluid style={{padding:'5%'}}>
                    <Row>
                        <Col lg={12}>
<Button onClick={this.openModal}>Gurux qo'shish</Button>
                        </Col>
                        <br/>
                        <br/>
                        <Col lg={12}>
                            <MUIDataTable
                            style={{zIndex:"-22"}}
                                title={"Guruhlar ro'yxati"}
                                data={this.state.grlar}
                                columns={columns}
                                options={options}
                            />
                            <span id="front2"></span>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

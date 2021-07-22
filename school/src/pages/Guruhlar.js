import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import styles from '../css/news.module.css'
import { Form, Input, Button, Select, TimePicker } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import MUIDataTable from "mui-datatables";
import moment from 'moment';
import '../css/modalStyle.css'



export default class Guruhlar extends Component {

    state = {
        // kunlar:[],
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
                name: 'tower02 ',
                soha: 'Unix',
                mentor: "allakim",
                kun: 'Dushanba Seshanba Payshanba',
                vaqt: "12:00-16:00"
            },
            {
                id: 3,
                name: 'tower02 ',
                soha: 'Unix',
                mentor: "allakim",
                kun: 'Dushanba Seshanba Payshanba',
                vaqt: "12:00-16:00"
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

        this.onReset()
    };
    onReset = () => {
        this.formRef.current.resetFields();
        this.setState({
            edit: null,
        })
        document.getElementById("modal").checked=false
        
    };

    clsmdl=()=>{
        this.formRef.current.resetFields();
        this.setState({
            edit: null,
        })
    }


    render() {
        const { Option } = Select;
        const layout = {
            wrapperCol: {
                span: 24,
            }
        };
        const tailLayout = {
            wrapperCol: {
                span: 19,
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
                name: "O'zgartirish",
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
                var zz=rowData[4].split(" ")
                var pp=rowData[5].split("-")
                this.setState({
                    edit: rowState.rowIndex,
                })
                console.log(zz)
                this.formRef.current.setFieldsValue({
                    name: rowData[1],
                    soha: rowData[2],
                    mentor: rowData[3],
                    kun:zz,
                    vaqt:[moment(pp[0],"HH:mm"),moment(pp[1],"HH:mm")]
                });
                document.getElementById("modal").checked=true
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
            <div>
<input type="checkbox" id="modal" />
<label for="modal" class="example-label">Gurux qo'shish</label>
<label for="modal" class="modal-background" onClick={this.clsmdl}></label>
<div className="modal">
            <div className="modal-header">
                <h3>Gurux haqida</h3>
                <label for="modal" onClick={this.clsmdl}>
        	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC" width="16" height="16" alt=""/>
        </label>
            </div>
            <div className={styles.formAdmin} style={{ width: '100%', position: 'sticky', top: '400px' }} id="front1">

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

                                    <Form.Item name="kun" rules={[{ required: true }]}>
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            style={{ width: '100%' }}
                                            placeholder="Please select"
                                        // value={this.state.kunlar}
                                        // onChange={handleChange}
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
                                        <Button htmlType="button" onClick={this.onReset}>
                                            Bekor qilish
                                        </Button>
                                    </Form.Item>
                                </Form>

                            </div>
                        
</div>
                <Container fluid style={{padding:'5%'}}>
                    <Row>
                        <Col lg={12}>

                        </Col>
                        <Col lg={12}>
                          </Col>
                        <Col lg={12}>
                            <MUIDataTable

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

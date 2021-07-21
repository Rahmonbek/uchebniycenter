import React, { Component } from 'react'
import styles from '../css/news.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MUIDataTable from "mui-datatables";
import { Modal, Button } from 'antd';
import { Select } from 'antd';
import {Form} from 'react-bootstrap'
import {BsPersonPlusFill} from 'react-icons/bs'
export default class Oquvchiqoshish extends Component {
    state = {
        cities:this.cityData[this.provinceData[0]],
        secondCity:this.cityData[this.provinceData[0]][0],
        visible: false,
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
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      hideModal = () => {
        this.setState({
          visible: false,
        });
      };
      handleProvinceChange = value => {
          this.setState({
              cities:this.cityData[value],
              secondCity:this.cityData[value][0]
          })
      };
    
       onSecondCityChange = value => {
           this.setState({
               secondCity:value
           })
      };
    render() {
        const { Option } = Select;
        const provinceData = ['Zhejiang', 'Jiangsu'];
        const cityData = {
        Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
        Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
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
                            <a href="#front1"><Button className={styles.inputFormBtn1}>
                                O'zgartirish
                            </Button></a>
                        );
                    }
                }

            },
        ];
        const options = {
            filterType: 'checkbox',
            responsive: 'scroll',
            onRowClick: (rowData, rowState) => {
            },
        };
        return (
            <div style={{padding:'5%'}}>
                 <div>
                     <h1 style={{fontSize:'25px'}}>O'quvchi qo'shish <BsPersonPlusFill onClick={this.showModal} style={{color:'#3F6AD8',marginLeft:'20px',marginTop:'-5px',cursor:'pointer'}}/></h1>
                 </div>
                 <MUIDataTable
                    title={"O'quvchilar ro'yxati"}
                    data={this.state.grlar}
                    columns={columns}
                    options={options}
                    />
                     <Modal
                    title="O'quvchi qo'shish"
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                    >
                     <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>F.I.O kiriting</Form.Label>
                            <Form.Control type="text" placeholder="F.I.O" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="telefon">
                            <Form.Label>Telefon raqam kiriting</Form.Label>
                            <Form.Control type="number" min="0" placeholder="9989926571235" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="telefon2">
                            <Form.Label>Qo'shimcha telefon raqam kiriting</Form.Label>
                            <Form.Control type="number" min="0" placeholder="9989926571235" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="kurs">
                            <Form.Label>Kursni va guruhni tanlang</Form.Label>
                            <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={this.handleProvinceChange}>
                            {this.provinceData.map(province => (
                            <Option key={province}>{province}</Option>
                            ))}
                        </Select>
                        <Select style={{ width: 120 }} value={this.state.secondCity} onChange={this.onSecondCityChange}>
                            {this.state.cities.map(city => (
                            <Option key={city}>{city}</Option>
                            ))}
                        </Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Modal>
            </div>
        )
    }
}

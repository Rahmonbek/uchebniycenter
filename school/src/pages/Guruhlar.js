import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import styles from '../css/news.module.css'
import { Button, Input, Select, Table, Modal, Form } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import "../css/modalStyle.css";




export default class Guruhlar extends Component {

    state = {

        edit: null,
        category:[{
            id:'1',
            name:'Web dasturshlash'
        },
        {
            id:'2',
            name:'Android',
        },
        {
            id:'3',
            name:'SMM'
        },
        {
            id:'4',
            name:'Fanlar'
        },
        {
            id:'5',
            name:'Grafik dizaynerlik'
        },
        {
            id:'6',
            name:'Bugalterlik'
        },],
        fanlar:[{
            id:'1',
            name:'HTML'
        },
        {
            id:'2',
            name:'CSS',
        },
        {
            id:'3',
            name:'React'
        },
        {
            id:'4',
            name:'Ingliz tili'
        },
        {
            id:'5',
            name:'Python'
        },
        {
            id:'6',
            name:'Django'
        },],
        mentor:[
            {id:1,
                fullname:'Ismoilov Rahmon'},
                {id:2,
                    fullname:'Ismoilov Rahmon'},
                    {id:3,
                        fullname:'Ismoilov Rahmon'},
                        {id:4,
                            fullname:'Ismoilov Rahmon'},
                            {id:5,
                                fullname:'Ismoilov Rahmon'},
                                {id:6,
                                    fullname:'Ismoilov Rahmon'},
                                    {id:7,
                                        fullname:'Ismoilov Rahmon'},
        ],
        grlar: [
            {
                id: 1,
                name: 'tower02',
                
                mentor: "allakim",
                yonalish:['Web dasturlash', 'Android'],
                fanlar:['HTML', 'CSS', 'React'],
                image:'https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg',
                kun: 'Dushanba Seshanba Payshanba',
                vaqt: "12:00-14:00",
                date:"21-11-2020",
                qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus kina",
            },
            {
                id: 2,
                name: 'tower02 ',
                
                mentor: "allakim",
                yonalish:['Web dasturlash', 'Android'],
                fanlar:['HTML', 'CSS', 'React'],
                image:'https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg',
                kun: 'Dushanba Seshanba Payshanba',
                vaqt: "12:00-15:00",
                date:"21-11-2020",
                qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus kina",
            },
            {
                id: 3,
                name: 'tower02 ',
                
                mentor: "allakim",
                yonalish:['Web dasturlash', 'Android'],
                fanlar:['HTML', 'CSS', 'React'],
                image:'https://dpo.online/wp-content/uploads/2016/03/web-1045994_960_720.jpg',
                kun: 'Dushanba Seshanba Payshanba',
                vaqt: "12:00-16:00",
                date:"21-11-2020",
                qushimcha: "Lorem ipsum doler amet ui oxar darbi qorfus kina",
            },
        ],
        show:false
    }


editRow=(id)=>{
    console.log(this.state.grlar[id])

}

openModal=()=>{
    this.setState({
        show:true
    })
}
handleCancel=()=>{
    this.setState({
        show:false
    })
}




    render() {
        const { Option } = Select;
       
      
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
                                            <Button onClick={this.openModal}>Gurux qo'shish</Button>
                                        </div>)
                                }}
                            />;
                        </Col>
                    </Row>
                </Container>
                <Modal title="Guruh" visible={this.state.show} footer={false} onCancel={this.handleCancel}>
                <Form
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
      
    >
      <Form.Item
        label="Guruhni nomini kiriting"
        name="name"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item         
label="Guruhning yo'nalishini tanlang"
        name="yonalish"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Yo'nalishni tanlang"
    defaultValue={[this.state.category[0].id]}
    
    optionLabelProp="label"
  >
       {
          this.state.category.map(item=>{
              return(<Option value={item.id}  label={item.name}><div className="demo-option-label-item">{item.name}</div></Option>)
          })
      }
     
  </Select>
</Form.Item>
<Form.Item         
label="Guruhning o'qituvchisini tanlang"
        name="mentor"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="O'qutuvchini tanlang"
    defaultValue={[this.state.mentor[0].id]}
    
    optionLabelProp="label"
  >
       {
          this.state.mentor.map(item=>{
              return(<Option value={item.id}  label={item.fullname}><div className="demo-option-label-item">{item.fullname}</div></Option>)
          })
      }
     
  </Select>

</Form.Item>

<Form.Item         
label="Guruhda o'tiladigan fanlarni/dasturlarni tanlang"
        name="fanlar"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Select style={{width:'100%'}} defaultValue={this.state.fanlar[0].id}>
      {
          this.state.fanlar.map(item=>{
              return(<Option value={item.id}>{item.name}</Option>)
          })
      }
      
      
      
      </Select>
</Form.Item>
      
      <Form.Item>
      <Button type="danger" htmlType="submit">
Bekor qilish
        </Button>
        

      <Button type="primary" htmlType="submit">
          
          Saqlash
       
     </Button>
      </Form.Item>

    </Form>

      </Modal>

            </div>
        )
    }
}

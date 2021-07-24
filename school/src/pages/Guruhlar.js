import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import styles from '../css/news.module.css'
import { Button, Input, Select, Table, Modal, Form, DatePicker, TimePicker, InputNumber, Upload, message } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import "../css/modalStyle.css";
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';





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
        previewVisible: false,
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
               muddat:'3', 
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
               muddat:'3', 
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
               muddat:'3', 
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
        const uploadButton = (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          );
      
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
        const props = {
            name: 'file',
            action: '',
            headers: {
              authorization: 'authorization-text',
            },
            onChange(info) {
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          };
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
                <Modal title="Guruh" width="70%" visible={this.state.show} footer={false} onCancel={this.handleCancel}>
                <Form
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
      
    >
        <Row>
            <Col lg={6} md={12} sm={12}>
            <Form.Item
        label="Guruhni nomini kiriting"
        name="name"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <Input placeholder="Guruhning nomini kiriting"/>
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
    defaultValue={[this.state.category[0].name]}
    
    optionLabelProp="label"
  >
       {
          this.state.category.map(item=>{
              return(<Option value={item.name}  label={item.name}><div className="demo-option-label-item">{item.name}</div></Option>)
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
              return(<Option value={item.name}>{item.name}</Option>)
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
    defaultValue={[this.state.mentor[0].fullname]}
    
    optionLabelProp="label"
  >
       {
          this.state.mentor.map(item=>{
              return(<Option value={item.fullname}  label={item.fullname}><div className="demo-option-label-item">{item.fullname}</div></Option>)
          })
      }
     
  </Select>

</Form.Item>
<Row>
    <Col lg={6}>
    <Form.Item
        label="Ochilish sanasini kiriting"
        name="date"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <DatePicker />
      </Form.Item>


    </Col>
    <Col lg={6}>
    <Form.Item
        label="Dars vaqtini kiriting"
        name="vaqt"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <TimePicker.RangePicker />
      </Form.Item>


    </Col>
</Row>
      
            </Col>
<Col lg={6} sm={12} md={12}>
<Row>
    <Col lg={5}>
    <Form.Item
        label="Dars nechchi oy davom etishini kiriting"
        name="muddat"
        
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
      >
        <InputNumber min="0"/>
      </Form.Item>

    
    </Col>
    <Col lg={7}>
    <Form.Item         
label="Haftani qaysi kunlari dars bo'lishini kiriting"
        name="kun"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Hafta kunlarini tanglang"
    defaultValue={['Dushanba']}
    
    optionLabelProp="label"
  >
       <Option value="Dushanba"  label="Dushanba"><div className="demo-option-label-item">Dushanba</div></Option>
       <Option value="Seshanba"  label="Seshanba"><div className="demo-option-label-item">Seshanba</div></Option>
       <Option value="Chorshanba"  label="Chorshanba"><div className="demo-option-label-item">Chorshanba</div></Option>
       <Option value="Payshanba"  label="Payshanba"><div className="demo-option-label-item">Payshanba</div></Option>
       <Option value="Juma"  label="Juma"><div className="demo-option-label-item">Juma</div></Option>
       <Option value="Shanba"  label="Shanba"><div className="demo-option-label-item">Shanba</div></Option>
       <Option value="Yakshanba"  label="Yakshanba"><div className="demo-option-label-item">Yakshanba</div></Option>
     
  </Select>

</Form.Item>

    </Col>
    </Row>      
    <Form.Item         
label="Guruh uchun rasm tanlang"
        name="kun"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<Upload {...props}>
    <Button icon={<UploadOutlined />}>Rasmni tanlang</Button>
</Upload>
</Form.Item>
<Form.Item         
label="Guruh uchun qo'simcha ma'lumot kiriting"
        name="kun"
        rules={[{ required: true, message: 'Bu joyni to\'ldirish majburiy!' }]}
>
<CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />

</Form.Item>
</Col>
        </Row>

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

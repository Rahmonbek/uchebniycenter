import React,{useEffect,useState} from 'react'
import styles from '../css/news.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MUIDataTable from "mui-datatables";
import { Modal} from 'antd';
import { Form, Input,Select, Button, AutoComplete } from 'antd';
import {BsPersonPlusFill} from 'react-icons/bs'
export default function Oquvchiqoshish() {
const [visible,setVisible]=useState(false)
const { Option } = Select;
const showModal = () => {
    setVisible(true)
};
 const  hideModal = () => {
     setVisible(false)
  };
  const saveOquvchi=()=>{
    //   var name=document.getElementById('name').value
    //   var telefon=document.getElementById('telefon').value
    //   var telefon2=document.getElementById('telefon2').value
    //   var kurs=kurslar
    //   var guruh=secondCity
    //   var newoquvchi={
    //       name,
    //       telefon,
    //       telefon2,
    //       kurs,
    //       guruh
    //   }
    //   console.log(newoquvchi)
    //   var newoquvchilar=oquvchi
    //   if(edit===null){
    //    newoquvchilar.push(newoquvchi)
    //    setOquvchi(newoquvchilar)
    // }else{
    //     newoquvchilar[edit]=newoquvchi
    //     setEdit(null)
    // }
    //   hideModal()
    //   reset()
  }
//   const reset=()=>{
//     document.getElementById('name').value=''
//     document.getElementById('telefon').value=''
//     document.getElementById('telefon2').value=''
//     document.getElementById('first').value=provinceData[0]
//     document.getElementById('second').value=secondCity
//     setEdit(null)
    
//   }
  const [oquvchi,setOquvchi]=useState([
      {
          name:'Jabborov Asilbek',
          telefon:'3716578657',
          telefon2:'92735946574',
          kurs:'front-end',
          guruh:'2-fr'
      }
  ])
  const columns = [
    {
        name: "name",
        label: "F.I.O",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "telefon",
        label: "Telefon",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: 'telefon2',
        label: "Qo'shimcha telefon",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "kurs",
        label: "Kurs",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "guruh",
        label: "guruh",
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
                    <a><Button onClick={showModal} className={styles.inputFormBtn1}>
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
    //    setEdit(rowState.rowIndex)
    //    var kurs=document.getElementById('first')
    //    var guruh=document.getElementById('second')
    //    setOquvchi1(
    //        {
    //         name: rowData[0],
    //         telefon: rowData[1],
    //         telefon2: rowData[2],
    //         kurs:rowData[3],
    //         guruh:rowData[4]
    //        }
    //    )
    //    console.log(rowData)
    },
};
const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
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
  const provinceData = ['Zhejiang', 'Jiangsu'];
  const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = value => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondCity(value);
  };
    const [form] = Form.useForm();
  
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    return (
        <div style={{padding:'5%'}}>
            <div>
               <h1 style={{fontSize:'25px'}}>O'quvchi qo'shish <BsPersonPlusFill onClick={showModal} style={{color:'#3F6AD8',marginLeft:'20px',marginTop:'-5px',cursor:'pointer'}}/></h1>
            </div>
            <MUIDataTable
                    title={"O'quvchilar ro'yxati"}
                    data={oquvchi}
                    columns={columns}
                    options={options}
                    />
            <Modal
                    title="O'quvchi qo'shish"
                    visible={visible}
                    onOk={saveOquvchi}
                    onCancel={hideModal}
                    >
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            scrollToFirstError
                            >
                                    <Form.Item
                                    style={{display:'block'}}
                                        name="nickname"
                                        label="F.I.O"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Iltimos F.I.O kiriting!',
                                            whitespace: true,
                                        },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                    style={{display:'block'}}
                                        name="telefon"
                                        label="Telefon raqam kiriting"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Iltimos telefon raqam kiriting!',
                                            whitespace: true,
                                        },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                    style={{display:'block'}}
                                        name="telefon2"
                                        label="Qo'shimcha telefon kiriting"
                                        rules={[
                                        {
                                            required: true,
                                            message: "Iltimos qo'shimcha telefon kiriting!",
                                            whitespace: true,
                                        },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                    style={{display:'block'}}
                                        name="group"
                                        label="Kursni va guruhni tanlang"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Kursni va guruhni tanlang',
                                        },
                                        ]}
                                    >
        <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
        {cities.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
                                    </Form.Item>
                                    <Form.Item {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit">
                                        Register
                                        </Button>
                                    </Form.Item>
                                    </Form>
                     {/* <Form id="formAdmin">
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>F.I.O kiriting</Form.Label>
                            <Form.Control type="text" placeholder="F.I.O"  defaultValue={oquvchi1.name}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="telefon">
                            <Form.Label>Telefon raqam kiriting</Form.Label>
                            <Form.Control type="number" min="0" placeholder="9989926571235" defaultValue={oquvchi1.telefon}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="telefon2">
                            <Form.Label>Qo'shimcha telefon raqam kiriting</Form.Label>
                            <Form.Control type="number" min="0" placeholder="9989926571235" defaultValue={oquvchi1.telefon2}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="kurs">
                            <Form.Label style={{display:'block'}}>Kursni va guruhni tanlang</Form.Label>
                            <Select id="first" defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select style={{ width: 120 }} id="second" value={secondCity} onChange={onSecondCityChange}>
        {cities.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
                        </Form.Group>
                        </Form> */}
                    </Modal>
        </div>
    )
}

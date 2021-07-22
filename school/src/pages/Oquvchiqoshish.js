import React,{useEffect,useState} from 'react'
import styles from '../css/news.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MUIDataTable from "mui-datatables";
import { Modal, Button } from 'antd';
import { Select } from 'antd';
import {Form} from 'react-bootstrap'
import {BsPersonPlusFill} from 'react-icons/bs'
export default function Oquvchiqoshish() {
const [visible,setVisible]=useState(false)
const { Option } = Select;
const provinceData = ['Front-end', 'Python','Unity'];
const cityData = {
  'Front-end': ['1-fr', '2-fr', '3-fr'],
  'Python': ['1-py', '2-py', '3-py'],
  'Unity':['1-un','2-un','3-un']
};

const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);
const[kurslar,setKurslar]=useState([])
  const handleProvinceChange = value => {
      setKurslar(value)
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondCity(value);
  };
const showModal = () => {
    setVisible(true)
  };
const [edit,setEdit]=useState(null)
 const  hideModal = () => {
     setEdit(null)
     setVisible(false)
  };
  const saveOquvchi=()=>{
      var name=document.getElementById('name').value
      var telefon=document.getElementById('telefon').value
      var telefon2=document.getElementById('telefon2').value
      var kurs=kurslar
      var guruh=secondCity
      var newoquvchi={
          name,
          telefon,
          telefon2,
          kurs,
          guruh
      }
      console.log(newoquvchi)
      var newoquvchilar=oquvchi
      if(edit===null){
       newoquvchilar.push(newoquvchi)
       setOquvchi(newoquvchilar)
    }else{
        newoquvchilar[edit]=newoquvchi
        setEdit(null)
    }
    reset()
      hideModal()
  }
  const reset=()=>{
document.getElementById('name').value=''
document.getElementById('telefon').value=''
document.getElementById('telefon2').value=''
  }
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
const [oquvchi1,setOquvchi1]=useState([])
const options = {
    filterType: 'checkbox',
    responsive: 'scroll',
    onRowClick: (rowData, rowState) => {
       setEdit(rowState.rowIndex)
       setOquvchi1(
           {
            name: rowData[0],
            telefon: rowData[1],
            telefon2: rowData[2],
            kurs:rowData[3],
            guruh:rowData[4]
           }
       )
       console.log(rowData)
    },
};
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
                     <Form id="formAdmin">
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
                        </Form.Group>
                        </Form>
                    </Modal>
        </div>
    )
}

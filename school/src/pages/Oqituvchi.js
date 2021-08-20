import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import styles from "../css/davomat.module.css";
import { BsPersonPlusFill } from "react-icons/bs";
import { Form, Input, Select } from "antd";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { getTraining, deleteTeacher, createTeacher, editTeacher } from "../host/Config";
import GLOBAL from "./Token";

export default function Oqituvchiqoshish() {
  const [edit, setEdit] = useState(null);
  const [visible, setVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [image, setImage] = useState("");

  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    onReset();
    setVisible(false);
  };
  const { Option } = Select;
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
    setEdit(null);
  };
  const onFill = (key) => {
    setEdit(teachers[key].id);
    setTimeout(function () {
      form.setFieldsValue({
        full_name: teachers[key].full_name,
        phone_number: teachers[key].phone_number,
        photo: "",
        text: teachers[key].text,
      });
    }, 0);
    showModal();
  };
  const children = [];

  children.push(<Option key="html">html</Option>);
  children.push(<Option key="css">css</Option>);
  children.push(<Option key="bootstrap">bootstrap</Option>);
  children.push(<Option key="js">js</Option>);
  children.push(<Option key="ajax">ajax</Option>);
  children.push(<Option key="react">react</Option>);
  children.push(<Option key="redux">redux</Option>);

  const customRequest = (e) => {
    let imageT = e.target.files[0];
    setImage(imageT);
    console.log(imageT);
  };

  const onFinish = (value) => {
    console.log(value);
    let formData = new FormData();

    formData.append("full_name", value.full_name ?? "");
    formData.append("phone_number", value.phone_number ?? "");
    formData.append("photo", image ?? null);
    formData.append("text", value.text ?? "");
    formData.append("training_center", GLOBAL.id);
    if (edit === null) {
      createTeacher(formData)
        .then((res) => {
          getTrainingS();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      editTeacher(formData, edit)
        .then((res) => {
          getTrainingS();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    hideModal();
  };
  const getTrainingS = () => {
    getTraining()
      .then((res) => {
        console.log(res.data);
        setTeachers(res.data.teachers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTeachers = (id) => {
    deleteTeacher(id)
      .then((res) => {
        getTrainingS();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTrainingS();
  }, []);
  return (
    <div style={{ padding: "5%" }}>
      <div>
        <Button onClick={showModal}>
          O'qituvchi qo'shish <BsPersonPlusFill style={{ color: "#3F6AD8", marginLeft: "10px", marginTop: "-5px", cursor: "pointer" }} />
        </Button>
      </div>
      <div style={{ padding: "10px" }} className={styles.backgroundTable}>
        <h5>O'qituvchilar ro'yxati</h5>
        <Table responsive style={{ marginTop: "20px" }} style={{ color: "rgba(0,0,0,0.7)" }}>
          <thead>
            <tr>
              <th style={{ border: " 1px solid #3F6AD8", padding: "10px" }}>#</th>
              <th style={{ border: " 1px solid #3F6AD8", padding: "10px" }}>F.I.O</th>
              {/* <th style={{border:' 1px solid #3F6AD8',padding:'10px'}}>Tug'ilgan sana</th> */}
              <th style={{ border: " 1px solid #3F6AD8", padding: "10px" }}>Telefon</th>
              {/* <th style={{border:' 1px solid #3F6AD8',padding:'10px'}}>E-mail</th> */}
              <th style={{ border: " 1px solid #3F6AD8", padding: "10px" }}>Rasm</th>
              {/* <th style={{border:' 1px solid #3F6AD8',padding:'10px'}}>Yo'nalish</th>
                            <th style={{border:' 1px solid #3F6AD8',padding:'10px'}}>Texnologiyalar</th> */}
              <th style={{ border: " 1px solid #3F6AD8", padding: "10px" }}>Ma'lumot</th>
              {/* <th style={{border:' 1px solid #3F6AD8',padding:'10px'}}>Sana</th> */}
              <th style={{ border: " 1px solid #3F6AD8", padding: "10px" }}>O'zgartirish/O'chirish</th>
            </tr>
          </thead>
          {teachers && Array.isArray(teachers)
            ? teachers.map((item, key) => {
                return (
                  <tbody>
                    <tr>
                      <td style={{ border: " 1px solid #3F6AD8", padding: "10px" }}>{key + 1}</td>
                      <td style={{ border: " 1px solid #3F6AD8", padding: "10px" }}>{item.full_name}</td>
                      {/* <td style={{border:' 1px solid #3F6AD8',padding:'10px'}}><p style={{width: 100}}>{item.tugilgansana}</p></td> */}
                      <td style={{ border: " 1px solid #3F6AD8", padding: "10px" }}>{item.phone_number}</td>
                      {/* <td style={{border:' 1px solid #3F6AD8',padding:'10px'}}>{item.email}</td> */}
                      <td style={{ border: " 1px solid #3F6AD8", padding: "10px" }}>
                        <img style={{ width: "200px" }} src={item.photo} />
                      </td>
                      {/* <td style={{border:' 1px solid #3F6AD8',padding:'10px'}}>{item.yonalish}</td> */}
                      {/* <td style={{border:' 1px solid #3F6AD8',padding:'10px'}}>
                                  <ul className={styles.tecnoUl}>
                                  {
                                item.texnologiyalar && Array.isArray(item.texnologiyalar)?item.texnologiyalar.map(item=>{
                                   return(
                                           <li>{item} </li>
                                           )
                                          }):''
                                          
                                        } 
                                  </ul>
                                </td> */}
                      <td style={{ border: " 1px solid #3F6AD8", padding: "10px" }}>
                        <p style={{ width: "250px" }}>{item.text}</p>
                      </td>
                      <td style={{ border: " 1px solid #3F6AD8" }}>
                        <AiFillEdit onClick={() => onFill(key)} style={{ fontSize: "20px", color: "green", marginLeft: "10px", marginTop: "5px", cursor: "pointer", marginRight: "10px" }} /> <AiOutlineDelete onClick={() => deleteTeachers(`${item.id}`)} style={{ fontSize: "20px", color: "red", marginLeft: "10px", marginTop: "5px", cursor: "pointer", marginRight: "10px", float: "right" }} />{" "}
                      </td>
                    </tr>
                  </tbody>
                );
              })
            : ""}
        </Table>
      </div>
      <Modal width={700} footer={false} title="O'qituvchi qo'shish" visible={visible} onOk={hideModal} onCancel={hideModal}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="full_name"
            label="F.I.O"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone_number"
            label="Telefon raqami:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Rasm" name="photo" onChange={customRequest} rules={[{ required: false, message: "Bu joyni to'ldirish majburiy!" }]}>
            <Input type="file" id="rasmlar" required={false} style={{ marginBottom: "20px" }} />
          </Form.Item>
          <Form.Item
            name="text"
            label="Ma'lumot kiriting:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea rows="3" placeholder="Qo'shimcha ma'lumot..." />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Saqlamoq
            </Button>
            <Button htmlType="button" onClick={onReset}>
              O'chirmoq
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

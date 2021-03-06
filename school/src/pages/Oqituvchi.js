import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import styles from "../css/davomat.module.css";
import { BsPersonPlusFill } from "react-icons/bs";
import { Form, Input, Select } from "antd";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import {
  getTrainingS,
  deleteTeacher,
  createTeacher,
  editTeacher,
} from "../host/Config";
import GLOBAL from "./Token";
import { url } from "../host/Host";

export default function Oqituvchiqoshish() {
  const [edit, setEdit] = useState(null);
  const [visible, setVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [image, setImage] = useState(null);
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
  const children = [];
  children.push(<Option key="html">html</Option>);
  children.push(<Option key="css">css</Option>);
  children.push(<Option key="bootstrap">bootstrap</Option>);
  children.push(<Option key="js">js</Option>);
  children.push(<Option key="ajax">ajax</Option>);
  children.push(<Option key="react">react</Option>);
  children.push(<Option key="redux">redux</Option>);

  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    onReset();
    setVisible(false);
    setEdit(null);
    setImage(null);
  };
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

  const customRequest = (e) => {
    let imageT = e.target.files[0];
    setImage(imageT);
  };

  const onFinish = (value) => {
    let formData = new FormData();

    formData.append("full_name", value.full_name ?? "");
    formData.append("phone_number", value.phone_number ?? "");
    formData.append("text", value.text ?? "");
    formData.append("training_center", GLOBAL.id);
    if (edit === null) {
      formData.append("photo", image ?? null);
      createTeacher(formData)
        .then((res) => {
          getTrainingS()
            .then((res1) => {
              GLOBAL.training = res1.data;
              getTraining();
            })
            .catch((err1) => console.log(err1));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (image !== null) {
        formData.append("photo", image ?? null);
      }
      editTeacher(formData, edit)
        .then((res) => {
          getTrainingS()
            .then((res1) => {
              GLOBAL.training = res1.data;
              getTraining();
            })
            .catch((err1) => console.log(err1));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    hideModal();
  };
  const getTraining = () => {
    setTeachers(GLOBAL.training.teachers);
  };

  const deleteTeachers = (id) => {
    deleteTeacher(id)
      .then((res) => {
        getTrainingS()
          .then((res1) => {
            GLOBAL.training = res1.data;
            getTraining();
          })
          .catch((err1) => console.log(err1));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTraining();
  }, []);
  return (
    <div style={{ padding: "5%" }}>
      <div>
        <Button onClick={showModal} type="primary">
          O'qituvchi qo'shish{" "}
          <BsPersonPlusFill
            style={{
              color: "white",
              marginLeft: "10px",
              marginTop: "-5px",
              cursor: "pointer",
            }}
          />
        </Button>
      </div>
      <div style={{ padding: "10px" }} className={styles.backgroundTable}>
        <h5>O'qituvchilar ro'yhati</h5>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Rasm</th>
              <th>F.I.O</th>
              <th>Telefon</th>
              <th>Ma'lumot</th>
              <th>O'zgartirish/O'chirish</th>
            </tr>
          </thead>
          {teachers && Array.isArray(teachers) ? (
            <tbody>
              {teachers.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>
                      <div
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          style={{ width: "100%", height: "100%" }}
                          src={url + item.photo}
                          alt=""
                        />
                      </div>
                    </td>
                    <td>{item.full_name}</td>
                    <td>{item.phone_number}</td>

                    <td>
                      <p style={{ width: "250px" }}>{item.text}</p>
                    </td>
                    <td>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <AiFillEdit
                          style={{
                            color: "#3f6ad8",
                            margin: "10px",
                          }}
                          onClick={() => onFill(key)}
                        />{" "}
                        <AiOutlineDelete
                          style={{ color: "#ff0000", margin: "10px" }}
                          onClick={() => deleteTeachers(`${item.id}`)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                    border: " 1px solid #3F6AD8",
                    padding: "10px",
                  }}
                >
                  Ma'lumot topilmadi!
                </td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
      <Modal
        width={700}
        footer={false}
        title="O'qituvchi qo'shish"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
      >
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
          <Form.Item
            label="Rasm"
            name="photo"
            onChange={customRequest}
            rules={[
              { required: false, message: "Bu joyni to'ldirish majburiy!" },
            ]}
          >
            <Input
              type="file"
              id="rasmlar"
              required={false}
              style={{ marginBottom: "20px" }}
            />
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

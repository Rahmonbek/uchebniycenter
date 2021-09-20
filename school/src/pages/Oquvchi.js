import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import styles from "../css/davomat.module.css";
import { BsPersonPlusFill } from "react-icons/bs";
import { Form, Input, Select } from "antd";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { createStudent, deleteStudent, editStudent, getTraining } from "../host/Config";
import GLOBAL from "./Token";
import { Redirect } from "react-router";

export default function Oquvchiqoshish() {
  const [edit, setEdit] = useState(null);
  const [oquvchi, setOquvchi] = useState([]);
  const [group, setGroup] = useState([]);

  const getSS = () => {
    getTraining().then((res) => {
      setOquvchi(res.data.students);
      setGroup(res.data.group);
    });
  };

  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    onReset();
    setVisible(false);
  };
  // const { Option } = Select;
  const layout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 17,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const [form] = Form.useForm();

  const deleteStudents = (id) => {
    deleteStudent(id)
      .then((res) => {
        getSS();
      })
      .catch((err) => {
        console.log(err);
      });
    getSS();
  };

  const onFinish = (value) => {
    let formData = new FormData();

    formData.append("full_name", value.full_name ?? "");
    formData.append("phone_number", value.phone_number ?? "");
    formData.append("home_phone_number", value.home_phone_number ?? "");
    formData.append("group", value.group ?? null);
    formData.append("training_center", GLOBAL.id);

    if (edit === null) {
      createStudent(formData)
        .then((res) => {
          console.log(res);
          getSS();
        })
        .catch((err) => {
          console.log("err");
        });
    } else {
      editStudent(formData, edit)
        .then((res) => {
          console.log("succes");
          getSS();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    hideModal();
    getSS();
  };

  const onReset = () => {
    form.resetFields();
    setEdit(null);
  };

  const onFill = (x) => {
    var newoquvchi = oquvchi[x];
    form.setFieldsValue({
      full_name: newoquvchi.full_name,
      phone_number: newoquvchi.phone_number,
      home_phone_number: newoquvchi.home_phone_number,
      group: newoquvchi.group,
    });
    setEdit(newoquvchi.id);

    showModal();
  };

  useEffect(() => {
    getSS();
  },[]);

  return GLOBAL.id !== null ? (
    <div style={{ padding: "5%" }}>
      <div>
        <Button onClick={showModal}>
          O'quvchi qo'shish <BsPersonPlusFill style={{ color: "#3F6AD8", marginLeft: "10px", marginTop: "-5px", cursor: "pointer" }} />
        </Button>
      </div>
      <div style={{ padding: "10px", overflowX:'scroll'  }} className={styles.backgroundTable}>
        <h5>O'quvchilar ro'yxati</h5>
        <Table style={{ marginTop: "20px", color: "rgba(0,0,0,0.7)"}}>
          <thead>
            <tr>
              <th style={{ borderBottom: " 1px solid #3F6AD8", padding: "10px" }}>#</th>
              <th style={{ borderBottom: " 1px solid #3F6AD8", padding: "10px" }}>F.I.O</th>
              <th style={{ borderBottom: " 1px solid #3F6AD8", padding: "10px" }}>Telefoni</th>
              <th style={{ borderBottom: " 1px solid #3F6AD8", padding: "10px" }}>Uy telefoni</th>
              {/* <th style={{ borderBottom: ' 1px solid #3F6AD8', padding: '10px' }}>O'quv markazi</th> */}
              <th style={{ borderBottom: " 1px solid #3F6AD8", padding: "10px" }}>Gurux raqami</th>
              <th style={{ borderBottom: " 1px solid #3F6AD8", padding: "10px" }}>O'zgartirish/O'chirish</th>
            </tr>
          </thead>
          <tbody>
            {oquvchi && Array.isArray(oquvchi)
              ? oquvchi.map((item, key) => {
                  return (
                    <tr>
                      <td style={{ borderBottom: " 1px solid #3F6AD8", padding: "10px" }}>{key + 1}</td>
                      <td style={{ borderBottom: " 1px solid #3F6AD8", padding: "10px" }}>{item.full_name}</td>
                      <td style={{ borderBottom: " 1px solid #3F6AD8", padding: "10px" }}>{item.phone_number}</td>
                      <td style={{ borderBottom: " 1px solid #3F6AD8", padding: "10px" }}>{item.home_phone_number}</td>
                      {/* <td style={{ borderBottom: ' 1px solid #3F6AD8', padding: '10px' }}>
                      {item.training_center}
                    </td> */}
                      <td style={{ borderBottom: " 1px solid #3F6AD8", padding: "10px" }}>
                        {group
                          ? group.map((res) => {
                              return item.group === res.id ? res.name : "";
                            })
                          : ""}
                      </td>
                      <td style={{ borderBottom: " 1px solid #3F6AD8" }}>
                        <AiFillEdit
                          style={{ fontSize: "16px", color: "green", marginLeft: "5px", marginTop: "-5px" }}
                          onClick={() => {
                            onFill(`${key}`);
                          }}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <AiOutlineDelete
                          style={{ fontSize: "16px", color: "red", marginLeft: "5px", marginTop: "-5px" }}
                          onClick={() => {
                            deleteStudents(`${item.id}`);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </Table>
      </div>
      <Modal width={700} footer={false} title="O'quvchi qo'shish" visible={visible} onOk={hideModal} onCancel={hideModal}>
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
            name="home_phone_number"
            label="Uy telefon raqami:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="group"
            label="Gurux tanlang:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              {group.map((item) => (
                <Select.Option value={item.id}>{item.name}</Select.Option>
              ))}
            </Select>
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
  ) : (
    <Redirect to={"/cabinet"} />
  );
}

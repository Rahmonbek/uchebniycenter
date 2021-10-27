import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import styles from "../css/davomat.module.css";
import { BsPersonPlusFill } from "react-icons/bs";
import { Form, Input, Select } from "antd";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { createStudent, deleteStudent, editStudent } from "../host/Config";
import GLOBAL from "./Token";
import { Redirect } from "react-router";

export default function Oquvchiqoshish() {
  const [edit, setEdit] = useState(null);
  const [oquvchi, setOquvchi] = useState([]);
  const [group, setGroup] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const getSS = () => {
    setOquvchi(GLOBAL.training.students);
    setGroup(GLOBAL.training.group);
  };

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
  }, [oquvchi]);

  return GLOBAL.id !== null ? (
    <div style={{ padding: "5%" }}>
      <>
        <Button onClick={showModal} type="primary">
          O'quvchi qo'shish{" "}
          <BsPersonPlusFill
            style={{
              color: "white",
              marginLeft: "10px",
              marginTop: "-5px",
              cursor: "pointer",
            }}
          />
        </Button>
      </>
      <div style={{ padding: "10px" }} className={styles.backgroundTable}>
        <h5>O'quvchilar ro'yhati</h5>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>F.I.O</th>
              <th>Telefon raqami</th>
              <th>Uy telefon raqami</th>
              <th>Guruh raqami</th>
              <th>
                <div className={styles.tbody_element}>
                  O'zgartirish/O'chirish
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {oquvchi !== [] && Array.isArray(oquvchi) ? (
              oquvchi.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{item.full_name}</td>
                    <td>{item.phone_number}</td>
                    <td>{item.home_phone_number}</td>
                    <td>
                      {group
                        ? group.map((res) => {
                            return item.group === res.id ? res.name : "";
                          })
                        : ""}
                    </td>
                    <td>
                      <div className={styles.tbody_element}>
                        <AiFillEdit
                          style={{
                            color: "#3f6ad8",
                          }}
                          onClick={() => {
                            onFill(`${key}`);
                          }}
                        />
                        <AiOutlineDelete
                          style={{ color: "#ff0000" }}
                          onClick={() => {
                            deleteStudents(`${item.id}`);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Ma'lumot topilmadi!</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <Modal
        width={700}
        footer={false}
        title="O'quvchi qo'shish"
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

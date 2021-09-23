import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Row, Form } from "react-bootstrap";
import "../css/MalumotOzgartirish.css";
import { editTrainings, getTraining } from "../host/Config";
import ImageDemo from "./ImageDemo";

export default function Malumot_ozgartirish() {
  const [admin, setAdmin] = useState([]);
  const [photo, setPhoto] = useState(null);
  const getTrainings = () => {
    getTraining()
      .then((res) => {
        setAdmin(res.data);
      })
      .catch((err) => console.log(err));
  };
  const edittrainings = () => {
    let formData = new FormData();
    formData.append("email", document.getElementById("email").value ?? null);
    formData.append("name", document.getElementById("name").value ?? null);
    formData.append(
      "phone_number",
      document.getElementById("number").value ?? null
    );
    formData.append(
      "telegram",
      document.getElementById("telegram").value ?? null
    );
    formData.append(
      "instagram",
      document.getElementById("instagram").value ?? null
    );
    formData.append(
      "you_tube",
      document.getElementById("you_tube").value ?? null
    );
    formData.append("text", document.getElementById("text").value ?? null);
    formData.append("categories", admin.categories ?? null);
    formData.append("group", admin.group ?? null);
    formData.append("students", admin.students ?? null);
    formData.append("subjects", admin.subjects ?? null);
    formData.append("teachers", admin.teachers ?? null);
    formData.append("params", admin.params ?? null);
    console.log(
      document.getElementById("email").value,
      document.getElementById("name").value,
      document.getElementById("number").value,
      document.getElementById("telegram").value,
      document.getElementById("instagram").value,
      document.getElementById("you_tube").value,
      document.getElementById("text").value,
      admin.categories,
      admin.group,
      admin.students,
      admin.subjects,
      admin.teachers,
      admin.params
    );
    if (photo !== null) {
      formData.append("photo", photo ?? null);
    }
    editTrainings(formData, admin.id)
      .then((res) => {
        console.log(res);
        getTrainings();
      })
      .catch((err) => console.log(err));
  };
  const customRequest = (e) => {
    setPhoto(e.target.files[0]);
  };
  useEffect(() => {
    getTrainings();
  }, []);
  return admin !== [] ? (
    <div>
      <Form
        id="editForm"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
          marginBottom: "30px",
          padding: "40px",
        }}
      >
        <h1>O'quv markaz ma'lumotlari</h1>
        <Row>
          <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
            <Form.Group controlId="name">
              <Form.Label>O'quv markaz nomi</Form.Label>
              <Form.Control placeholder="IT Tower" defaultValue={admin.name} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                placeholder="info@gmail.com"
                defaultValue={admin.email}
              />
            </Form.Group>
            <Form.Group controlId="number">
              <Form.Label>Telefon raqam</Form.Label>
              <Form.Control
                placeholder="998*********"
                defaultValue={admin.phone_number}
              />
            </Form.Group>
            <Form.Group controlId="telegram">
              <Form.Label>Telegram link</Form.Label>
              <Form.Control
                placeholder="https://t.me/IT_Tower_Admin"
                defaultValue={admin.telegram}
              />
            </Form.Group>
          </div>
          <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
            <Form.Group controlId="file">
              <Form.Label>O'quv markaz logotipi</Form.Label>
              <Form.Control type="file" onChange={customRequest} />
            </Form.Group>
            <div className="w-100 h-100" style={{ position: "relative" }}>
              {ImageDemo(admin.photo)}
            </div>
          </div>
          <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
            <Form.Group controlId="instagram">
              <Form.Label>Instagram link</Form.Label>
              <Form.Control
                placeholder="https://t.me/IT_Tower_Admin"
                defaultValue={admin.instagram}
              />
            </Form.Group>
          </div>
          <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
            <Form.Group controlId="you_tube">
              <Form.Label>YouTube link</Form.Label>
              <Form.Control
                placeholder="https://t.me/IT_Tower_Admin"
                defaultValue={admin.you_tube}
              />
            </Form.Group>
          </div>
          <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
            <Form.Group controlId="text">
              <Form.Label>Qo'shimcha ma'lumot</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Izoh..."
                style={{ height: 150 }}
                defaultValue={admin.text}
              />
            </Form.Group>
          </div>
        </Row>
        <Button
          type="danger"
          htmlType="reset"
          style={{ marginLeft: "5px", marginRight: "10px" }}
        >
          Bekor qilish
        </Button>
        <Button type="primary" onClick={edittrainings}>
          Saqlash
        </Button>
      </Form>
    </div>
  ) : (
    ""
  );
}

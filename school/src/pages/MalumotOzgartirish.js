import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { Row, Form } from "react-bootstrap";
import "../css/MalumotOzgartirish.css";
import { getTraining } from "../host/Config";
import ImageDemo from "./ImageDemo";

export default function Malumot_ozgartirish() {
  const [admin, setAdmin] = useState([]);
  const getTrainings = () => {
    getTraining()
      .then((res) => setAdmin(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTrainings();
  }, []);
  return admin !== [] ? (
    <div>
      <Form id="editForm" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px", marginBottom: "30px", padding: "40px" }}>
        <h1>O'quv markaz ma'lumotlari</h1>
        <Row>
          <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
            <Form.Group controlId="name">
              <Form.Label>O'quv markaz nomi</Form.Label>
              <Form.Control placeholder="IT Tower" defaultValue={admin.name} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control placeholder="info@gmail.com" defaultValue={admin.email} />
            </Form.Group>
            <Form.Group controlId="number">
              <Form.Label>Telefon raqam</Form.Label>
              <Form.Control placeholder="998*********" defaultValue={admin.phone_number} />
            </Form.Group>
            <Form.Group controlId="tgLink">
              <Form.Label>Telegram link</Form.Label>
              <Form.Control placeholder="https://t.me/IT_Tower_Admin" defaultValue={admin.telegram} />
            </Form.Group>
          </div>
          <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
            <Form.Group controlId="file">
              <Form.Label>O'quv markaz logotipi</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <div className="w-100 h-100" style={{ position: "relative" }}>
              {ImageDemo(admin.photo)}
            </div>
          </div>
          <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
            <Form.Group controlId="insLink">
              <Form.Label>Instagram link</Form.Label>
              <Form.Control placeholder="https://t.me/IT_Tower_Admin" defaultValue={admin.instagram} />
            </Form.Group>
          </div>
          <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
            <Form.Group controlId="faLink">
              <Form.Label>YouTube link</Form.Label>
              <Form.Control placeholder="https://t.me/IT_Tower_Admin" defaultValue={admin.you_tube} />
            </Form.Group>
          </div>
          <div className="col-lg-6 offset-md-3 col-md-9 px-3 m-0">
            <Form.Group controlId="izoh">
              <Form.Label>Qo'shimcha ma'lumot</Form.Label>
              <Form.Control as="textarea" placeholder="Izoh..." style={{ height: 150 }} defaultValue={admin.text} />
            </Form.Group>
          </div>
        </Row>
        <Button type="danger" htmlType="reset" style={{ marginLeft: "5px", marginRight: "10px" }}>
          Bekor qilish
        </Button>
        <Button type="primary" htmlType="submit">
          Saqlash
        </Button>
      </Form>
    </div>
  ) : (
    ""
  );
}

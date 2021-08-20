import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/logo.png";
import styles from "../css/register.module.css";
import { Button, Col, Container, FormGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { createStudent } from "../host/Config";
import GLOBAL from "./Token";

export default class Registration extends Component {
  onFinish = (value) => {
    let formData = new FormData();
    formData.append("full_name", value.full_name ?? "");
    formData.append("phone_number", value.phone_number ?? "");
    formData.append("home_phone_number", value.home_phone_number ?? "");
    formData.append("group", value.group ?? null);
    formData.append("training_center", GLOBAL.id);
    createStudent(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err");
      });
  };

  render() {
    return (
      <div>
        <div className={styles.bg}>
          <Container>
            <div className={styles.content}>
              <Row>
                <Col lg={6} md={12} sm={12} className={styles.courses}>
                  <div className={styles.logo}>
                    <img src={logo} alt="" />
                  </div>
                </Col>
                <Col lg={6} md={12} sm={12} className={styles.personal}>
                  <h2>Registratsiya</h2>
                  <Form>
                    <label className="mb-2" for="cars">
                      Ismingiz:
                    </label>
                    <br />
                    <input type="text" placeholder="Ismingizni kiriting" required />
                    <br />
                    <label className="mb-2" for="cars">
                      Familiyangiz:
                    </label>
                    <br />
                    <input type="text" placeholder="Familiyangizni kiriting" required />
                    <br />
                    <label className="mb-2" for="cars">
                      Telefon raqamingiz:
                    </label>
                    <br />
                    <input type="text" placeholder="+9989_ ___ __ __" required />
                    <br />
                    <label className="mb-2" for="cars">
                      Qo'shimcha telefon raqam:
                    </label>
                    <br />
                    <input type="text" placeholder="+9989_ ___ __ __" required />
                    <Button className={styles.sign_up} type="submit">
                      Registratsiya
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "../css/login.module.css";
import GLOBAL from "./Token";
import { createLogin, getTraining } from "../host/Config";
import { message } from "antd";

function Login() {
  let history = useHistory();
  function saveData() {
    var config = {
      email: document.getElementById("formUsername").value,
      password: document.getElementById("formPassword").value,
    };
    createLogin(config)
      .then((res) => {
        getTraining({ key: res.data.key })
          .then((res1) => {
            localStorage.setItem("token", res.data.key);
            GLOBAL.training = res1.data;
            GLOBAL.id = res1.data.id;
            history.push("/cabinet");
          })
          .catch((err) => {
            console.log(err);
            message.error("Bunday o'quv markaz topilmadi!");
          });
      })
      .catch((err) => alert("Email yoki parol noto'g'ri!!!"));
  }
  return (
    <div className={styles.bd}>
      <div className={styles.bgLogin}>
        <div className={styles.formLogin}>
          <div className={styles.Logo}></div>
          <h1>Admin</h1>
          <div style={{ textAlign: "left" }}>
            <Form>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label className={styles.labelForm}>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  className={styles.inputForm}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className={styles.labelForm}>Parol</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Parol"
                  className={styles.inputForm}
                />
              </Form.Group>

              <p className={styles.content}>
                Agarda hali tizimda mavjud bo`lmasangiz
                <Link to="/lcenter">
                  {/* <Link to="/lcenter"> */}
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "12.5px",
                      fontWeight: "500",
                      display: "inline-block",
                      marginBottom: "0px",
                      marginLeft: "5px",
                    }}
                  >
                    ro'yxatdan o'ting!
                  </p>
                </Link>
              </p>
              <p className={styles.content}>
                Parolingizni
                <Link to="/sigup">
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "12.5px",
                      fontWeight: "500",
                      display: "inline-block",
                      marginBottom: "0px",
                      marginLeft: "5px",
                    }}
                  >
                    unitdingizmi!
                  </p>
                </Link>
              </p>
              <Button
                variant="primary"
                type="button"
                onClick={saveData}
                style={{ backgroundColor: "#1A86D0" }}
                className={styles.btnInput}
              >
                Kirish
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

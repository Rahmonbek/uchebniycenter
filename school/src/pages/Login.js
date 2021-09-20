import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "../css/login.module.css";
import GLOBAL from "./Token";
import { createLogin } from "../host/Config";

function Login() {
  GLOBAL.id = null;
  let history = useHistory();
  function saveData() {
    var config = {
      email: document.getElementById("formUsername").value,
      password: document.getElementById("formPassword").value,
    };
    createLogin(config)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        GLOBAL.id = res.data.id;
        history.push("/cabinet");
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
                    ro'yxatdan o'ting!
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

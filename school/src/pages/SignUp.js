import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styles from "../css/signup.module.css";
import { useHistory } from "react-router-dom";
import GLOBAL from "./Token";
import { createSignUp } from "../host/Config";

import Login from "./Login";
export default function SignUp() {
  const [signusername, setSignUsername] = useState("");
  const [signmail, setSignMail] = useState("");
  const [signpassword, setSignPassword] = useState("");
  const [signpasswordconfirm, setSignPasswordConfirm] = useState("");

  GLOBAL.id = null;
  let history = useHistory();
  function saveDataSignUp() {
    var config = {
      username: signusername,
      email: signmail,
      password1: signpassword,
      password2: signpasswordconfirm,
    };
    createSignUp(config)
      .then((res) => {
        localStorage.setItem("token", res.data.key);
        // GLOBAL.id = res.data.id;
        GLOBAL.email = signmail;
        history.push("/lcenter");
        console.log("Res data", res.data);
      })
      .catch((err) => {
        console.log("Error catch", err);
      });
    console.log(
      "newname=",
      signusername,
      "; mail=",
      signmail,
      "; parol=",
      signpassword,
      "; parolConfirm=",
      signpasswordconfirm
    );
  }

  const handleChangeSignUser = (event) => {
    setSignUsername(event.target.value);
  };
  const handleChangeSignMail = (event) => {
    setSignMail(event.target.value);
  };
  const handleChangeSignPass = (event) => {
    setSignPassword(event.target.value);
  };
  const handleChangeSignPassConfirm = (event) => {
    setSignPasswordConfirm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(event);
  };
  return (
    <div className={styles.bd}>
      <div className={styles.bgLogin}>
        <div className={styles.formLogin}>
          <div className={styles.Logo}></div>
          <h1>Create Account!</h1>
          <div style={{ textAlign: "left" }}>
            <Form>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label className={styles.labelForm}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className={styles.inputForm}
                  value={signusername}
                  onChange={handleChangeSignUser}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className={styles.labelForm}>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={signmail}
                  className={styles.inputForm}
                  onChange={handleChangeSignMail}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className={styles.labelForm}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  className={styles.inputForm}
                  value={signpassword}
                  onChange={handleChangeSignPass}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPasswordConfirm">
                <Form.Label className={styles.labelForm}>
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="confirm password"
                  className={styles.inputForm}
                  value={signpasswordconfirm}
                  onChange={handleChangeSignPassConfirm}
                  required
                />
              </Form.Group>
              <div className={styles.EnterLogIn} style={{ display: "flex" }}>
                <p>Already have an account? </p>
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
                  {" "}
                  <Link to="/login"> Log in</Link>
                </p>
              </div>

              <Button
                variant="primary"
                type="button"
                // onClick={saveData}
                style={{ backgroundColor: "#1A86D0" }}
                className={styles.btnInput}
                onClick={() => saveDataSignUp()}
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

import React, { Component } from "react";
import style from "../css/LearningCenter.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { Form, Input, Modal } from "antd";
import img1 from "../img/lgg.png";
import { Link, Redirect } from "react-router-dom";

import {
  createLogin,
  createRegister,
  createSignUp,
  editTraining,
  getTraining,
  getTrainingS,
  verify1,
} from "../host/Config";
import GLOBAL from "./Token";
import { TiArrowBackOutline } from "react-icons/ti";
import { st } from "../host/Host";

export default class LearningCenter extends Component {
  state = {
    login: false,
    ft: false,
    isModalVisible: false,
    coordinates: null,
    data: {},
    photo: "",
    coords: [],
    email: "",
    password1: "",
    rows: [],
    user: [],
    username:[], 
  };

 
  
  register = () => {
    let formData = new FormData();
    formData.append("username", document.getElementById("username").value ?? "");
    formData.append("email", document.getElementById("email").value ?? "");  
    formData.append("name", document.getElementById("name").value ?? "");   
    formData.append("password1",document.getElementById("password1").value ?? "" );
    formData.append("password2",document.getElementById("password2").value ?? "" );

    createRegister(formData)
      .then((res) => {
        this.setState({
          email: document.getElementById("email").value,
          username: document.getElementById("username").value,
          name: document.getElementById("name").value,
          password1: document.getElementById("password1").value,
        });
        var g = res.data;
        editTraining(g, res.data.id)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        return alert("Email tizimda mavjud iltimos boshqa email kiriting!");
      });
  };
  onchange = (e) => {
    console.log(e.target.files[0]);
    this.setState({ photo: e.target.files[0] });
  };
  // --------------------------------
  onCodeSubmit = () => {
    var data = {
      email: this.state.email,
      kod: document.getElementById("verify").value,
    };
    verify1(data) 
      .then((res) => {
        console.log(res);
        var config = {
          email: this.state.email,
          username: this.state.username,
        };
        createSignUp(config)
          .then((res) => {
            window.localStorage.setItem("token", res.data.key);
            getTraining(res.data.key).then((res) => (GLOBAL.training = res.data ));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  // ---------------------------------
  // getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.getCoordsA);
  //   } else {
  //     alert("GeoLocation not enabled");
  //   }
  // };

  // getCoordsA = (pos) => {
  //   console.log(pos);
  //   this.setState({
  //     coords: [pos.coords.latitude, pos.coords.longitude],
  //   });
  // };
  componentDidMount() {
    getTrainingS()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
 
  }
  render() {
    return (
      <div>
        {this.state.login !== true ? (
          GLOBAL.id === null ? (



            this.state.email !== "" ? (


              <div className="container">
                <div
                  className="position-absolute top-50 start-50 translate-middle text-center"
                  style={{
                    width: "400px",
                    padding: "25px",
                    backgroundColor: "white",
                    border: "1px solid #f1f4f6",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <h3 className="mb-5">
                    Emailingizga jo`natilgan kodni kiriting!
                  </h3>
                  <Form>  
                           
                             
                         
                    <Form.Item name="verify"> 
                      <Input
                                placeholder="Email "
                                type="email"
                                id="email"
                                // defaultValue={GLOBAL.email}
                                className={style.inputField}
                                required
                              />
                      <Input id="verify" placeholder="Kodni kiriting!" />
                    </Form.Item>
                    <Button type="primary" onClick={this.onCodeSubmit}>
                      Yuborish
                    </Button>
                  </Form>
                </div>
              </div>


            ) : (


                <div className="container">
                <div
                  className="position-absolute top-50 start-50 translate-middle text-center"
                  style={{
                    width: "400px",
                    padding: "25px",
                    backgroundColor: "white",
                    border: "1px solid #f1f4f6",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                ><Form>
                <div className={style.input}>
                              <input
                                placeholder=" "
                                type="email"
                                id="email"
                                // defaultValue={GLOBAL.email}
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>Email:</label>
                            </div>
                            <div className={style.input}>
                              <input
                                placeholder=" "
                                type="text"
                                id="name"
                                // defaultValue={GLOBAL.email}
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>Title:</label>
                            </div>
                            <div className={style.input}>
                              <input
                                placeholder=" "
                                type="password"
                                id="password1"
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>Parol:</label>
                            </div>
                            <div className={style.input}>
                              <input
                                placeholder=" "
                                type="password"
                                id="password2"
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>Parol:</label>
                            </div>
                            <div className={style.input}>
                              <input
                                placeholder=" "
                                type="text"
                                id="username"
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>Username:</label>
                            </div>
                    <Button type="primary" onClick={this.register}>
                      Yuborish
                    </Button>
                  </Form>
                </div>
              </div>)
          ) : (


            <Redirect to={`/lcenter`} />
          )

        ) : (

          <Redirect to={`/login`} />
        )}
        
      </div>
    );
  }
}

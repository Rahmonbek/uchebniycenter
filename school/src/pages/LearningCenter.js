import React, { Component } from "react";
import style from "../css/LearningCenter.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { Form, Input, Modal } from "antd";
import img1 from "../img/lgg.png";
import { Link, Redirect } from "react-router-dom";
// import img2 from "../img/lc.png";

import { YMaps, Map, Clusterer, Placemark, TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl, GeoObject } from "react-yandex-maps";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { createLogin, createRegister, editTraining, getTraining, getTrainingS, verify } from "../host/Config";
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
    password: "",
    rows: [],
    user: [],
  };
  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  onMapClick = (e) => {
    const coords = e.get("coords");
    this.setState({ coords: coords });
    console.log(coords);
  };
  onMapClick = (e) => {
    var coords = e.get("coords");

    this.setState({
      coords: coords,
    });
  };
  handleOk = () => {
    this.handleCancel();
  };
  register = () => {
    let formData = new FormData();
    formData.append("name", document.getElementById("name").value ?? "");
    formData.append("email", document.getElementById("email").value ?? "");
    // formData.append("phone_number", document.getElementById("phonenumber").value ?? "");
    formData.append("password", document.getElementById("password").value ?? "");
    // formData.append("telegram", document.getElementById("telegram").value ?? "");
    // formData.append("instagram", document.getElementById("instagram").value ?? "");
    // formData.append("you_tube", document.getElementById("youtube").value ?? "");
    // formData.append("text", document.getElementById("text").value ?? "");
    // formData.append("languages", "uz");

    // if (this.state.photo !== "") {
    //   formData.append("photo", this.state.photo ?? null);
    // } else {
    //   return alert("Logotip rasmini kiritmadingiz!");
    // }
    createRegister(formData)
      .then((res) => {
        this.setState({ email: document.getElementById("email").value, password: document.getElementById("password").value });
        var g = res.data;
        g.param = this.state.coords;
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
  onCodeSubmit = () => {
    var data = {
      email: this.state.email,
      kod: document.querySelector("#verify").value,
    };
    verify(data)
      .then((res) => {
        console.log(res);
        var config = {
          email: this.state.email,
          password: this.state.password,
        };
        createLogin(config)
          .then((res) => {
            window.localStorage.setItem("token", res.data.token);
            GLOBAL.id = res.data.id;
            getTraining().then((res) => (GLOBAL.training = res.data));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordsA);
    } else {
      alert("GeoLocation not enabled");
    }
  };

  getCoordsA = (pos) => {
    console.log(pos);
    this.setState({
      coords: [pos.coords.latitude, pos.coords.longitude],
    });
  };
  componentDidMount() {
    getTrainingS()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.getLocation();
  }
  render() {
    return (
      <>
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
                      <Input placeholder="Kodni kiriting!" />
                    </Form.Item>
                    <Button type="primary" onClick={this.onCodeSubmit}>
                      Yuborish
                    </Button>
                  </Form>
                </div>
              </div>
            ) : (
              <div className={style.mat}>
                <Modal
                  title="Manzilni kiritish"
                  bodyStyle={{ padding: "0" }}
                  visible={this.state.isModalVisible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <YMaps>
                    <Map
                      onClick={this.onMapClick}
                      width="100%"
                      height="65vh"
                      defaultState={{
                        center: [41.268383899999996, 69.22814149999999],
                        zoom: 6,
                      }}
                    >
                      <Clusterer
                        options={{
                          preset: "islands#invertedVioletClusterIcons",
                          groupByCoordinates: false,
                        }}
                      >
                        {this.state.rows.map((info, index) => {
                          return (
                            <Placemark
                              key={index}
                              geometry={
                                info.param !== [] || info.param !== null
                                  ? info.param
                                  : []
                              }
                              properties={{
                                balloonContent: info.name,
                              }}
                            />
                          );
                        })}
                      </Clusterer>
                      <Clusterer
                        options={{
                          preset: "islands#invertedVioletClusterIcons",
                          groupByCoordinates: false,
                        }}
                      >
                        <Placemark
                          key={-1}
                          geometry={this.state.coords}
                          // properties={{
                          // }}
                        />
                      </Clusterer>

                      <GeolocationControl options={{ float: "left" }} />
                      <TypeSelector options={{ float: "right" }} />
                      <TrafficControl options={{ float: "right" }} />
                      <RouteButton options={{ float: "right" }} />
                      <ZoomControl options={{ float: "left" }} />
                    </Map>
                  </YMaps>
                </Modal>
                <div className={this.state.ft ? style.javon1 : style.javon}>
                  <div
                    className={this.state.ft ? style.adPanel1 : style.adPanel}
                  >
                    <div className={style.rasm}>
                      <div
                        className={this.state.ft ? style.rasm11 : style.rasm1}
                      >
                        <div className={style.muqova1}>
                          <img src={img1} alt="" />
                          <br />
                          <h1>
                            Muvoffaqiyatli
                            <br />
                            O'quv Markazlari
                          </h1>
                          <br />
                        </div>
                        <div className={style.muqova2}>
                          <h1>
                            <Link
                              to="/login"
                              style={{ fontSize: "30px", color: "white" }}
                            >
                              <TiArrowBackOutline />
                            </Link>
                            <br />
                            O'quv Markazlari
                          </h1>
                          <p
                            className={style.btn}
                            onClick={() => this.setState({ ft: true })}
                          >
                            Ro'yxatdan o'tish <EventAvailableOutlinedIcon />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={style.forf}
                      style={{ padding: "0xp 0px 12px 0px" }}
                    > 
                      <h3 onClick={() => this.setState({ ft: false })}>
                        O'quv markazi haqida
                      </h3>
                      <br />
                      
                      <form className={style.cardForm}>
                        <Row>
                          <Col sm={9}>
                            <div className={style.input}>
                              <input
                                placeholder=" "
                                type="text"
                                id="name"
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>
                                O'quv markazining nomi
                              </label>
                            </div>
                            <div className={style.input}>
                              <input
                                placeholder=" "
                                type="email"
                                id="email"
                                // defaultValue={GLOBAL.email}
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>Email</label>
                            </div>
                            <div className={style.input}>
                              <input
                                placeholder=" "
                                type="password"
                                id="password"
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>Parol</label>
                            </div>
                            {/* <Row>
                              <Col xs={2}>
                                <Button
                                  className={style.btnm}
                                  onClick={() =>
                                    this.setState({ isModalVisible: true })
                                  }
                                >
                                  <LocationOnIcon />
                                </Button>
                              </Col>
                              <Col xs={10}>
                                <br />{" "}
                                <b>
                                  {" "}
                                  Bu tugmani bosib o'z o'quv markaziz binosini
                                  xaritadan belgilab qo'ying !!!
                                </b>
                              </Col>
                            </Row> */}
                            <br />
                          </Col>
                          {/* <Col sm={3} className={style.logoinp}>
                            <label for="inpimg">
                              <i>Logotip kiritish joyi</i>
                            </label>
                            <input
                              type="file"
                              onChange={this.onchange}
                              id="inpimg"
                              accept="image/*"
                            />
                          </Col> */}
                          {/* <Col sm={6}>
                    <div className={style.input}>
                      <select className={style.inputField}>
                        <option value="1">O'zbek tili</option>
                        <option value="2">Rus tili</option>
                        <option value="3">Ingliz tili</option>
                      </select>
                      <label className={style.inputLabel}>Languages</label>
                    </div>
                  </Col> */}
                          {/* <Col sm={6}>
                            <div className={style.input}>
                              <input
                                placeholder=" "
                                type="text"
                                id="phonenumber"
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>
                                Telefon
                              </label>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className={style.input}>
                              <input
                                placeholder=" "
                                type="text"
                                id="telegram"
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>
                                Telegram manzili
                              </label>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className={style.input}>
                              <input
                                placeholder=" "
                                type="text"
                                id="instagram"
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>
                                Instagram manzili
                              </label>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className={style.input}>
                              <input
                                placeholder=" "
                                type="text"
                                id="youtube"
                                className={style.inputField}
                                required
                              />
                              <label className={style.inputLabel}>
                                YouTube manzili
                              </label>
                            </div>
                          </Col> */}
                          {/* <Col sm={12}>
                            <div className={style.input}>
                              <textarea
                                placeholder=" "
                                rows="3"
                                id="text"
                                className={style.inputField}
                                required
                              ></textarea>
                              <label className={style.inputLabel}>
                                Qo'shimcha malumot...
                              </label>
                            </div>
                          </Col> */}

                          <Col xs={7} sm={9}></Col>
                          <Col xs={5} sm={3} style={{ paddingTop: "15px" }}>
                            <button
                              type="button"
                              onClick={this.register}
                              className={style.subm}
                            >
                              Tasdiqlash
                            </button>
                          </Col>
                        </Row>
                      </form>
                    </div> 
                  </div>
                </div>
              </div>
            )
          ) : (
            <Redirect to={`/cabinet`} />
          )
        ) : (
          <Redirect to={`/login`} />
        )}
      </>
    );
  }
}

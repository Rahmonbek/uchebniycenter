import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import style from "../css/Dashboard.module.css";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import {
  Bar,
  Tooltip,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
} from "recharts";

export default class Dashboard extends Component {
  state = {
    data: [
      {
        name: "2021 Mart",
        "O'quvchilar": 24,
        Foyda: 2400000,
        Guruhlar: 4,
      },
      {
        name: "2021 Aprel",
        "O'quvchilar": 13,
        Foyda: 1300000,
        Guruhlar: 3,
      },
      {
        name: "2021 May",
        "O'quvchilar": 98,
        Foyda: 9800000,
        Guruhlar: 8,
      },
      {
        name: "2021 Iyun",
        "O'quvchilar": 39,
        Foyda: 3900000,
        Guruhlar: 9,
      },
      {
        name: "2021 Iyul",
        "O'quvchilar": 48,
        Foyda: 4800000,
        Guruhlar: 8,
      },
      {
        name: "2021 Avgust",
        "O'quvchilar": 38,
        Foyda: 3800000,
        Guruhlar: 8,
      },
      {
        name: "2021 Mart",
        "O'quvchilar": 43,
        Foyda: 4300000,
        Guruhlar: 3,
      },
      {
        name: "2021 Mart",
        "O'quvchilar": 24,
        Foyda: 2400000,
        Guruhlar: 4,
      },
      {
        name: "2021 Aprel",
        "O'quvchilar": 13,
        Foyda: 1300000,
        Guruhlar: 3,
      },
      {
        name: "2021 May",
        "O'quvchilar": 98,
        Foyda: 9800000,
        Guruhlar: 8,
      },
      {
        name: "2021 Iyun",
        "O'quvchilar": 39,
        Foyda: 3900000,
        Guruhlar: 9,
      },
      {
        name: "2021 Iyul",
        "O'quvchilar": 48,
        Foyda: 4800000,
        Guruhlar: 8,
      },
      {
        name: "2021 Avgust",
        "O'quvchilar": 38,
        Foyda: 3800000,
        Guruhlar: 8,
      },
      {
        name: "2021 Mart",
        "O'quvchilar": 43,
        Foyda: 4300000,
        Guruhlar: 3,
      },
    ],
    grafWidth: 0,
  };
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className={style.head}>
          <h1 className={style.h}>Statistika</h1>
          <Row>
            <Col lg="4" md="6" sm="12">
              <div className={style.cards}>
                <div className={style.cardItem}>
                  <div className={style.icon}>
                    <div
                      className={style.iconItem}
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#f9d40d",
                      }}
                    >
                      <GroupOutlinedIcon
                        style={{ color: "white", fontSize: "30px" }}
                      />
                    </div>
                  </div>

                  <div className={style.cardText}>
                    <p className={style.xira}> O'quvchilar</p>
                    <h1 className={style.title}>200</h1>
                    <p className={style.xira2}>
                      <span style={{ fontWeight: "bold", color: "#f9d40d" }}>
                        14 %
                      </span>{" "}
                      o'sdi
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12">
              <div className={style.cards}>
                <div className={style.cardItem}>
                  <div className={style.icon}>
                    <div
                      className={style.iconItem}
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#f9d40d",
                      }}
                    >
                      <GroupOutlinedIcon
                        style={{ color: "white", fontSize: "30px" }}
                      />
                    </div>
                  </div>

                  <div className={style.cardText}>
                    <p className={style.xira}> O'qtuvchilar</p>
                    <h1 className={style.title}>10</h1>
                    <p className={style.xira2}>
                      <span style={{ fontWeight: "bold", color: "#f9d40d" }}>
                        10 %
                      </span>{" "}
                      o'sdi
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12">
              <div className={style.cards}>
                <div className={style.cardItem}>
                  <div className={style.icon}>
                    <div
                      className={style.iconItem}
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#f9d40d",
                      }}
                    >
                      <PersonOutlinedIcon
                        style={{ color: "white", fontSize: "30px" }}
                      />
                    </div>
                  </div>

                  <div className={style.cardText}>
                    <p className={style.xira}> Guruhlar</p>
                    <h1 className={style.title}>30</h1>
                    <p className={style.xira2}>
                      <span style={{ fontWeight: "bold", color: "#f9d40d" }}>
                        15 %
                      </span>{" "}
                      o'sdi
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className={style.graf}>
          <h4 className={style.titleh}>O'quvchilar</h4>
          <div
            style={{
              width: "200px",
              height: "6px",
              marginBottom: "20px",
              backgroundColor: "#f9d40d",
              marginLeft: "30px",
            }}
          ></div>
          <Row style={{ justifyConten: "center" }}>
            <Col lg={4} md={6} sm={12}>
              <div style={{ overFlowX: "hidden", width: "100%" }}>
                <BarChart
                  style={{
                    backgroundColor: "white",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  width={900}
                  height={300}
                  data={this.state.data}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="O'quvchilar" fill="#f9d40d" />
                </BarChart>
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.graf}>
          <h4 className={style.titleh}>Foyda</h4>
          <div
            style={{
              width: "200px",
              height: "6px",
              marginBottom: "20px",
              backgroundColor: "green",
              marginLeft: "30px",
              marginBottom: "20px",
            }}
          ></div>
          <Row style={{ justifyConten: "center" }}>
            <Col lg={4} md={6} sm={12}>
              <div style={{ overFlowX: "hidden", width: "100%" }}>
                <BarChart
                  style={{
                    backgroundColor: "white",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  width={900}
                  height={300}
                  data={this.state.data}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Foyda" fill="green" />
                </BarChart>
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.graf}>
          <h4 className={style.titleh}>Guruhlar</h4>
          <div
            style={{
              width: "200px",
              height: "6px",
              marginBottom: "20px",
              backgroundColor: "#de0202",
              marginLeft: "30px",
            }}
          ></div>
          <Row style={{ justifyConten: "center" }}>
            <Col lg={4} md={6} sm={12}>
              <div style={{ overFlowX: "hidden", width: "100%" }}>
                <BarChart
                  style={{
                    backgroundColor: "white",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  width={900}
                  height={300}
                  data={this.state.data}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Guruhlar" fill="#de0202" />
                </BarChart>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

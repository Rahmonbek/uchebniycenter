import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NeuTextInput } from "neumorphism-react";
import { getGroups, getStudents, createDavomat, editDavomat, getAttendance,getTraining } from "../host/Config";
import { Card, Button, IconButton, Divider, Checkbox } from "ui-neumorphism";
import { BiRefresh } from "react-icons/bi";
import GLOBAL from "./Token";

export default function OqituvchiTable() {
  const [date, setDate] = useState("");
  const getDate = (val) => {
    setDate(val);
    console.log(date);
  };
  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);
  const [studentArray, setStudenarray] = useState([]);
  const [numberGroup, getNumberGroup] = useState([1]);
  const [number, setNumber] = useState(1);
  const getNumber = (id) => {
    setNumber(id);
    setNumber(id);
  };

 const  getTraningS=()=>{
    getTraining().then(res=>{
      setStudents(res.data.students) 
      setGroups(res.data.group) 
    }).catch(err=>{console.log(err)})
   
  }
  const [attendance, setAttendance] = useState([]);
  const getAttendances = () => {
    getAttendance()
      .then((res) => (
        (parseInt(res.data.training_center)==parseInt(GLOBAL.id))? setAttendance(res.data):''
      ))
      .catch((err) => {
        console.log(err);
      });
  };
  const [arr, setArr] = useState([]);
  const get = (val, e) => {
    if (date === "") {
      setDate(e.day);
    }
    setEdit(e.id);
    console.log(e.students);
    e.students.map((item2) => {
      return val.id === item2
        ? (e.students = e.students.filter(function (abs) {
            return abs !== item2;
          }))
        : e.students.push(val.id);
    });
    console.log(e.students);
    setStudenarray(e.students);
  };
  const getN = (val) => {
    studentArray.push(val.id);
    setStudenarray(studentArray);
  };
  const [edit, setEdit] = useState(null);
  const getStudent = () => {
    console.log(studentArray);
    var newObj = {
      day: date,
      training_center: GLOBAL.id,
      group: number,
      students: studentArray,
    };
    if (edit === null) {
      createDavomat(newObj)
        .then((res) => {
          console.log();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      editDavomat(newObj, edit)
        .then((res) => {
          console.log();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const [studentBygroup, setStudentBygroup] = useState([]);
  const getS = () => {
    console.log(attendance)
    var studentBygroup = students.filter(function (el) {
      return el.group == number;
    });
    setStudentBygroup(studentBygroup);
  };
  useEffect(() => {
    getS();
    getAttendances();
    getTraningS( )
  }, [number, students, numberGroup]);
  return (
    <div>
      <Container fluid style={{ padding: "5%" }}>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Row>
              {groups && Array.isArray(groups)
                ? groups.map((item, key) => {
                    return (
                      <Col lg={1} style={{ marginLeft: "20px" }}>
                        <Button active={number == item.id ? true : false} onClick={() => getNumber(`${item.id}`)}>
                          {" "}
                          {item.name}
                        </Button>
                      </Col>
                    );
                  })
                : ""}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={12} style={{ marginTop: "100px" }}>
            <Card>
              <div style={{ overflowY: "scroll", display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
                <Row>
                  <div style={{ paddingTop: "60px", paddingLeft: "16px", width: "200px" }}>
                    <Card inset style={{ padding: "13px" }}>
                      {studentBygroup && Array.isArray(studentBygroup)
                        ? studentBygroup.map((item) => {
                            return (
                              <div>
                                <p>{item.full_name}</p>
                                <Divider dense />
                              </div>
                            );
                          })
                        : ""}
                    </Card>
                  </div>
                  {attendance.map((val, key5) => {
                    return number == val.group ? (
                      <div style={{ paddingTop: "15px", width: "200px" }}>
                        {/* <Button size='small'  color='#4CAF50'>{val.day}</Button> */}
                        <NeuTextInput type="date" color="#E4EBF5" onChange={(newValue) => getDate(newValue, val.id, val.day)} width="123px" height="30px" distance={1} value={val.day} fontSize={12} fontColor="#4CAF50" />
                        {studentBygroup && Array.isArray(studentBygroup)
                          ? studentBygroup.map((item, key) => {
                              return <div style={{ marginBottom: "15px", marginTop: "10px" }}>{item.group == val.group ? <Checkbox checked={val.students.includes(item.id)} onClick={() => get(item, val)} color="var(--success)" style={{ display: "block" }} /> : ""}</div>;
                            })
                          : ""}
                        <IconButton rounded text={false} bgColor={"#E4EBF5"} onClick={() => getStudent()} style={{ fontSize: "15px", marginTop: "10px", marginLeft: "5px", marginBottom: "5px" }}>
                          <BiRefresh style={{ color: "#4CAF50" }} />
                        </IconButton>
                      </div>
                    ) : (
                      ""
                    );
                  })}
                  <div style={{ paddingTop: "15px", width: "200px" }}>
                    <NeuTextInput type="date" color="#E4EBF5" width="123px" height="30px" distance={1} placeholder="01.01.2021" fontSize={12} fontColor="#4CAF50" onChange={(newValue) => getDate(newValue)} />
                    {studentBygroup && Array.isArray(studentBygroup)
                      ? studentBygroup.map((item, key) => {
                          return (
                            <div style={{ marginBottom: "15px", marginTop: "10px" }}>
                              <Checkbox onClick={() => getN(item)} color="var(--success)" style={{ display: "block" }} />
                            </div>
                          );
                        })
                      : ""}
                    <Button size="small" onClick={() => getStudent()} style={{ margin: "15px" }}>
                      Saqlash
                    </Button>
                  </div>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../css/news.module.css";
import { Button, Input, Select, Modal, Form, DatePicker, TimePicker } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/modalStyle.css";

import style from "../css/courses.module.css";
import "../App.css";
import { createGroup, deleteGroupC, editGroup, getCategory, getTraining } from "../host/Config";
import "aos/dist/aos.css";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ImageDemo from "./ImageDemo";
import GLOBAL from "./Token";
// import moment from 'moment';
import "moment/locale/zh-cn";

const { TextArea } = Input;

export default function Guruhlar() {
  const [expanded, setExpanded] = useState([]);
  const [teachers, setteachers] = useState([]);
  const [edit, setEdit] = useState(null);
  const [category, setCategory] = useState([]);

  const [teacher, setTeacher] = useState([]);
  const [grlar, setGrlar] = useState([]);
  const [show, setShow] = useState(false);
  const [guruh, setGuruh] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [datef, setDatef] = useState("");
  const [timef, setTimef] = useState("");
  const [image, setImage] = useState("");
  const [form] = Form.useForm();
  const [subjects, setSubjects] = useState([]);
  const getTrainingS = () => {
    getTraining()
      .then((res) => {
        setGrlar(res.data.group);
        setSubjects(res.data.subjects);
        setTeacher(res.data.teachers);
        console.log(teacher);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const chengeDate = (date, dateString) => {
    setDate(dateString);
    setDatef(date);
  };
  const chengeTime = (date, dateString) => {
    setTimef(date);
    setTime(dateString);
  };

  const handleCancel = () => {
    setteachers([]);
    setEdit(null);
    setDate("");
    setGuruh(null);
    setTime("");
    setDatef("");
    setTimef("");
    setImage("");
    onReset();

    var g = document.querySelectorAll("#percent");

    for (let i = 0; i < g.length; i++) {
      g[i].value = "";
    }
    setShow(false);
  };
  const customRequest = (e) => {
    let imageT = e.target.files[0];

    setImage(imageT);

    console.log(imageT);
  };

  useEffect(() => {
    getTrainingS();
    var fer = [];
    for (let i = 0; i < grlar.length; i++) {
      fer.push(false);
    }

    getCategory()
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setExpanded(fer);
  }, []);

  const echoTeacher = (a) => {
    var te = "";
    console.log(teacher);
    for (let i = 0; i < teacher.length; i++) {
      console.log(teacher[i]);
      if (teacher[i].id === a) {
        te = teacher[i].full_name;
      }
    }

    return te;
  };

  const echoCategory = (a) => {
    var te = "";
    for (let i = 0; i < category.length; i++) {
      if (category[i].id === a) {
        te = category[i].name_uz;
      }
    }
    return te;
  };

  const echoSubjects = (a) => {
    var te = "";
    for (let i = 0; i < subjects.length; i++) {
      if (subjects[i].id === a) {
        te = subjects[i].name;
      }
    }
    return te;
  };

  const onFinish = (value) => {
    var percent = [];
    var g = document.querySelectorAll("#percent");

    for (let i = 0; i < g.length; i++) {
      percent[i] = g[i].value;
    }

    if (edit === null) {
      console.log(value);

      let formData = new FormData();

      formData.append("name", value.name ?? "");

      formData.append("duration", value.duration ?? null);
      formData.append("image", image ?? null);
      formData.append("start_date", date ?? "");
      formData.append("description", value.description ?? "");

      formData.append("money", value.money ?? "");

      formData.append("training_center", GLOBAL.id);

      createGroup(formData)
        .then((res) => {
          var config = {
            percent: percent ?? null,
            teacher: value.teacher ?? [],
            category: value.category ?? [],
            subject: value.subject ?? [],

            days: value.days ?? null,
            time: time ?? null,
          };

          editGroup(config, res.data.id)
            .then((res1) => {
              getTrainingS();
            })
            .catch((err1) => {
              console.log(err1);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (image === "") {
        var editConfig = {
          teacher: value.teacher ?? [],
          category: value.category ?? [],
          subject: value.subject ?? [],
          name: value.name ?? "",
          duration: value.duration ?? "",
          description: value.description ?? "",
          money: value.money ?? "",
          days: value.days ?? null,
          percent: percent ?? null,
          time: time,
          start_date: date,
          // image:guruh.image,
        };
        console.log(editConfig);
        editGroup(editConfig, edit)
          .then((res) => {
            console.log(res);
            getTrainingS();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        let formData = new FormData();

        formData.append("image", image ?? "");
        var editConfig = {
          teacher: value.teacher ?? [],
          category: value.category ?? [],
          subject: value.subject ?? [],
          name: value.name ?? "",
          duration: value.duration ?? "",
          description: value.description ?? "",
          money: value.money ?? "",
          days: value.days ?? null,
          percent: percent ?? null,
          time: time,
          start_date: date,
        };
        editGroup(formData, edit)
          .then((res) => {
            console.log(res);
            editGroup(editConfig, edit)
              .then((res) => {
                console.log(res);
                getTrainingS();
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    handleCancel();
  };
  const handleExpandClick = (id) => {
    var a = expanded;

    a[id] = !a[id];
    setExpanded(a);
  };

  const onReset = () => {
    form.resetFields();
    setEdit(null);
  };
  const openModal = () => {
    setShow(true);
  };
  const teacherlar = (value) => {
    var te = [];
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < teacher.length; j++) {
        if (value[i] === teacher[j].id) {
          te.push(teacher[j].full_name);
        }
      }
    }
    setteachers(te);
  };
  const { Option } = Select;

  const deleteGroup = (id) => {
    deleteGroupC(id)
      .then((res) => {
        getTrainingS();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editGuruh = (id) => {
    setEdit(grlar[id].id);
    setGuruh(grlar[id]);
    console.log(grlar[id]);
    setTime(grlar[id].time);
    setDate(grlar[id].start_date);
    setTimeout(function () {
      form.setFieldsValue(grlar[id]);
    }, 0);

    teacherlar(grlar[id].teacher);
    openModal();
  };

  return (
    <div>
      <input type="checkbox" id="modal" className={styles.smbox} />
      <label for="modal" className="modal-background"></label>
      <Container fluid>
        <br />
        <br />
        <Button
          onClick={() => {
            openModal();
          }}
          type="primary"
        >
          Guruh qo'shish
        </Button>
        <Row>
          {grlar !== []
            ? grlar.map((item, key) => {
                return (
                  <Col lg={4} md={6} sm={12} style={{ marginTop: "20px" }}>
                    <Card className={style.root}>
                      <CardHeader
                        //  style={{fontSize:'30px'}}
                        title={item.name}
                      />
                      <CardMedia className={style.media} image={item.image} />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          <p>
                            {" "}
                            <b>Yo'nalishi: </b>
                            {item.category.map((item1) => {
                              return echoCategory(item1) + " / ";
                            })}
                          </p>
                          <p>
                            {" "}
                            <b>Fanlar/Dasturlar: </b>
                            {item.subject.map((item1) => {
                              return echoSubjects(item1) + " / ";
                            })}
                          </p>
                          {/* <p> <b>O'qituvchilar: </b>{item.teacher.map((item1, key)=>{ return(<p>{echoTeacher(item1)} - {item.percent[key]}%</p>)})}</p> */}
                          <p>
                            {" "}
                            <b>Kurs puli (oylik): </b>
                            {item.money} so'm
                          </p>

                          <p>
                            {" "}
                            <b>Boshlanish vaqti: </b>
                            {item.start_date}
                          </p>

                          <p>
                            {" "}
                            <b>Davomiyligi: </b>
                            {item.duration} oy
                          </p>
                          <p>
                            {" "}
                            <b>Kunlari: </b>
                            {item.days.map((item1) => {
                              return item1 + " ";
                            })}
                          </p>
                          <p>
                            {" "}
                            <b>Vaqti: </b>
                            {item.time !== null ? item.time[0] : ""} - {item.time !== null ? item.time[1] : ""}
                          </p>
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing style={{ display: "flex", justifyContent: "space-around" }}>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="button-tooltip-2" style={{ marginTop: "15px" }}>
                              O'zgartirish
                            </Tooltip>
                          }
                        >
                          {({ ref, ...triggerHandler }) => (
                            <Button
                              onClick={() => {
                                editGuruh(key);
                              }}
                              variant="blue"
                              {...triggerHandler}
                              className="d-inline-flex align-items-center"
                            >
                              <Image ref={ref} />

                              <IconButton>
                                <BorderColorIcon />
                              </IconButton>
                            </Button>
                          )}
                        </OverlayTrigger>

                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="button-tooltip-2" style={{ marginTop: "15px" }}>
                              O'chirish
                            </Tooltip>
                          }
                        >
                          {({ ref, ...triggerHandler }) => (
                            <Button
                              onClick={() => {
                                deleteGroup(item.id);
                              }}
                              variant="#f30838"
                              {...triggerHandler}
                              className="d-inline-flex align-items-center"
                            >
                              <Image ref={ref} />

                              <IconButton>
                                <DeleteIcon />
                              </IconButton>
                            </Button>
                          )}
                        </OverlayTrigger>

                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="button-tooltip-2" style={{ marginTop: "15px" }}>
                              Kurs haqida batafsil ma'lumot
                            </Tooltip>
                          }
                        >
                          {({ ref, ...triggerHandler }) => (
                            <Button variant="#F2F2F2" {...triggerHandler} className="d-inline-flex align-items-center">
                              <Image ref={ref} />
                              <IconButton
                                className={clsx(styles.expand, {
                                  [styles.expandOpen]: expanded[key],
                                })}
                                onClick={() => {
                                  handleExpandClick(key);
                                }}
                                aria-expanded={expanded[key]}
                                aria-label="Ko'proq ma'lumotni ko'rish"
                              >
                                <ExpandMoreIcon />
                              </IconButton>
                            </Button>
                          )}
                        </OverlayTrigger>
                      </CardActions>
                      <Collapse in={expanded[key]} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography paragraph style={{ fontSize: "16px" }}>
                            {item.description}
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Col>
                );
              })
            : ""}
        </Row>
      </Container>
      <Modal title="Guruh" width="70%" visible={show} footer={false} onCancel={handleCancel}>
        <Form form={form} name="basic" id="formGuruh" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} initialValues={{ remember: true, ...guruh }} onFinish={onFinish}>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Form.Item label="Guruhni nomini kiriting" name="name" rules={[{ required: true, message: "Bu joyni to'ldirish majburiy!" }]}>
                <Input placeholder="Guruhning nomini kiriting" />
              </Form.Item>

              <Form.Item label="Guruhning yo'nalishini tanlang" name="category" rules={[{ required: true, message: "Bu joyni to'ldirish majburiy!" }]}>
                <Select mode="multiple" style={{ width: "100%" }} placeholder="Yo'nalishni tanlang" optionLabelProp="label">
                  {category.map((item) => {
                    return (
                      <Option value={item.id} label={item.name_uz}>
                        <div className="demo-option-label-item">{item.name_uz}</div>
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>

              <Form.Item label="Guruhda o'tiladigan fanlarni/dasturlarni tanlang" name="subject" rules={[{ required: true, message: "Bu joyni to'ldirish majburiy!" }]}>
                <Select mode="multiple" style={{ width: "100%" }} placeholder="Fan yoki dasturni tanlang" optionLabelProp="label">
                  {subjects.map((item) => {
                    return (
                      <Option value={item.id} label={item.name}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item label="Guruhning o'qituvchisini tanlang" name="teacher" rules={[{ required: true, message: "Bu joyni to'ldirish majburiy!" }]}>
                <Select mode="multiple" style={{ width: "100%" }} placeholder="O'qituvchini tanlang" onChange={teacherlar} optionLabelProp="label">
                  {teacher.map((item) => {
                    return (
                      <Option value={item.id} label={item.full_name}>
                        <div className="demo-option-label-item">{item.full_name}</div>
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item label="Guruhning kurs pulini kiriting (oylik to'lov so'mda)" name="money" rules={[{ required: true, message: "Bu joyni to'ldirish majburiy!" }]}>
                <Input type="number" min="0" />
              </Form.Item>
              <Row>
                <Col lg={6}>
                  <Form.Item label="Ochilish sanasini kiriting" name="day" rules={[{ required: false, message: "Bu joyni to'ldirish majburiy!" }]}>
                    <DatePicker value={datef} onChange={chengeDate} />
                    <span> {guruh !== null ? guruh.start_date : ""}</span>
                  </Form.Item>
                </Col>
                <Col lg={6}>
                  <Form.Item label="Dars vaqtini kiriting" name="timefв" rules={[{ required: false, message: "Bu joyni to'ldirish majburiy!" }]}>
                    <TimePicker.RangePicker value={timef} onChange={chengeTime} />
                    <span>
                      {" "}
                      {guruh !== null ? guruh.time[0] : ""} - {guruh !== null ? guruh.time[1] : ""}
                    </span>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col lg={6} sm={12} md={12}>
              <Row>
                <Col lg={5}>
                  <Form.Item label="Dars nechchi oy davom etishini kiriting" name="duration" rules={[{ required: true, message: "Bu joyni to'ldirish majburiy!" }]}>
                    <Input type="number" min="0" />
                  </Form.Item>
                </Col>
                <Col lg={7}>
                  <Form.Item label="Haftani qaysi kunlari dars bo'lishini kiriting" name="days" rules={[{ required: true, message: "Bu joyni to'ldirish majburiy!" }]}>
                    <Select mode="multiple" style={{ width: "100%" }} placeholder="Hafta kunlarini tanglang" optionLabelProp="label">
                      <Option value="Dushanba" label="Dushanba">
                        <div className="demo-option-label-item">Dushanba</div>
                      </Option>
                      <Option value="Seshanba" label="Seshanba">
                        <div className="demo-option-label-item">Seshanba</div>
                      </Option>
                      <Option value="Chorshanba" label="Chorshanba">
                        <div className="demo-option-label-item">Chorshanba</div>
                      </Option>
                      <Option value="Payshanba" label="Payshanba">
                        <div className="demo-option-label-item">Payshanba</div>
                      </Option>
                      <Option value="Juma" label="Juma">
                        <div className="demo-option-label-item">Juma</div>
                      </Option>
                      <Option value="Shanba" label="Shanba">
                        <div className="demo-option-label-item">Shanba</div>
                      </Option>
                      <Option value="Yakshanba" label="Yakshanba">
                        <div className="demo-option-label-item">Yakshanba</div>
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Guruh uchun rasm tanlang" onChange={customRequest} rules={[{ required: false, message: "Bu joyni to'ldirish majburiy!" }]}>
                <Input type="file" id="rasmlar" required={edit === null ? true : false} style={{ marginBottom: "20px" }} />
                {ImageDemo(guruh !== null ?? guruh.image)}
              </Form.Item>
              <Form.Item label="Guruh uchun qo'shimcha ma'lumot kiriting" name="description" rules={[{ required: true, message: "Bu joyni to'ldirish majburiy!" }]}>
                <TextArea rows={10} cols={60} />
              </Form.Item>
              {teachers.map((item5, key) => {
                return (
                  <>
                    <p>{item5}ga beriladigan summa foiz miqdorda</p>
                    <Input required id="percent" defaultValue={guruh === null ? 0 : guruh.percent[key]} placeholder="100%" name={item5 + key} min="0" max="100" type="number" />
                    <br />
                  </>
                );
              })}
            </Col>
          </Row>

          <Form.Item>
            <Button type="danger" onClick={handleCancel} htmlType="button">
              Bekor qilish
            </Button>

            <Button type="primary" htmlType="submit">
              Saqlash
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

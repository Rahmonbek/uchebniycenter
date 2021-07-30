import React, { Component } from "react"
import style from "../css/LearningCenter.module.css"
import { Row, Col, Button } from "react-bootstrap"
import { Modal } from "antd"
import img1 from "../img/lgg.png"
import img2 from "../img/lc.png"
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default class LearningCenter extends Component {
    state = {
        ft: false,
        isModalVisible: false,
        coordinates: null
    }
    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    }
    handleOk = () => {
        this.handleCancel()
    }

    render() {


        return (
            <div className={style.mat}>

                <Modal title="Basic Modal" bodyStyle={{ padding: "0" }} visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <YMaps>
                        <div style={{ width: "100%", height: "360px" }}>

                            <Map defaultState={{ center: [41.311211, 69.279410], zoom: 13 }} style={{ width: "100%", height: "360px" }}>

                                <Placemark
                                    geometry={[41.311211, 69.279410]}
                                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                />
                            </Map>

                        </div>
                    </YMaps>
                </Modal>
                <div className={this.state.ft ? style.javon1 : style.javon}>
                    <div className={this.state.ft ? style.adPanel1 : style.adPanel}>
                        <div className={style.rasm}>
                            <div className={this.state.ft ? style.rasm11 : style.rasm1}>
                                <div className={style.muqova1}>
                                    <img src={img1} />
                                    <br /> 
                                    <h1>Muvoffaqiyatli<br/>O'quv Markazlari</h1>
                                    <br />
                                </div>
                                <div className={style.muqova2}>
                                    <h1>O'quv<br/>Markazlari</h1>
                                    <p className={style.btn} onClick={() => this.setState({ ft: true })}>Royxatdan o'tish <EventAvailableOutlinedIcon /></p>
                                </div>
                            </div>
                        </div>
                        <div className={style.forf}>
                            <h3 onClick={() => this.setState({ ft: false })}>O'quv markazi haqida</h3>
                            <br />
                            <form className={style.cardForm}>
                                <Row>
                                    <Col sm={9}>
                                        <div className={style.input}>
                                            <input placeholder=" " type="text" className={style.inputField} required />
                                            <label className={style.inputLabel}>O'quv markazining nomi</label>
                                        </div>
                                        <div className={style.input}>
                                            <input placeholder=" " type="email" className={style.inputField} required />
                                            <label className={style.inputLabel}>Emaili</label>
                                        </div>
                                        <Row>
                                            <Col xs={2}>
                                                <Button className={style.btnm} onClick={() => this.setState({ isModalVisible: true })}><LocationOnIcon /></Button>
                                            </Col>
                                            <Col xs={10}>
                                                <div className={style.input}>
                                                    <input placeholder=" " type="text" className={style.inputField} required />
                                                    <label className={style.inputLabel}>Manzili</label>
                                                </div>
                                            </Col>
                                        </Row>


                                    </Col>
                                    <Col sm={3} className={style.logoinp}>
                                        <br />
                                        <br />
                                        <label for="inpimg">
                                            <i>Logotip kiritish joyi</i>
                                        </label>
                                        <input type="file" id="inpimg" accept="image/*" />

                                    </Col>
                                    <Col sm={6}>
                                        <div className={style.input}>
                                            <input placeholder=" " type="text" className={style.inputField} required />
                                            <label className={style.inputLabel}>Telefon</label>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className={style.input}>
                                            <input placeholder=" " type="text" className={style.inputField} required />
                                            <label className={style.inputLabel}>Qo'shimcha telefon</label>
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                        <div className={style.input}>
                                            <input placeholder=" " type="text" className={style.inputField} required />
                                            <label className={style.inputLabel}>Telegram manzili</label>
                                        </div>
                                        <div className={style.input}>
                                            <input placeholder=" " type="text" className={style.inputField} required />
                                            <label className={style.inputLabel}>Instagram manzili</label>

                                        </div>
                                        <div className={style.input}>

                                            <textarea placeholder=" " rows="4" className={style.inputField} required>

                                            </textarea>
                                            <label className={style.inputLabel}>Qo'shimcha malumot...</label>
                                        </div>
                                    </Col>

                                    <Col xs={7} sm={9}></Col>
                                    <Col xs={5} sm={3} style={{ paddingTop: "15px" }}>
                                        <button type="submit" value="" className={style.subm}>Tasdiqlash</button>
                                    </Col>
                                </Row>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
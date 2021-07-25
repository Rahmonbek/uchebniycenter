import React, { Component } from "react"
import style from "../css/LearningCenter.module.css"
import { Row, Col } from "react-bootstrap"
import img1 from "../img/lgg.png"
import img2 from "../img/lc.png"
import { Button, Upload, Form, Select, Input } from 'antd';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';

export default class LearningCenter extends Component {
    state = {
        ft: false
    }

    render() {

        const normFile = (e) => {
            console.log('Upload event:', e);
            if (Array.isArray(e)) {
                return e;
            }
            return e && e.fileList;
        };
        return (
            <div className={style.mat}>
                <div className={this.state.ft ? style.adPanel1 : style.adPanel}>
                    <div className={style.rasm}>
                        <div className={this.state.ft ? style.rasm11 : style.rasm1}>
                            <div className={style.muqova1}>
                                <img src={img1} />
                                <br /> <br />
                                <h5>Bu joyga qandaydir shior yozsakmikan<br /> masalan:biz bilan hammasi qulay</h5>
                            </div>
                            <div className={style.muqova2}>
                                <img src={img2} />
                                <p className={style.btn} onClick={() => this.setState({ ft: true })}>Royxatdan o'tish <EventAvailableOutlinedIcon /></p>
                            </div>
                        </div>
                    </div>
                    <div className={style.forf}>
                        <h3 onClick={() => this.setState({ ft: false })}>O'quv markazi haqida</h3>
                        <br />

                        <form className={style.cardForm}>
                            <Row>
                                <Col lg={9}>
                                    <div className={style.input}>
                                        <input placeholder=" " type="text" className={style.inputField} required />
                                        <label className={style.inputLabel}>O'quv markazining nomi</label>
                                    </div>
                                    <div className={style.input}>
                                        <input placeholder=" " type="email" className={style.inputField} required />
                                        <label className={style.inputLabel}>Emaili</label>
                                    </div>
                                    <div className={style.input}>
                                        <input placeholder=" " type="text" className={style.inputField} required />
                                        <label className={style.inputLabel}>Manzili</label>
                                    </div>
                                </Col>
                                <Col lg={3} className={style.logoinp}>
                                    <br />
                                    <br />
                                    <label for="inpimg">
                                        <i>Logotip kiritish joyi</i>
                                    </label>
                                    <input type="file" id="inpimg" accept="image/*" />

                                </Col>
                                <Col lg={6}>
                                    <div className={style.input}>
                                        <input placeholder=" " type="text" className={style.inputField} required />
                                        <label className={style.inputLabel}>Telefon</label>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={style.input}>
                                        <input placeholder=" " type="text" className={style.inputField} required />
                                        <label className={style.inputLabel}>Qo'shimcha telefon</label>
                                    </div>
                                </Col>
                                <Col lg={12}>
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

                                <Col lg={9}></Col>
                                <Col lg={3} style={{paddingTop:"15px"}}>
                                    <button type="submit" value="" className={style.subm}>Tasdiqlash</button>
                                </Col>
                            </Row>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
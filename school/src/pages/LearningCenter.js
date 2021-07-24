import React, { Component } from "react"
import style from "../css/LearningCenter.module.css"
import img1 from "../img/lgg.png"
import img2 from "../img/lc.png"
import { Button, Upload, Form, Select, Input } from 'antd';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';

export default class LearningCenter extends Component {


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
                <div className={style.adPanel}>
                    <div className={style.rasm}>
                        <div className={style.rasm1}>
                            <div className={style.muqova1}>
                                <img src={img1} />
                            </div>
                            <div className={style.muqova2}>
                                <img src={img2} />
                                <input type="checkbox" className={style.chek} id="ch1" />
                                <label for="ch1">Royxatdan o'tish <EventAvailableOutlinedIcon /></label>
                            </div>
                        </div>
                    </div>
                    <div className={style.forf}>
                        <h2>O'quv markazi haqida</h2>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}
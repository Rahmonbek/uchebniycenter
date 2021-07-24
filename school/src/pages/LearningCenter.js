import React, { Component } from "react"
import style from "../css/LearningCenter.module.css"
import img1 from "../img/lgg.png"
import img2 from "../img/lc.png"
import { Button, Upload, Form, Select, Input } from 'antd';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';

export default class LearningCenter extends Component {
state={
    ft:false
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
                <div className={this.state.ft?style.adPanel1:style.adPanel}>
                    <div className={style.rasm}>
                        <div className={this.state.ft?style.rasm11:style.rasm1}>
                            <div className={style.muqova1}>
                                <img src={img1} />
                                <br/> <br/> 
                                <h5>Bu joyga qandaydir shior yozsakmikan<br/> masalan:biz bilan hammasi qulay</h5>
                            </div>
                            <div className={style.muqova2}>
                                <img src={img2} />
                                <p className={style.btn} onClick={()=>this.setState({ft:true})}>Royxatdan o'tish <EventAvailableOutlinedIcon /></p>
                            </div>
                        </div>
                    </div>
                    <div className={style.forf}>
                        <h3 onClick={()=>this.setState({ft:false})}>O'quv markazi haqida</h3>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}
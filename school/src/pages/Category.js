import React, { Component } from 'react'
import styles from '../css/category.module.css'
import {IoLogoJavascript,IoLogoPython} from 'react-icons/io'
import {CgMathPercent} from 'react-icons/cg'
import {FaLanguage} from 'react-icons/fa'
import {TiSortAlphabeticallyOutline} from 'react-icons/ti'
import {IoIosPeople} from 'react-icons/io'
import {Carousel} from '3d-react-carousal';
export default class Category extends Component {
  render() {
    let slides = [
      <div className={styles.card}>
             <div>
               <TiSortAlphabeticallyOutline/>
             </div>
             <div>Hammasi</div>
           </div>,
           <div className={styles.card}>
             <div>
               <IoLogoJavascript/>
             </div>
             <div>Javascript</div>
           </div>,
           <div className={styles.card}>
             <div>
               <IoLogoPython/>
             </div>
             <div>Python </div>
           </div>,
           <div className={styles.card}>
             <div>
               <CgMathPercent/>
             </div>
             <div>Matematika</div>
           </div>,
           <div className={styles.card}>
             <div>
               <FaLanguage/>
             </div>
             <div>Xorijiy tillar</div>
           </div>,
           <div className={styles.card}>
             <div>
               <IoIosPeople/>
             </div>
             <div>Abituriyent</div>
           </div>
       ];
    return (
      <div style={{padding:'5%'}}>
        <div className={styles.container}>
        <Carousel slides={slides}/>

        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import styles from '../css/category.module.css'
import {IoLogoJavascript,IoLogoPython} from 'react-icons/io'
import {CgMathPercent} from 'react-icons/cg'
import {FaLanguage} from 'react-icons/fa'
import {TiSortAlphabeticallyOutline} from 'react-icons/ti'
import {IoIosPeople} from 'react-icons/io'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default class Category extends Component {
  
  render() {

    
      
    return (
      <div style={{padding:'5%'}}>
        <div className={styles.container}>
        <Carousel responsive={responsive}>
 
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
           </div>;
</Carousel>;
       

        </div>
      </div>
    )
  }
}

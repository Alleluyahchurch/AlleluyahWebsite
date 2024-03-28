'use-client';
import React, { useState } from "react";
import styles from "./ministries.module.css";
import logo from '../../assets/logo.jpeg';
import Image from "next/image";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import apc1 from "../../assets/apc1.jpeg";
import apc2 from "../../assets/apc2.jpeg";
import apc3 from "../../assets/apc3.jpeg";
import apc4 from "../../assets/apc4.jpeg";
import apc5 from "../../assets/apc5.jpeg";
import apc6 from "../../assets/apc6.jpeg";
import apc7 from "../../assets/apc7.jpeg";
import apc8 from "../../assets/apc8.jpeg";
import apc9 from "../../assets/apc9.jpeg";
import apc10 from "../../assets/apc10.jpeg";
import apc11 from "../../assets/apc11.jpeg";
import apc12 from "../../assets/apc12.jpeg";
import apc13 from "../../assets/apc13.jpeg";
import apc14 from "../../assets/apc14.jpeg";
import apc15 from "../../assets/apc15.jpeg";
import apc16 from "../../assets/apc16.jpeg";


export default function  Ministries(){
    
    return(
        <>
            <div className={styles.main}>
                <div className={styles.head}>
                <Image src={logo} width={200} height={200} alt="logo"/>
            <p >MINISTRIES</p>
                </div>
                {/* <OwlCarousel className='owl-theme' loop  nav>
                <div>
                <Image src={logo} width={300} height={300} alt="logo"/>
                </div>
                <div>
              <Image src={apc1} width={300} height={300} alt="logo"/>
              </div>
              <div>
              <Image src={apc2} width={300} height={300} alt="logo"/>
              </div>
              <div>
              <Image src={apc3} width={300} height={300} alt="logo"/>
              </div>
             <div>
              <Image src={apc4} width={300} height={300} alt="logo"/>
              </div>

              <div>
              <Image src={apc5} width={300} height={300} alt="logo"/>
              </div>
              <div>
              <Image src={apc6} width={300} height={300} alt="logo"/>
              </div>
              <div>
              <Image src={apc7} width={300} height={300} alt="logo"/>
              </div>
              <div>
              <Image src={apc8} width={300} height={300} alt="logo"/>
              </div>
              <div>
              <Image src={apc9} width={300} height={300} alt="logo"/>
              </div>

                    </OwlCarousel> */}
          
            </div>
        </>
    )
}
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import robin from "../../assets/robin.jpg";
import logo from "../../assets/logo.jpeg";
import { Oswald } from "next/font/google";

export default function  About(){
    return(
        <div className={styles.main}>
           <div className={styles.head}>
                <Image src={logo} width={200} height={300} alt="logo"/>
            <p >ABOUT</p>
                </div>
                <br/>
                <br/>
            <div className={styles.flex}>
          <div className={styles.author}>
          <Image src={robin} width={300} height={300} alt='Pr D Thompson'/>
          <p className={styles.name}>Pr T Robin Jose</p>
          </div>
          <br/>
          <div className={styles.content}>
          <p style={{fontFamily:`Sans-serif`,fontWeight:20,fontSize:18}}>
     
        Pr. Thompson and Irene Christabel Star couples had four children. Sis. Mercy Beulah, Bro. Stephen Jose, Pr. Robin Jose, and Pr. Sam Jose.
       
        The First Daughter Sis. Mercy Beulah Married Bro. Webster Charles Abraham lives in Chennai.
       
        Second Son. Bro. Stephen Jose died at an early age of bodily weakness.
       
        Third Son Pr. Robin Jose. He was very interested and involved in the ministry along with his father and after completing his schooling studied at the Church of God Theological College, Coimbatore, and entered full-time ministry.
       
        He got married to Sis Jeba Dhaya in 2006. They also have a daughter named Febi Joodith.
        
        Fourth Son. Pr. Sam Jose is currently carrying out a ministry called Apostolic Grace Tabernacle in a village called Mylapore.
        
        By God's grace, Pr. Robin Jose continues to fulfill their father's ministry
        
        The pastor is doing the work of conducting worship, writing hymns, giving sermons, etc. Pray hard for the work.
        
       </p>
       </div>
        </div>
        </div>
    )
}
import React, { useState } from 'react';
import styles from "./founder.module.css";
import Image from "next/image";
import logo from "../../assets/logo.jpeg";
import robin from "../../assets/robin.jpg";

function founder() {

  return (
    <div className={styles.main}>
        <div className={styles.head}>
                <Image src={logo} width={200} height={300} alt="logo"/>
            <p >FOUNDER</p>
                </div>
        <h1>Founder Details</h1>
        <div className={styles.flex}>
          <div className={styles.author}>
          <Image src={logo} width={300} height={300} alt='Pr D Thompson'/>
          <p className={styles.name}>Pr D Thompson</p>
          </div>
          <div className={styles.content}>
          <p >
       Pr. D. Thompson was born in Kaliyakkavilai in Kanyakumari district. After completing his college studies, he came to Chennai to work. Pr. Thompson Married Sis. Irene Christabel Star. Then both were doing part-time ministry.
While he was working in the Co-operative Department, he received a full-time call from the Lord. He resigned from his job in 1996 to devote himself to full-time ministry.
Before that, he got a Vision from God and came to a village called Thirupachur. There he started his first ministry. For the first Church was built there and the first Church was consecrated. 26. 08. 1984. Then by the grace of the Lord, the ministry expanded and the second Church was consecrated on 15. 8. 1998.
Before starting his ministry in Thirupachur, he worked as a co-worker in Putlur Church and Periya Kuppam Church and fulfilled his ministry there.
This ministry was followed by his son Pastor T. ROBIN JOSE On 23.01.2003. People were added to the congregation by God's grace day by day to continue their ministry.
At that time, the Church and the site of the Church were taken by the government for the national highway. Immediately, a new Church was built and consecrated on the place where the Church was located on 14. 11. 2021. 
Pray for this ministry to grow more and more. May the Lord bless you.
       </p>
       </div>
        </div>
        <br/>
       
      

    </div>
  )
}

export default founder;

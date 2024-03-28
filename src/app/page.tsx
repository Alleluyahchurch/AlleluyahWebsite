'use client';
import Image from "next/image";
var $ = require('jquery');
import styles from "./page.module.css";
import logo from '../assets/logo.jpeg';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Button from '@mui/material/Button';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { useRouter } from "next/navigation";
import About from "./about/page";
let window:any;
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}
import Menu from '@mui/material/Menu';
import YouTube from 'react-youtube';
import MenuItem from '@mui/material/MenuItem';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import Footerlogo from "../assets/footerlogo.png";
import promise from '../assets/promiseword.jpeg';
import Kuradu from "../assets/thodumdeivam.jpeg";
import yarumillai from "../assets/yarumillai1.jpeg";
import towshaggi from "../assets/towshagi.jpeg";
import thedu from "../assets/thedu.jpeg";
import location from "../assets/location.png";
import React from "react";



const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const options = {
  loop: true,
  margin: 10,
  items: 1,
  autoplay: false,
  autoplayTimeout: 10000,
  smartSpeed: 350,
  nav: true,
  
};

export default function Home() {
  
  const router = useRouter();
         const [events, setEvents] = React.useState<null | HTMLElement>(null);
         const [ministries, setMinistries] = React.useState<null | HTMLElement>(null);
         const handleEventsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
           setEvents(event.currentTarget);
         };
         const handleMinsitriesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
           setMinistries(event.currentTarget);
         };
         const handleEventsClose = () => {
           setEvents(null);
         };
         const handleMinistriesClose = ()=>{
           setMinistries(null);
         }
         const handleRoutes = ()=>{
           console.log("ABOUT");
           alert('ABOUT')
         }

         const youtubeopts = { 
          height: "700", 
          width: "100%", 
          playerVars: { 
            autoplay: 0, 
          }, 
        }; 

  return (
    <>
    <main className={styles.main}>
      
      <div className={styles.description}>
    
         <div className={styles.nav}>

      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center',width:'100%'}}>
      <div style={{padding:"10px"}}>
        {/* onClick={()=>{router.push('/')}} */}
        <Button
        id="basic-button"
        // aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
        style={{color:'black'}}
      >
        Home
      </Button>
        </div>
       
        <div style={{padding:"10px"}}>
      <Button
        id="basic-button"
        aria-controls={events ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={events ? 'true' : undefined}
        onClick={handleEventsClick}
        style={{color:'black'}}
      >
        Ministries
      </Button>
        </div>
        <Menu
        id="basic-menu"
        anchorEl={events}
        open={Boolean(events)}
        onClose={handleEventsClose}
       
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{
          router.push('/ministries')
          handleMinistriesClose()}}>Prayer Cell</MenuItem>
        <MenuItem onClick={()=>{
          router.push('/ministries')
          handleMinistriesClose()}}>Sunday School</MenuItem>
        <MenuItem onClick={()=>{
          router.push('/ministries')
          handleMinistriesClose()}}>Youth Camp</MenuItem>
        <MenuItem onClick={()=>{
          router.push('/ministries')
          handleMinistriesClose()}}>Open Air Meeting</MenuItem>
      </Menu>
      <div style={{padding:"10px"}}>
      <Button
        id="basic-button"
        aria-controls={ministries ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={ministries ? 'true' : undefined}
        onClick={handleMinsitriesClick}
        style={{color:'black'}}
      >
        Events
      </Button>
        </div>
        <Menu
        id="basic-menu"
        anchorEl={ministries}
        open={Boolean(ministries)}
        onClose={handleMinistriesClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{
          router.push('/events')
          handleEventsClose()}}>New Year Service</MenuItem>
        <MenuItem onClick={()=>{
          router.push('/events')
          handleEventsClose()}}>Youth Meeting</MenuItem>
        <MenuItem onClick={()=>{
          router.push('/events')
          handleEventsClose()}}>Prayer Cell</MenuItem>
      </Menu>

      <div style={{padding:"10px"}}>
      <Button
        id="basic-button"
        aria-controls={ministries ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={ministries ? 'true' : undefined}
        onClick={()=>{router.push("/contacts")}}    
          style={{color:'black'}}
      >
       Contacts
      </Button>
      </div>
      <div style={{padding:"10px"}}>
       <Button
        id="basic-button"
        aria-controls={ministries ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={ministries ? 'true' : undefined}
        onClick={()=>{router.push("/founder")}}
        style={{color:'black'}}
      >
       Founder
      </Button>
       </div>
       <div style={{padding:"10px"}}>
      <Button
        id="basic-button"
        aria-controls={ministries ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={ministries ? 'true' : undefined}
        onClick={()=>{router.push("/about")}}
        style={{color:'black'}}
      >
      About
      </Button>
      </div>
       
       </div>
       
      </div>
      </div>
      <div className={styles.mainbg}>
        <div  style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:40}}>       
        <Image src={promise}  alt="promiseword"/>
        </div>
        <br></br>
        <div className={styles.carousel}>
        <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
        <YouTube videoId="YIXGxb7e14A" opts={youtubeopts} />
        
        </div>
        <div className="item">
        <YouTube videoId="Q1dFjL6Segk" opts={youtubeopts} />
        </div>
        <div className="item">
        <YouTube videoId=" H6Q9AylcqgQ" opts={youtubeopts} />
        </div>
        {/* <div className="item">
        <Image src={thedu} height={400}  alt="thedu thedu song"/>
        </div>
        <div className="item">
        <Image src={towshaggi} height={400}  alt="tow shaggi song"/>
        </div> */}
        </OwlCarousel>
        </div>
        <div className={styles.footer}>
          
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',alignContent:'center',justifyContent:'space-evenly'}}>
            <Image src={Footerlogo} width={400} height={300} alt="logo"/>
            <div style={{display:'flex',flexDirection:'column'}}>
            <div >
        <p style={{fontSize:'20px',color:'#c9001e'}}>Menu</p>
        </div>
        <br/>
        <div style={{display:'flex',flexDirection:'row'}}>
        <Brightness1Icon sx={{color:'white',width:10}}  fontSize='small'/>
          <p className={styles.fmenu} onClick={()=>{router.push('/')}}>Home</p>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <Brightness1Icon sx={{color:'white',width:10}}  fontSize='small'/>
          <p className={styles.fmenu} onClick={()=>{router.push('/ministries')}}>Ministries</p>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <Brightness1Icon sx={{color:'white',width:10}}  fontSize='small'/>
          <p className={styles.fmenu} onClick={()=>{router.push('/events')}}>Events</p>
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
          <Brightness1Icon sx={{color:'white',width:10}}  fontSize='small'/>
            <p className={styles.fmenu} onClick={()=>{router.push('/contacts')}}>Contacts</p>
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
          <Brightness1Icon sx={{color:'white',width:10}}  fontSize='small'/>
            <p className={styles.fmenu} onClick={()=>{router.push('/founder')}}>Founder</p>
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
          <Brightness1Icon sx={{color:'white',width:10}}  fontSize='small'/>
            <p className={styles.fmenu} onClick={()=>{router.push('/about')}}>About</p>
          </div>
          </div>
        
          <div style={{display:'flex'}}>
          <div style={{display:'flex',flexDirection:'column'}}>
            <div>
              
              <p style={{fontSize:'20px',color:'#c9001e'}} >Social</p>
            </div>
            <br/>
            <div style={{display:'flex',flexDirection:'row'}}>
            <Brightness1Icon sx={{color:'white',width:10}}  fontSize='small'/>
              <a className={styles.fmenu} href="https://wa.me/+919655937799" target="_blank">Whatsapp</a>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <Brightness1Icon sx={{color:'white',width:10}}  fontSize='small'/>
              <a className={styles.fmenu} href="https://www.facebook.com/robinjose.pastor?mibextid=qi2Omg" target="_blank">Facebook</a>
            </div>
            
            <div style={{display:'flex',flexDirection:'row'}}>
            <Brightness1Icon sx={{color:'white',width:10}}  fontSize='small'/>
           
             <a href="https://www.youtube.com/@kuradu_rj" target="_blank" className={styles.fmenu}>Youtube</a>
           
            </div>
            {/* <ul>
              <li>Church</li>
              <li>Robin</li>
              <li>Collections</li>
            </ul> */}
            <div style={{display:'flex',flexDirection:'row'}}>
            <Brightness1Icon sx={{color:'white',width:10}}  fontSize='small'/>
              <a className={styles.fmenu} href="https://www.instagram.com/robinjose_apc/?igsh=MTJsYmk0emxsbDZqNw%3D%3D" target="_blank">Instagram</a>
            </div>
            {/* <ul>
              <li>Church</li>
              <li>Robin</li>
              <li>Collections</li>
            </ul> */}
            {/* <div style={{display:'flex',flexDirection:'row'}}>
            <Brightness1Icon sx={{color:'white',width:10}}  fontSize='small'/>
              <p className={styles.fmenu}>God Music</p>
            </div> */}
          </div>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
            <div >
              <p style={{fontSize:'20px',color:'#c9001e'}}>Contact</p>
              
            </div>
            <br/>
            <div style={{display:'flex',marginBottom:10}}>

          
            <div style={{display:'flex',flexDirection:'column'}}>
            <HomeRoundedIcon sx={{color:'white'}}/>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
            <p className={styles.cadd}>Alleluyah Ministries</p>
              <p className={styles.cadd}  >1061,Alleluyah Nagar</p>
              <p className={styles.cadd}>Thirupachur Post</p>
              <p className={styles.cadd}>Thiruvallur Dist </p>
              <p className={styles.cadd}>Pin - 631 203</p>
              <p className={styles.cadd}> Tamil Nadu,India</p>
              </div>
            
              </div>
              
                  <div style={{display:'flex',flexDirection:'row'}}>
                    <PhoneAndroidIcon sx={{color:'#c97c00',marginTop:-0.2,marginLeft:-0.5}}/>
                    <p className={styles.fmenu} style={{color:'#c97c00'}}>+91 9655937799</p>
                    </div>
                
          </div>
          </div>
         

        </div>
        </div>
    </main>
    </>
    // <About/>
  );
}
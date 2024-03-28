'use client';
import React from "react";
var $ = require('jquery');
import styles from "./events.module.css";
import logo from '../../assets/logo.jpeg';
import Image from "next/image";
import Button from '@mui/material/Button';
let window:any;
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from "next/navigation";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import dynamic from 'next/dynamic';
import new1 from "../../assets/apc1.jpeg";
import new2 from "../../assets/apc2.jpeg";
import new3 from "../../assets/apc9.jpeg";
import new4 from "../../assets/apc11.jpeg";
import new5 from "../../assets/apc12.jpeg";
import new6 from "../../assets/apc13.jpeg";
import new7 from "../../assets/apc14.jpeg";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
  });

const options = {
    loop: true,
    margin: 10,
    items: 1,
    //autoplay: true,
    center: true,
    autoplayTimeout: 2000,
    smartSpeed: 350,
    nav: true,
    // navText: ["Prev", "Next"],
  };
export default function  Events(){
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

    const newyearimages = [
      {
        original: "https://images.ctfassets.net/jea8vi5dj58q/1gR5KQkdaXfMkhQTxUJDec/58cf3e7955d5155272b97a2abfeb17b4/2023_-_147.JPG",
        thumbnail: "https://images.ctfassets.net/jea8vi5dj58q/1gR5KQkdaXfMkhQTxUJDec/58cf3e7955d5155272b97a2abfeb17b4/2023_-_147.JPG"
      },
      {
        original: "https://images.ctfassets.net/jea8vi5dj58q/2r8kfD3X6Kivu9mR3BOrT0/b5f6b05864d90246597dcc51912a24d0/2023_-_146.JPG",
        thumbnail: "https://images.ctfassets.net/jea8vi5dj58q/2r8kfD3X6Kivu9mR3BOrT0/b5f6b05864d90246597dcc51912a24d0/2023_-_146.JPG"
      },
      {
        original: "https://images.ctfassets.net/jea8vi5dj58q/AmFuQuY9Hvz0LB7PfsFno/c4b349086d943102d41c311f90152b39/2023_-_141.JPG",
        thumbnail: "https://images.ctfassets.net/jea8vi5dj58q/AmFuQuY9Hvz0LB7PfsFno/c4b349086d943102d41c311f90152b39/2023_-_141.JPG"
      }
    ]

    const youthimages = [
      {
        original: "https://images.ctfassets.net/jea8vi5dj58q/3JVgqbMZ0XUv1jDGQ8EhQn/1e7672d8de2c8ebafe0d27e1d4f81c9e/IMG-20240325-WA0010.jpg",
        thumbnail: "https://images.ctfassets.net/jea8vi5dj58q/3JVgqbMZ0XUv1jDGQ8EhQn/1e7672d8de2c8ebafe0d27e1d4f81c9e/IMG-20240325-WA0010.jpg"
      },
      {
        original: "https://images.ctfassets.net/jea8vi5dj58q/7t4jlCKM83FW8cAz476V65/52788f656124093497050c23db914a4d/IMG-20240325-WA0014.jpg",
        thumbnail: "https://images.ctfassets.net/jea8vi5dj58q/7t4jlCKM83FW8cAz476V65/52788f656124093497050c23db914a4d/IMG-20240325-WA0014.jpg"
      },
      {
        original: "https://images.ctfassets.net/jea8vi5dj58q/3QydLyKAAcbc5716Vjcnla/5bd41a04a1b50276b3de8dac481969c2/IMG-20240325-WA0016.jpg",
        thumbnail: "https://images.ctfassets.net/jea8vi5dj58q/3QydLyKAAcbc5716Vjcnla/5bd41a04a1b50276b3de8dac481969c2/IMG-20240325-WA0016.jpg"
      }
    ]

    const anniversaryimages = [
      {
        original: "https://images.ctfassets.net/jea8vi5dj58q/2Ik7A5oEbkNFy4L21JZBPr/11fc55b3b94a47402bd263a792e475ac/2023_-_87.JPG",
        thumbnail: "https://images.ctfassets.net/jea8vi5dj58q/2Ik7A5oEbkNFy4L21JZBPr/11fc55b3b94a47402bd263a792e475ac/2023_-_87.JPG"
      },
      {
        original: "https://images.ctfassets.net/jea8vi5dj58q/36v3hXjbZQK5p0DtZ6qs11/33125aadc5072048a77adb52e262ae2c/2023_-_04.JPG",
        thumbnail: "https://images.ctfassets.net/jea8vi5dj58q/36v3hXjbZQK5p0DtZ6qs11/33125aadc5072048a77adb52e262ae2c/2023_-_04.JPG"
         },{
          original:"https://images.ctfassets.net/jea8vi5dj58q/1zTDnU8f5jcyv8ajsRwnt3/3f24b4a3114fab3ed80da997473ebf12/2023_-_32.JPG",
          thumbnail:"https://images.ctfassets.net/jea8vi5dj58q/1zTDnU8f5jcyv8ajsRwnt3/3f24b4a3114fab3ed80da997473ebf12/2023_-_32.JPG"
        },{
          original:"https://images.ctfassets.net/jea8vi5dj58q/6y8vlTonrfqOtBcd41rVjZ/3624098f2dc5df5a5d7f4650523e4921/2023_-_30.JPG",
          thumbnail:"https://images.ctfassets.net/jea8vi5dj58q/6y8vlTonrfqOtBcd41rVjZ/3624098f2dc5df5a5d7f4650523e4921/2023_-_30.JPG"
        }
    ]

    const vbsimages = [
      {
        original: "https://images.ctfassets.net/jea8vi5dj58q/6KA0Lk5rP4mpPWegRxPJfP/3c86af2a3f09182a8b46f84b929fe321/2023_-_30.jpg",
        thumbnail: "https://images.ctfassets.net/jea8vi5dj58q/6KA0Lk5rP4mpPWegRxPJfP/3c86af2a3f09182a8b46f84b929fe321/2023_-_30.jpg"
      },
      {
        original: "https://images.ctfassets.net/jea8vi5dj58q/3WUVIoLu70QsBwRbLG10Om/4589fcfaf9ef5de8279883a2bec9d137/2023_-_51.jpg",
        thumbnail: "https://images.ctfassets.net/jea8vi5dj58q/3WUVIoLu70QsBwRbLG10Om/4589fcfaf9ef5de8279883a2bec9d137/2023_-_51.jpg"
         },{
          original:"https://images.ctfassets.net/jea8vi5dj58q/13onW3SjdGN4yNhFElBc8T/8fd240cba9761ac610bbe15a77d939a8/2023_-_80.jpg",
          thumbnail:"https://images.ctfassets.net/jea8vi5dj58q/13onW3SjdGN4yNhFElBc8T/8fd240cba9761ac610bbe15a77d939a8/2023_-_80.jpg"
        },{
          original:"https://images.ctfassets.net/jea8vi5dj58q/4Ph0HCvGQH03I1Q29kOLzI/56be67262029ead23d5867cc43252477/2023_-_81.jpg",
          thumbnail:"https://images.ctfassets.net/jea8vi5dj58q/4Ph0HCvGQH03I1Q29kOLzI/56be67262029ead23d5867cc43252477/2023_-_81.jpg"
        },{
          original:"https://images.ctfassets.net/jea8vi5dj58q/2gJGoswo6yXc2eosPgOXzV/6e818ea1b8fd7b92cf3357133c4bb055/2023_-_65.jpg",
          thumbnail:"https://images.ctfassets.net/jea8vi5dj58q/2gJGoswo6yXc2eosPgOXzV/6e818ea1b8fd7b92cf3357133c4bb055/2023_-_65.jpg"
        }
    ]
    
    return(
        <div className={styles.main}>
             
             <div className={styles.head}>
                <Image src={logo} width={200} height={200} alt="logo"/>
            <p >Events</p>
            <div className={styles.nav}>
      <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row',alignItems:'center',width:'100%',padding:"10px"}}>
      
        <div style={{padding:"10px"}}>
        {/* onClick={()=>{router.push('/')}} */}
        <Button
        id="basic-button"
        // aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
        style={{color:'black',backgroundColor:'white'}}
        onClick={()=>{router.push('/')}}
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
        style={{color:'black',backgroundColor:'white'}}
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
        style={{color:'black',backgroundColor:'white'}}
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
        // aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
        style={{color:'black',backgroundColor:'white'}}
        onClick={()=>{router.push('/contacts')}}
      >
        Contacts
      </Button>
      </div>
      <div style={{padding:"10px"}}>
       <Button
        id="basic-button"
        // aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
        style={{color:'black',backgroundColor:'white'}}
        onClick={()=>{router.push('/founder')}}
      >
        Founder
      </Button>
       </div>
       <div style={{padding:"10px"}}>
      <Button
        id="basic-button"
        // aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
        style={{color:'black',backgroundColor:'white'}}
        onClick={()=>{router.push('/about')}}
      >
        About
      </Button>
      </div>
       
       </div>
       
      </div>
            </div>
            <br/>
            <br/>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{display:'flex',flexDirection:'column',width:'20%',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                    <h3>New Year Service</h3>
                    </div>
                  
                    <br/>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',width:'30%'}}>
               <p>Welcome to our New Year's Eve Watchnight Service! We are thrilled you have chosen to worship with us on the last evening of (YEAR) as we close out the year together in Thanksgiving and welcome (NEW YEAR) with anticipation!</p>
            </div>
              
                                </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'80%'}}>
          <ImageGallery items={newyearimages} />
          </div>
            </div>
            <br/>
            <br/>
            <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'80%'}}>
            <ImageGallery items={youthimages} />
          </div>
                <div style={{display:'flex',flexDirection:'column',width:'50%',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                    <h3>Youth Meeting</h3>
                    </div>
                  
                    <br/>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',width:'20%'}}>
               <p>Welcome to our New Year's Eve Watchnight Service! We are thrilled you have chosen to worship with us on the last evening of (YEAR) as we close out the year together in Thanksgiving and welcome (NEW YEAR) with anticipation!</p>
            </div>
              
                                </div>
            
            </div>
            <br/>
            <br/>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{display:'flex',flexDirection:'column',width:'20%',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                    <h3>Sunday School</h3>
                    </div>
                  
                    <br/>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',width:'30%'}}>
               <p>Welcome to our New Year's Eve Watchnight Service! We are thrilled you have chosen to worship with us on the last evening of (YEAR) as we close out the year together in Thanksgiving and welcome (NEW YEAR) with anticipation!</p>
            </div>
              
                                </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'80%'}}>
          <ImageGallery items={anniversaryimages} />
          </div>
            </div>
            <br/>
            <br/>
            <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'80%'}}>
            <ImageGallery items={vbsimages} />
          </div>
                <div style={{display:'flex',flexDirection:'column',width:'50%',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                    <h3>Valueable Bible Seekers - VBS</h3>
                    </div>
                  
                    <br/>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',width:'20%'}}>
               <p>Welcome to our New Year's Eve Watchnight Service! We are thrilled you have chosen to worship with us on the last evening of (YEAR) as we close out the year together in Thanksgiving and welcome (NEW YEAR) with anticipation!</p>
            </div>
              
                                </div>
            
            </div>
            <br/>
            <br/>
         
        </div>
    )
}
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import Iphone14 from "../assets/images/iPhone-14-Pro-Max-PNG.png";


function SoundSection() {
    const handle =() =>{
        const element = document.querySelector(".display-section");
        window.scrollTo({
            top : element?.getBoundingClientRect().bottom,
            left: 0,
            behavior : 'smooth'
    
        })
    }
    return ( 
    <div className="sound-section  wrapper">
        <div className="body">
            <div className="sound-section-content content">
                <h2 className="title">New Sound System</h2>
                <p className="text">Feel The Base</p>
                <span className="description">
                From $41.60/mo. for 24mo. or $999 before trade-in
                </span>
                <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a  onClick={handle} className="link">Learn more</a>
                </li>
            </ul>
            <div className="sound-img" >
            <img  src={Iphone14} alt="Iphone14" srcset="" height= "500px" />    
            </div>     

            </div>
        </div>

    </div>
    
    
    
    );
}
// .sound-section.wrapper {
//     width: 100%;
//     color: #1d1d1f;
//     background-color: #fbfbfd;
//     height: 100vh;
//   }
  
//   .sound-section .body {
//     max-width: 980px;
//     margin: 0 auto;
//   }
  
//   .sound-section .content {
//     max-width: 490px;
//     width: 100%;
//     padding: 200px 0;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     opacity: 0;
//   }
  
//   .sound-section .title {
//     color: #1d1d1f;
//     font-size: 17px;
//     font-weight: 400;
//     margin-bottom: 0;
//   }
  
//   .sound-section .text {
//     display: inline-block;
//     color: transparent;
//     background-image: linear-gradient(
//       90deg,
//       #1e3791 0%,
//       #2948b1 40%,
//       #3153c6 55%,
//       #385fda 60%
//     );
//     -webkit-background-clip: text;
//     background-clip: text;
//     padding-top: 0.5px;
//     margin-top: 16px;
//     font-size: 48px;
//     font-weight: 600;
//     margin-bottom: 18px;
//   }
  
//   .sound-section .description {
//     font-size: 21px;
//     font-weight: 400;
//   }
  
//   .sound-section .links {
//     display: flex;
//     justify-content: center;
//     margin-top: 24px;
//     align-items: center;
//     margin-left: 0;
//     margin-right: 0;
//     padding-left: 0;
//     list-style: none;
//   }
  
//   .sound-section .button {
//     background: #0071e3;
//     color: #fff;
//     cursor: pointer;
//     display: inline-block;
//     text-align: center;
//     white-space: nowrap;
//     font-size: 17px;
//     font-weight: 400;
//     min-width: 28px;
//     padding: 8px 16px;
//     border-radius: 980px;
//     margin: 0 14px;
//     border: none;
//   }
  
//   .sound-section .link {
//     text-decoration: none;
//     color: #2997ff;
//     font-size: 21px;
//     font-weight: 400;
//     margin: 0 14px;
//     cursor: pointer;
//   }
  
export default SoundSection;
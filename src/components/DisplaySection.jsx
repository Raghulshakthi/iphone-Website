import React from 'react';
import Iphone14 from "../assets/images/apple-iphone-14-pro-4-removebg-preview.png"
function DisplaySection() {

    const handleTop =()=>{
        window.scrollTo({top: 0,left:0,behavior:"smooth"})

    }
    return ( 
        <div className="display-section wrapper">
              <h2 className="title">New </h2>
                <p className="text">Brillient</p>
                <span className="description">
                From $41.60/mo. for 24mo. or $999 before trade-in
                </span>
                    <button className="button">Try me</button>
                    <button className="back-button" onClick={handleTop}>TOP</button>       
                    <img src={Iphone14} alt="Iphone14" srcset="" height= "500px" />         
        </div>
     );
}

// .display-section.wrapper {
//     margin-left: auto;
//     margin-right: auto;
//     max-width: 980px;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     padding: 50px 0 400px 0;
//     height: 100vh;
//     box-sizing: border-box;
//     opacity: 0;
//     position: relative;
//   }
  
//   .display-section .title {
//     color: #86868b;
//     font-size: 17px;
//     font-weight: 400;
//     letter-spacing: -0.022em;
//     margin-bottom: 0;
//   }
  
//   .display-section .text {
//     display: inline-block;
//     color: transparent;
//     background-image: linear-gradient(180deg, #ffb6ff, #b344ff);
//     -webkit-background-clip: text;
//     background-clip: text;
//     padding-top: 0.5px;
//     margin-top: 16px;
//     font-size: 48px;
//     font-weight: 600;
//     margin-bottom: 18px;
//   }
  
//   .display-section .description {
//     font-size: 21px;
//     font-weight: 400;
//   }
  
//   .display-section .button {
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
//     margin: 15px;
//   }
  
//   .display-section .back-button {
//     background: white;
//     color: black;
//     border: none;
//     border-radius: 50px;
//     padding: 10px 30px;
//     font-size: 0.6rem;
//     cursor: pointer;
//     transition: all 0.8s ease;
//     position: fixed;
//     bottom: 10px;
//     right: 10px;
//   }
  
export default DisplaySection;
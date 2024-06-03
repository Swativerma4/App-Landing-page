import React from 'react'
import "./Home.css"
import { assets } from '../../assets/assets'
export default function Home() {
  return (
   
    <div className='container'>
    <div className='star1'>
        <img src={assets.star1}></img>
       </div>
    <div className='container-left'>
    <img  className="container-star3"src={assets.star3}></img>
      <div className='container-main'>
      <p>Make The best Financial Decisions</p></div>
      <img className='container-group1' src={assets.group}></img>
      
      <div className='container-main-small'>
      Cum Et Convallis Risus Placerat Aliquam, Nunc.Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu lorem porttitor.
      </div>
      <div className='container-start'>
        <button className='container-start-inner'>Get started  </button>
    
     <div className='container-play'>
     <img className='container-image' src={assets.play}></img>
     <div className='conatiner-watch'>Watch Video</div>
     </div> 
     </div>
     <div className='star2'>
      <img src={assets.star1}></img>
     </div>
     <div className='group1'>
      <img src={assets.group1}></img>
     </div>
      </div>
       <div className='container-right'>
       
        <div className='container-ring'>
          <img src={assets.rings}></img>
        </div>
          <div className='container-group'>
            <img src={assets.group}></img>
          </div>
          <div className='container-phone3'>
            <img src={assets.phone3}></img>
          </div>
          <div className='container-phone2'>
            <img src={assets.phone2}></img>
          </div>
          <div className='container-phone1'>
            <img src={assets.phone1}></img>
          </div>
          <div className='star2'>
        <img src={assets.star3}></img>
       </div>
       </div>
      </div>
      
  
  )
}

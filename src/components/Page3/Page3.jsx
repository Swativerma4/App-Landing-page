import React from 'react'
import { assets } from '../../assets/assets'
import "./Page3.css"
export default function Page3() {
  return (
    <div className='conatiner-page3'>
    <div className='conatiner-page3-left'>
    <div className='container-grp'><img src={assets.group}></img></div>
    <div className='container-rings'><img src={assets.rings}></img></div>
    <div className='container-phone'><img src={assets.phone1}></img></div>
    </div>
    <div className='conatiner-page3-right'>
    <div className='container-points'>
    <img className='container-ring' src={assets.pagestart}></img>
    <div className='container-budget'>Fully Customizable</div>
    </div>
    </div>
        

      
    </div>
  )
}

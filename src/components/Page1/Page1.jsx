import React from 'react'
import { assets } from '../../assets/assets'
import "./Page1.css"

export default function Page1() {
  return (
  
    <div className='container-page'>
    <div className='container-page-left'>
        <div className='container-grp'><img src={assets.group}></img></div>
        <div className='container-rings'><img src={assets.rings}></img></div>
        <div className='container-phone'><img src={assets.phone1}></img></div>
        <img  className="left-star" src={assets.star1}></img>
    </div>
    <div className='container-page-right'>

    <div className='container-features'>FEATURES</div>
    <div className='container-header-2'>Uifry Premium</div>
    <img  className="page-group" src={assets.group}></img>
    <div className='container-points'>
    <img src={assets.star5}></img>
    <div className='container-budget'>Budgeting Intervals</div>
    </div>
    <div className='container-para'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
    <div className='container-points'>
    <img src={assets.icon}></img>
    <div className='container-budget'>Budgeting Intervals</div>
    </div>
    <div className='container-para'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
    <div className='container-points'>
    <img src={assets.cube}></img>
    <div className='container-budget'>Budgeting Intervals</div>
    </div>
    <div className='container-para'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
    
    </div>
    </div>


   
  )
}

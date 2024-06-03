import React from 'react'
import { assets } from '../../assets/assets'
import "./Page2.css"

export default function Page2() {
  return (
    <div className='container-page2'>
    <div className='page2-left'>
    <div className='container-features'>ADVATNAGES</div>
    <div className='container-header-2'>Why Choose Uifry ?</div>
    <div className='container-points'>
    <img className='container-ring' src={assets.ring}></img>
    <div className='container-budget'>Clever Notifications</div>
    </div>
    <div className='container-para'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
    </div>
    <div className='container-page2-right'>
        <div className='container-grp'><img src={assets.group}></img></div>
        <div className='container-rings'><img src={assets.rings}></img></div>
        <div className='container-phone'><img src={assets.phone1}></img></div>
        <img className='page2-star' src={assets.star1}></img>

    </div>
    </div>
  )
}

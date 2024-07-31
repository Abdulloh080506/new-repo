import React from 'react';
// import BannerBG from '../../../assets/images/Bitmap@2x.png';
import '../banner/banner.css'

export const Banner = () => {
  return (
    <div className='banner-container'>
        <div className="banner-mini-container">
            <div className="banner-components">
                <div className='banner-mini-components'>
                    <h1>Great coffee made simple.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero neque dolore minus porro illum rerum, sed autem, voluptatum tempore et nulla nostrum omnis, delectus ad dolorem vel! Esse, nam eos?</p>
                    <button>Create your plan</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;
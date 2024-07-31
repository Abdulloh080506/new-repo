import React from 'react';
import AboutCoffee from '../../../assets/images/Bitmap.jpg';
import '../aboutelement1/aboutelement.css'

export const AboutElement = () => {
  return (
    <div className='about-element-container'>
        <div className="mini-container">
            <div className="image"><img src={AboutCoffee} alt="" /></div>
            <div className="text">
              <div className='text-box'>
                  <h3>Our commitment</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae enim sint aperiam praesentium reprehenderit corporis voluptatum fuga ratione, asperiores itaque, suscipit nobis ex sunt in nihil! Vero omnis officia distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed ipsum cumque eius id iure. Neque repellat, repudiandae ullam, possimus debitis in eius consequuntur nemo quam ipsa quaerat voluptatum itaque Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius perferendis ut quisqua</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutElement;
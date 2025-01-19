import React from 'react'
import './Home.css'
import imgURL1 from '../assets/Screenshot 2024-10-04 183534.svg'
import imgURL2 from '../assets/Screenshot 2024-10-04 183535.svg'
import imgURL3 from '../assets/Screenshot 2024-10-04 183536.svg'
import imgURL4 from '../assets/Screenshot 2024-10-04 183537.svg'
import imgURL5 from '../assets/Screenshot 2024-10-04 183538.svg'
import imgURL6 from '../assets/Screenshot 2024-10-04 183539.svg'
import imgURL7 from '../assets/Screenshot 2024-11-12 085230 1.svg'
import imgURL8 from '../assets/Screenshot 2024-11-12 085230 2.svg'
import imgURL9 from '../assets/Screenshot 2024-11-12 085230 3.svg'
import imgURL10 from '../assets/Screenshot 2024-11-12 085230 4.svg'
import imgURL11 from '../assets/Screenshot 2024-11-12 085230 5.svg'
import imgURL12 from '../assets/Screenshot 2024-11-12 085230 6.svg'
import imgURL13 from '../assets/Screenshot 2024-11-12 085230 7.svg'
import imgURL14 from '../assets/Screenshot 2024-11-12 085230 8.svg'
import imgURL15 from '../assets/Screenshot 2024-11-12 085230 9.svg'
import imgURL16 from '../assets/Screenshot 2024-11-12 085230 10.svg'
import imgURL17 from '../assets/Screenshot 2024-11-12 085230 11.svg'
import imgURL18 from '../assets/Screenshot 2024-11-12 085230 12.svg'

const imageMarquee1 =[
    {imgURL: imgURL1},
    {imgURL: imgURL2},
    {imgURL: imgURL3},
    {imgURL: imgURL4},
    {imgURL: imgURL5},
    {imgURL: imgURL6},
    {imgURL: imgURL7},
    {imgURL: imgURL8},
    {imgURL: imgURL9},   
];

const imageMarquee2 =[
    {imgURL: imgURL10},
    {imgURL: imgURL11},
    {imgURL: imgURL12},
    {imgURL: imgURL13},
    {imgURL: imgURL14},
    {imgURL: imgURL15},
    {imgURL: imgURL16},
    {imgURL: imgURL17},
    {imgURL: imgURL18},  
]

const Teams = () => {
  return (
    <div className='teams'>
        <h1>Trusted by the world’s most innovative teams</h1>
        <div className='image-display-container'>
        <div className="image-display">
            {
                imageMarquee1.map((data,index)=>{
                    return <div key={index} className="image-display-wrapper">
                        <img src={data.imgURL} alt="" />
                    </div>
                })
            }
        </div>
        <div className="image-display">
            {
                imageMarquee2.map((data,index)=>{
                    return <div key={index} className="image-display-wrapper">
                        <img src={data.imgURL} alt="" />
                    </div>
                })
            }
        </div>
        </div>
        <div className='imageTwo-display-container'>
        <div className="imageTwo-display">
            {
                imageMarquee2.map((data,index)=>{
                    return <div key={index} className="imageTwo-display-wrapper">
                        <img src={data.imgURL} alt="" />
                    </div>
                })
            }
        </div>
        <div className="imageTwo-display">
            {
                imageMarquee2.map((data,index)=>{
                    return <div key={index} className="imageTwo-display-wrapper">
                        <img src={data.imgURL} alt="" />
                    </div>
                })
            }
        </div>
        </div>
    </div>
  )
}

export default Teams
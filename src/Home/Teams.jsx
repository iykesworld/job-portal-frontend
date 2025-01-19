import React from 'react'
import './Home.css'

const imageMarquee1 =[
    {imgURL: "/src/assets/Screenshot 2024-10-04 183534.svg",},
    {imgURL: "/src/assets/Screenshot 2024-10-04 183535.svg",},
    {imgURL: "/src/assets/Screenshot 2024-10-04 183536.svg",},
    {imgURL: "/src/assets/Screenshot 2024-10-04 183537.svg",},
    {imgURL: "/src/assets/Screenshot 2024-10-04 183538.svg",},
    {imgURL: "/src/assets/Screenshot 2024-10-04 183539.svg",},
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 1.svg",},
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 2.svg",},
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 3.svg",},   
];

const imageMarquee2 =[
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 4.svg",},
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 5.svg",},
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 6.svg",},
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 7.svg",},
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 8.svg",},
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 9.svg",},
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 10.svg",},
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 11.svg",},
    {imgURL: "/src/assets/Screenshot 2024-11-12 085230 12.svg",},  
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
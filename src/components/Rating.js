import React,{useState} from 'react'
import {AiOutlineStar} from "react-icons/ai"
import "./Rating.css"
const Rating = () => {
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);

  return (
    <div className='star-rating'>
        {[...Array(5)].map((star,i)=>{
            i+=1;
            return(
                <button
                    type="button"
                    key={i}
                    className={i<=(rating || hover)? "on": "off"}
                    onClick={()=> setRating(i)}
                    onMouseEnter={()=>setHover(i)}
                    onMouseLeave={()=>{setHover(rating)}}
                    >
                        <span className="star"><AiOutlineStar /></span>
                    </button>
            )
        })}
      
    </div>
  )
}

export default Rating


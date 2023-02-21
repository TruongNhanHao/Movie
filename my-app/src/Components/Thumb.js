import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Thumb = ({ image, movieId, clickable}) => {
    return (
        <div>
            {clickable ? (<Link to={`${movieId}`}>
                <Image className="images" src={image} />
            </Link>): 
                <Image className="images" src={image} />
            
            
            }
        </div>
    )
}
const Image = styled.img`
      width: 100%;
      max-width: 720px;
      transition: all 0.3s;
      object-fit: cover;
      border-radius: 20px;
      animation: ani 0.5s;
       :hover{
      opacity:0.8;
      cursor: pointer;
    }
    @keyframes ani {
      from {
          opacity: 0;
      }
      to{
          opacity: 1;
        }
    }
  
`;

export default Thumb

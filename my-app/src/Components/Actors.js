import React from 'react';
import styled from "styled-components";

const Actors = ({name, character, imageUrl}) => {
    return (
        <ActorsStyled>
            <img src={imageUrl} alt='' />
            <h3>{name}</h3>
            <p>{character}</p> 
        </ActorsStyled>
    )
}
const ActorsStyled = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    padding: 5px;
  text-align: center;
    img{
        display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
    }
    h2{
        margin: 10px 0 0 0;
    }

`;


export default Actors;
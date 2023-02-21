import React from 'react'
import styled from 'styled-components';
import { calcTime, convertMoney } from '../helpers';

const  MovieInfoBar = ({time, budget, revenue}) => {
    return (
        <MovieInfoBarStyled>
           <div className='content'>
           <div className='column'>
        <p>Running time: {calcTime(time)}</p>
      </div>
      <div className='column'>
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div className='column'>
        <p>Revenue: {convertMoney(revenue)}</p>
      </div> 
            </div> 
        </MovieInfoBarStyled>
    )
}
const MovieInfoBarStyled= styled.div`
    width: 100%;
  background: var(--darkGrey);

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        .column{
        margin: 15px;
        width: 20%;
        height: 40px;
        border-radius: 20px;
        color: var(--white);
        background: var(--medGrey);
        align-items: center;
        justify-content: center;
        display: flex;
        :not(:last-child){
            margin-right: 50px;
        }
    }
    }
    

`;
export default MovieInfoBar

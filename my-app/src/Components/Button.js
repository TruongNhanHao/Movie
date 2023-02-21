import React from 'react'
import styled from 'styled-components'

function Button({text, callback}) {
    return (
        <ButtonStyled type='button' onClick={callback}>
            {text}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
     display: flex;
     justify-content: center;
     align-items: center;
     margin: 20px auto;
     padding: 10px;
     border: none;
     border-radius: 5px;
     font-size: 1.4rem;
     background-color: aqua;
     background: var(--darkGrey);
     color: var(--white);
     transition: all 0.3s;
     cursor: pointer;
     outline: none;
     :hover{
         opacity: 0.6;
     }

`;
export default Button

import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components';
import searchIcon from '../images/search-icon.svg';

function SearchBar({ setSearchTerm }) {
    const [state, setState] = useState('');
    const innit = useRef(true)
    useEffect(() => {
        if(innit.current){
            innit.current = false;
            return;
        }
        const timer = setTimeout(() =>{
            setSearchTerm(state);
        }, 500)
        return () => {
         clearTimeout(timer)
        }
    }, [setSearchTerm, state]) //chi dinh lam phu thuoc
    return (
        <Wrapper>
            <Content>
        <img src={searchIcon} alt=''></img>
        <input
            type='text'
            placeholder='Search Movie'
            onChange={(e) =>setState(e.currentTarget.value)}
            value={state}
        
        />

            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
     background-color: var(--darkGrey);
     display: flex;
     align-items: center;
     padding: 0 20px;
     height: 100px;
 `;
const Content = styled.div`
     width:80%;
     position: relative;
  /* max-width: var(--maxWidth); */
     margin: 0 auto;
     height: 55px;
    border-radius: 40px ;
    background: var(--medGrey);
    img{
        width: 30px;
        padding:7px;
        position: absolute;
        left: 15px;
        top:14px;
    }
    input{
         /* outline-style: none; */
         font-size: var(--fontBig);
         width: 100%;
         border-radius: 20px;
         position: absolute;
         left: 0;
         margin: 8px 0;
         padding: 0 0 0 60px;
         border: none;
         width: 95%;
         background: transparent;
         height: 40px;
         color: var(--white);
         :focus{
             outline: none;
         }
    }
`;

export default SearchBar

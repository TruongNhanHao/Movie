import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RMDBLogo from '../images/react-movie-logo.svg';
import TMDBLogo from '../images/tmdb_logo.svg';
function Header() {
    return (
       <HeaderStyled>
         <div className='content'>
           <Link to='/'>
           <img className='LogoImg' src={RMDBLogo} alt=""></img>

           </Link>
           <img className='TMDBLogoImg' src={TMDBLogo} alt=""></img>
         </div>

       </HeaderStyled>
      )
}
const HeaderStyled = styled.header`
     background: var(--darkGrey);
     padding: 0 20px;
     .content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: var(--maxwidth);
      padding: 20px 0;
      margin: 0 120px;
      color: var(--white);
      /* a{
        color: var(--white);
        text-decoration: none;
      } */
      .LogoImg{
        width: 200px;
      }
      .TMDBLogoImg{
        width: 100px;
      }
     }

  
`;
export default Header;
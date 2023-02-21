import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

function BreadCrumb({moveTitle}) {
    return (
        <BreadCrumbStyled>
            <div className="content">
                <Link to='/'>
                    <span className="active">Home</span>
                </Link>
                <span>|</span>
                <span>{moveTitle}</span>
            </div>
        </BreadCrumbStyled>
    )
}

const BreadCrumbStyled = styled.div`
  width: 100%;
  height: 40px;
  background: var(--medGrey);
  color: var(--white);
  position: relative;
  .content{
      position: absolute;
      margin: 5px 15px 0 120px;
   span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }

  }
  }
`;
export default BreadCrumb;

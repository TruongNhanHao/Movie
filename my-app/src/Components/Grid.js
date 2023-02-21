import React from 'react'
import styled from 'styled-components'

function Grid({ header, children}) {
    return (
        <GridStyled>
            <h1>{header}</h1>
            <div className='content'>{children}</div>
        </GridStyled>
    )
}
const GridStyled = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
  .content{
      display: grid;
      grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 2rem;
  }
`;

export default Grid

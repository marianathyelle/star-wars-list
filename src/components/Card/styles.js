import styled from 'styled-components';

export const ContentCard = styled.div`
  padding: 10px;
  border: 1px solid #FFC500;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const HeaderCard = styled.div`
  padding: 8px;
  border-radius: 5px;


  h1 {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    color: #FFC500;
    margin: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    justify-content: center;
    
    strong {
      font-size: 14px;
      color: white;
      margin-right: 10px;
    }

    span {
      color: #FFC500;
    }
  }
`;
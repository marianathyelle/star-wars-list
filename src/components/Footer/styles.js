import styled from 'styled-components';

export const Button = styled.button`
  background-color: #A50304;
  padding: 10px 25px;
  border: none;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;

  &:hover,
  &:active,
  &:focus {
    background-color: #8e0808;
    outline: none;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  i {
    font-size: 42px;
    color: white;
  }
`;
import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding: 20px 40px;
  background-color: white;
  border-bottom: 2px solid orange;
  border-right: 2px solid orange;
  border-left: 2px solid orange;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 5px 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  :focus {
    border-color: orange;
  }
`;

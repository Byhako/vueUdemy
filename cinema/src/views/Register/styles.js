import styled from 'vue-styled-components';
import colors from '../../colors';

export const Title = styled.h1`
  color: ${colors.palette.text1};
  margin: 20px auto;
`;

export const Login = styled.div`
  width: 50%;
  margin: 50px auto 0;
`;

export const ItemForm = styled.div`
  width: 100%;
  display: flex;
  margin: 20px auto;
`;

export const Label = styled.label`
  color: ${colors.palette.text1};
  font-size: 18px;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${colors.palette.green1};
  outline: none;
  border: none;
`;

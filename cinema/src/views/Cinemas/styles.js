import styled from 'vue-styled-components';
import colors from '../../colors';

export const Title = styled.h1`
  color: ${colors.palette.darkBlue};
  background: ${colors.palette.text1};
  font-size: 40px;
  text-align: center;
  margin: 32px auto;
  width: 27%;
  border-radius: 29px;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
`;

import styled from 'vue-styled-components';
import colors from '../../colors';

export const Wrapper = styled.div`
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    color: ${colors.palette.text1};
  }
  label {
    color: ${colors.palette.white};
    width: 100%;
  }
`;

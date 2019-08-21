import styled from 'vue-styled-components';
import colors from '../../colors';

export const CinemaItem = styled.div`
  background-color: ${colors.palette.darkBlue};
  padding: 15px;
  display: flex;
`;

export const Img = styled.img`
  width: 100%;
`;

export const H4 = styled.h4`
  color: ${colors.palette.gris1};
  font-weight: bold;
  margin-top: 20px;
  span {
    font-weight: normal;
    color: ${colors.palette.white};
  }
`;

export const P = styled.p`
  color: ${colors.palette.gris1};
  font-weight: bold;
  span {
    font-weight: normal;
    color: ${colors.palette.white};
  }
`;

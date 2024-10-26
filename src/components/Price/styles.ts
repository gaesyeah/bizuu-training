import styled from 'styled-components/native';
import {Size} from './Price';

const PriceContainer = styled.View<{size: Size}>`
  width: auto;
  background-color: ${({theme}) => theme.COLORS.GRAY};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({size}) => (size === 'big' ? '4px 7px 4px 7px' : '3px')};
  margin-left: ${({size}) => (size === 'small' ? 8 : 0)}px;
  border-radius: 6px;
`;

const PriceText = styled.Text<{size: Size}>`
  overflow: hidden;
  max-width: auto;
  min-height: auto;
  font-size: ${({size}) => (size === 'big' ? 16 : 13)}px;
  font-weight: 700;
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const StyledPrice = {
  Container: PriceContainer,
  Text: PriceText,
};

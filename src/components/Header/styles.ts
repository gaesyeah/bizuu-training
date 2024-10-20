import styled from 'styled-components/native';

export const StyledHeader = styled.View`
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.RED};
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const Logo = styled.Text`
  margin-bottom: 5px;
  margin-left: 17px;
  font-size: 32px;
  font-weight: 600;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
`;

export const Cart = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 52px;
  height: 27px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  margin-right: 17px;
`;

export const CartQuantity = styled.Text`
  font-size: 13px;
  margin-right: 4px;
  font-weight: 700;
  color: ${({theme}) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
`;

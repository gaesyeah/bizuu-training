import styled from 'styled-components/native';

const ProductInCartContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 80px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 8px;
  align-self: center;
  margin-top: 12px;
`;

const ProductInCartSubContainer = styled.View`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.Image`
  height: 100%;
  width: 50%;
  border-radius: 8px 0 0 8px;
  align-self: flex-start;
`;

const ProductInCartName = styled.Text`
  font-size: 13px;
  font-weight: 400;
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
  color: ${({theme}) => theme.COLORS.BLACK};
  margin-bottom: 4px;
`;

export const StyledProductInCart = {
  Container: ProductInCartContainer,
  Photo,
  Box: {
    Container: ProductInCartSubContainer,
    Name: ProductInCartName,
  },
};

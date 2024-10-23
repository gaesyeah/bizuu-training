import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const styleSheet = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4.5,
    elevation: 10,
  },
});

const Container = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 218px;
  height: 285px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 10px;
`;

const Photo = styled.Image`
  border-radius: 10px 10px 0 0;
  height: 50%;
  width: 100%;
`;

const SubContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50%;
  position: relative;
  border-radius: 0px 0px 10px 10px;
`;

const ProductButton = styled.TouchableOpacity<{isProductOnCart: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  position: absolute;
  bottom: 0;
  opacity: ${({isProductOnCart}) => (isProductOnCart ? 0.85 : 1)};
  background-color: ${({theme}) => theme.COLORS.RED};
  width: 100%;
  height: 32px;
  border-radius: 0px 0px 10px 10px;
`;

const ProductButtonText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
`;

const InfoContainer = styled.View`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 8px 12px 8px 12px;
  width: 100%;
`;

const InfoText = styled.Text`
  max-width: 120px;
  min-height: 38px;
  overflow-y: auto;
  font-size: 17px;
  font-weight: 400;
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
  color: ${({theme}) => theme.COLORS.GRAY};
`;

const ProductPrice = styled.View`
  width: auto;
  background-color: ${({theme}) => theme.COLORS.GRAY};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 7px 4px 7px;
  border-radius: 4px;
`;

const ProductPriceText = styled.Text`
  overflow: hidden;
  max-width: auto;
  min-height: auto;
  font-size: 16px;
  font-weight: 700;
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
  color: ${({theme}) => theme.COLORS.WHITE};
`;

const ProductDescription = styled.Text`
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
  max-width: 192px;
  min-height: 25px;
  font-size: 11px;
  font-weight: 300;
  color: ${({theme}) => theme.COLORS.GRAY};
`;

export const StyledProduct = {
  Container,
  styleSheet,
  Photo,
  Box: {
    Container: SubContainer,
    Button: ProductButton,
    ButtonText: ProductButtonText,
    Description: ProductDescription,
  },
  Info: {
    Container: InfoContainer,
    Text: InfoText,
    Price: ProductPrice,
    PriceText: ProductPriceText,
  },
};

import {Animated} from 'react-native';
import styled from 'styled-components/native';

const CartContainer = styled(Animated.View)`
  justify-content: center;
  height: 100%;
  width: 75%;
  position: absolute;
  transition: 300ms ease-out;
  right: 0;
  z-index: 2;
  background-color: ${({theme}) => theme.COLORS.RED};
`;

const CloseCart = styled(Animated.View)`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => `${theme.COLORS.BLACK}85`};
`;

const TouchCloseCart = styled.TouchableOpacity<{isCartOpen: boolean}>`
  height: 100%;
  width: 25%;
  position: absolute;
  left: 0;
  z-index: 2;
`;

const CartTitle = styled.Text`
  text-align: center;
  margin-top: 7px;
  font-size: 28px;
  font-weight: 700;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
  margin-bottom: 16px;
`;

const FinishOrderContainer = styled.View`
  display: flex;
  bottom: 0;
  width: 100%;
  position: absolute;
`;

const PriceContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin-bottom: -15px;
`;

const FinalPriceText = styled.Text`
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: 28px;
  font-weight: 700;
`;

const FinishOrderButton = styled.TouchableOpacity<{isCartEmpty: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: ${({theme}) => theme.COLORS.BLACK};
  opacity: ${({isCartEmpty}) => (isCartEmpty ? 0.9 : 1)};
`;

const FinishOrderButtonText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const StyledCart = {
  Container: {
    Cart: CartContainer,
    Title: CartTitle,
  },
  CloseCart,
  TouchCloseCart,
  FinishOrder: {
    Container: FinishOrderContainer,
    PriceContainer,
    PriceText: FinalPriceText,
    Button: {
      Container: FinishOrderButton,
      Text: FinishOrderButtonText,
    },
  },
};

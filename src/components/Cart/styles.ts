import {Animated} from 'react-native';
import styled from 'styled-components/native';

const CartContainer = styled(Animated.View)`
  flex-direction: row;
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
  margin-top: 7px;
  font-size: 28px;
  font-weight: 700;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
`;

export const StyledCart = {
  Container: {
    Cart: CartContainer,
    Title: CartTitle,
  },
  CloseCart,
  TouchCloseCart,
};

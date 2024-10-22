import React, {useEffect, useRef} from 'react';
import {StyledCart} from './styles';
import {useCartContext} from '../../contexts/CartContext';
import {Animated, Dimensions, Touchable, TouchableOpacity} from 'react-native';

const Cart: React.FC = () => {
  const {openCart, setOpenCart} = useCartContext();
  const isCartOpen = openCart;

  const screenWidth = Dimensions.get('window').width;
  const useAnimation = (multiplier: number) => {
    return useRef(new Animated.Value(-screenWidth * multiplier)).current;
  };
  const left = 0.25;
  const right = 0.75;
  const animateRight = useAnimation(right);
  const animateLeft = useAnimation(left);

  const animate = (type: typeof left | typeof right) => {
    Animated.timing(type === left ? animateLeft : animateRight, {
      toValue: isCartOpen ? 0 : -screenWidth * type,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animate(left);
    animate(right);
  }, [isCartOpen]);

  return (
    <>
      {isCartOpen && (
        <StyledCart.TouchCloseCart
          isCartOpen={isCartOpen}
          onPress={() => setOpenCart(false)}>
          <StyledCart.CloseCart style={{left: animateLeft}} />
        </StyledCart.TouchCloseCart>
      )}

      <StyledCart.Container.Cart style={{right: animateRight}}>
        <StyledCart.Container.Title>
          Carrinho de Compras
        </StyledCart.Container.Title>
      </StyledCart.Container.Cart>
    </>
  );
};

export default Cart;

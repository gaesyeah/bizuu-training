import React, {useEffect, useRef} from 'react';
import {StyledCart} from './styles';
import {useCartContext} from '../../contexts/CartContext';
import {Animated, Dimensions, FlatList, View} from 'react-native';
import ProductInCart from './ProductInCart/ProductInCart';

const Cart: React.FC = () => {
  const {
    productsInCart,
    setProductsInCart,
    openCart,
    setOpenCart,
    formatPrice,
  } = useCartContext();
  const isCartOpen = openCart;

  const screenWidth = Dimensions.get('window').width;
  const useAnimation = (multiplier: number) => {
    return useRef(new Animated.Value(-screenWidth * multiplier)).current;
  };
  const left = 0.15;
  const right = 0.85;
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

  const finalPrice = productsInCart.reduce(
    (accumulator, {price, quantity}) => accumulator + price * quantity,
    0,
  );

  const isCartEmpty = productsInCart.length === 0;

  const finishOrder = () => {
    setProductsInCart([]);
    setOpenCart(false);
  };

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
        <StyledCart.Container.Box>
          <StyledCart.Container.Title>
            Carrinho de Compras
          </StyledCart.Container.Title>

          <StyledCart.Container.List>
            <FlatList
              data={productsInCart}
              renderItem={({item}) => (
                <ProductInCart productInCart={item} key={item.id} />
              )}
            />
          </StyledCart.Container.List>
        </StyledCart.Container.Box>

        <StyledCart.FinishOrder.Container>
          <StyledCart.FinishOrder.PriceContainer>
            <StyledCart.FinishOrder.PriceText>
              Total:
            </StyledCart.FinishOrder.PriceText>
            <StyledCart.FinishOrder.PriceText>
              {formatPrice(finalPrice)}
            </StyledCart.FinishOrder.PriceText>
          </StyledCart.FinishOrder.PriceContainer>

          <StyledCart.FinishOrder.Button.Container
            isCartEmpty={isCartEmpty}
            disabled={isCartEmpty}
            onPress={finishOrder}>
            <StyledCart.FinishOrder.Button.Text>
              {isCartEmpty ? 'CARRINHO VAZIO' : 'FINALIZAR COMPRA'}
            </StyledCart.FinishOrder.Button.Text>
          </StyledCart.FinishOrder.Button.Container>
        </StyledCart.FinishOrder.Container>
      </StyledCart.Container.Cart>
    </>
  );
};

export default Cart;

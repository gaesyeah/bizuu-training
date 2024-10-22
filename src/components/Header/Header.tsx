import React from 'react';
import {StyledHeader} from './styles';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {useCartContext} from '../../contexts/CartContext';

const Header: React.FC = () => {
  const {cartProducts, setOpenCart} = useCartContext();

  const cartIcon = (
    <FontAwesome6 name="cart-shopping" iconStyle="solid" size={18} />
  );

  return (
    <StyledHeader.Container>
      <StyledHeader.Logo>Bizuu</StyledHeader.Logo>

      <StyledHeader.Cart.Button onPress={() => setOpenCart(true)}>
        {cartIcon}
        <StyledHeader.Cart.Quantity>
          {cartProducts.length}
        </StyledHeader.Cart.Quantity>
      </StyledHeader.Cart.Button>
    </StyledHeader.Container>
  );
};

export default Header;

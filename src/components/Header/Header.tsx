import React from 'react';
import {Cart, CartQuantity, Logo, StyledHeader} from './styles';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

const Header: React.FC = () => {
  const cartIcon = (
    <FontAwesome6 name="cart-shopping" iconStyle="solid" size={18} />
  );

  return (
    <StyledHeader>
      <Logo>Bizuu</Logo>

      <Cart>
        {cartIcon}
        <CartQuantity>0</CartQuantity>
      </Cart>
    </StyledHeader>
  );
};

export default Header;

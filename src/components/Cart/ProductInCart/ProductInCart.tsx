import {ProductInCart} from '../../../types/product';
import QuantityHandlerComponent from '../QuantityHandler/QuantityHandler';
import {StyledProductInCart} from './styles';

const ProductInCartComponent: React.FC<{productInCart: ProductInCart}> = ({
  productInCart,
}) => {
  const {photo: uri, name, quantity, id} = productInCart;

  return (
    <StyledProductInCart.Container>
      <StyledProductInCart.Photo source={{uri}} resizeMode="cover" />

      <StyledProductInCart.Box.Container>
        <StyledProductInCart.Box.Name>{name}</StyledProductInCart.Box.Name>

        <QuantityHandlerComponent quantity={quantity} id={id} />
      </StyledProductInCart.Box.Container>
    </StyledProductInCart.Container>
  );
};

export default ProductInCartComponent;

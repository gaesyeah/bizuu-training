import {ProductInCart} from '../../../types/product';
import QuantityHandlerComponent from '../QuantityHandler/QuantityHandler';
import {StyledProductInCart} from './styles';
import Price from '../../Price/Price';

const ProductInCartComponent: React.FC<{productInCart: ProductInCart}> = ({
  productInCart,
}) => {
  const {photo: uri, name, quantity, id, price} = productInCart;

  return (
    <StyledProductInCart.Container>
      <StyledProductInCart.Photo source={{uri}} resizeMode="cover" />

      <StyledProductInCart.Box.Container>
        <StyledProductInCart.Box.Name>{name}</StyledProductInCart.Box.Name>

        <StyledProductInCart.QtdPrice>
          <QuantityHandlerComponent quantity={quantity} id={id} />
          <Price price={price * quantity} size={'small'} />
        </StyledProductInCart.QtdPrice>
      </StyledProductInCart.Box.Container>
    </StyledProductInCart.Container>
  );
};

export default ProductInCartComponent;

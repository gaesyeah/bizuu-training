import {Product} from '../../types/product';
import {StyledProduct} from './styles';
import {useCartContext} from '../../contexts/CartContext';
import Price from '../Price/Price';

const ProductComponent: React.FC<{product: Product; isLoading: boolean}> = ({
  product,
  isLoading,
}) => {
  const {id, price, description, name, photo: uri} = product;
  const {productsInCart, setProductsInCart} = useCartContext();

  const isProductOnCart = productsInCart.some(prod => prod.id === id);

  const handleCart = () => {
    if (isProductOnCart) {
      return setProductsInCart(previous =>
        previous.filter(prod => prod.id !== id),
      );
    }
    setProductsInCart(previous => [...previous, {...product, quantity: 1}]);
  };

  return (
    <StyledProduct.Container style={StyledProduct.styleSheet.shadow}>
      <StyledProduct.Photo source={{uri}} resizeMode="cover" />

      <StyledProduct.Box.Container>
        <StyledProduct.Info.Container>
          <StyledProduct.Info.Text>{name}</StyledProduct.Info.Text>

          <Price price={price} size={'big'} />
        </StyledProduct.Info.Container>

        <StyledProduct.Box.Description>
          {description}
        </StyledProduct.Box.Description>

        <StyledProduct.Box.Button
          isProductOnCart={isProductOnCart}
          onPress={handleCart}>
          <StyledProduct.Box.ButtonText>
            {isProductOnCart ? 'REMOVER DO CARRINHO' : 'ADICIONAR AO CARRINHO'}
          </StyledProduct.Box.ButtonText>
        </StyledProduct.Box.Button>
      </StyledProduct.Box.Container>
    </StyledProduct.Container>
  );
};

export default ProductComponent;

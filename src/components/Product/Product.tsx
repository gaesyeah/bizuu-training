import {Product} from '../../types/product';
import {StyledProduct} from './styles';
import {useCartContext} from '../../contexts/CartContext';

const ProductComponent: React.FC<{product: Product; isLoading: boolean}> = ({
  product,
  isLoading,
}) => {
  const {id, price, description, name, photo: uri} = product;
  const {cartProducts, setCartProducts} = useCartContext();

  const isProductOnCart = cartProducts.some(prod => prod.id === id);

  const handleCart = () => {
    if (isProductOnCart) {
      return setCartProducts(previous =>
        previous.filter(prod => prod.id !== id),
      );
    }
    setCartProducts(previous => [...previous, {...product, quantity: 1}]);
  };

  return (
    <StyledProduct.Container style={StyledProduct.styleSheet.shadow}>
      <StyledProduct.Photo source={{uri}} resizeMode="cover" />

      <StyledProduct.Box.Container>
        <StyledProduct.Info.Container>
          <StyledProduct.Info.Text>{name}</StyledProduct.Info.Text>

          <StyledProduct.Info.Price>
            <StyledProduct.Info.PriceText>
              R${price}
            </StyledProduct.Info.PriceText>
          </StyledProduct.Info.Price>
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

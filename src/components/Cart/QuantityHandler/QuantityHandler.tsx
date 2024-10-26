import {useCartContext} from '../../../contexts/CartContext';
import {ProductInCart} from '../../../types/product';
import {QuantityHandler} from './styles';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

type IdAndQuantity = Pick<ProductInCart, 'id' | 'quantity'>;

const QuantityHandlerComponent: React.FC<IdAndQuantity> = ({id, quantity}) => {
  const {setProductsInCart} = useCartContext();

  const handleQuantity = (operation: 'sum' | 'sub') => {
    setProductsInCart(previous => {
      return previous
        .map(({quantity: qtd, ...prod}) => {
          if (prod.id === id) {
            const newQuantity = operation === 'sum' ? qtd + 1 : qtd - 1;
            return {...prod, quantity: newQuantity};
          } else {
            return {...prod, quantity: qtd};
          }
        })
        .filter(({quantity: qtd}) => qtd > 0);
    });
  };

  const trashIcon = (
    <FontAwesome6 name="trash-can" color="black" iconStyle="solid" size={11} />
  );

  return (
    <QuantityHandler.Container>
      <QuantityHandler.Button onPress={() => handleQuantity('sub')}>
        {quantity === 1 ? (
          trashIcon
        ) : (
          <QuantityHandler.Text isButton={true}>-</QuantityHandler.Text>
        )}
      </QuantityHandler.Button>

      <QuantityHandler.Separator />

      <QuantityHandler.Text>{quantity}</QuantityHandler.Text>

      <QuantityHandler.Separator />

      <QuantityHandler.Button onPress={() => handleQuantity('sum')}>
        <QuantityHandler.Text isButton={true}>+</QuantityHandler.Text>
      </QuantityHandler.Button>
    </QuantityHandler.Container>
  );
};

export default QuantityHandlerComponent;

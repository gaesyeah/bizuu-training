import {useCartContext} from '../../contexts/CartContext';
import {ProductInCart} from '../../types/product';
import {StyledPrice} from './styles';

type Price = Pick<ProductInCart, 'price'>;
export type Size = 'big' | 'small';

const Price: React.FC<Price & {size: Size}> = ({price, size}) => {
  const {formatPrice} = useCartContext();

  return (
    <StyledPrice.Container size={size}>
      <StyledPrice.Text size={size}>{formatPrice(price)}</StyledPrice.Text>
    </StyledPrice.Container>
  );
};

export default Price;

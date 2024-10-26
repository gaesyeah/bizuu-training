import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import {ProductInCart} from '../types/product';

type CartOpenedState = {
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
};
type CartState = {
  productsInCart: ProductInCart[];
  setProductsInCart: Dispatch<SetStateAction<ProductInCart[]>>;
};
type FormatPrice = (price: number) => string;

type CartStateContext = CartOpenedState &
  CartState & {formatPrice: FormatPrice};

const CartContext = createContext<CartStateContext | undefined>(undefined);
export default CartContext;

export const CartProvider: FC<{children: ReactNode}> = ({children}) => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [productsInCart, setProductsInCart] = useState<ProductInCart[]>([]);

  const formatPrice: FormatPrice = price => `R$ ${price.toFixed(2)}`;

  const memoValue = useMemo(
    () => ({
      openCart,
      setOpenCart,
      productsInCart,
      setProductsInCart,
      formatPrice,
    }),
    [openCart, productsInCart],
  );

  return (
    <CartContext.Provider value={memoValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

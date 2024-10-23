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
  cartProducts: ProductInCart[];
  setCartProducts: Dispatch<SetStateAction<ProductInCart[]>>;
};
type CartStateContext = CartOpenedState & CartState;

const CartContext = createContext<CartStateContext | undefined>(undefined);
export default CartContext;

export const CartProvider: FC<{children: ReactNode}> = ({children}) => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<ProductInCart[]>([]);

  /* const priceInNumber = (price: number) => parseInt(price.) */

  const memoValue = useMemo(
    () => ({openCart, setOpenCart, cartProducts, setCartProducts}),
    [openCart, cartProducts],
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

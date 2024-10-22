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
import {Product} from '../types/product';

type CartOpenedState = {
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
};
type CartState = {
  cartProducts: Product[];
  setCartProducts: Dispatch<SetStateAction<Product[]>>;
};
type CartStateContext = CartOpenedState & CartState;

const CartContext = createContext<CartStateContext | undefined>(undefined);
export default CartContext;

export const CartProvider: FC<{children: ReactNode}> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

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

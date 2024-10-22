import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './styles/theme';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {StyledContainer} from './styles';
import {CartProvider} from './contexts/CartContext';
import ProductsContainer from './screens/Products/ProductsContainer';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <StyledContainer>
            <Header />
            <Footer />

            <ProductsContainer />
          </StyledContainer>
        </ThemeProvider>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;

import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './styles/theme';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {StyledContainer} from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Header />
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;

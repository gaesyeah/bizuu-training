import React from 'react';
import {StyledFooter} from './styles';

const Footer: React.FC = () => {
  return (
    <StyledFooter.Container>
      <StyledFooter.Text>
        Bizuu © Todos os direitos reservados
      </StyledFooter.Text>
    </StyledFooter.Container>
  );
};

export default Footer;

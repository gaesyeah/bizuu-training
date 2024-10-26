import styled from 'styled-components/native';

const QuantityHandlerContainer = styled.View`
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const QuantityHandlerButton = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuantityHandlerText = styled.Text<{isButton?: boolean}>`
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
  color: ${({theme}) => theme.COLORS.BLACK};
  font-size: ${({isButton}) => (isButton ? 15 : 13)}px;
  font-weight: 700;
  text-align: center;
  margin: 0 5px 0 5px;
`;

const QuantityHandlerSeparator = styled.View`
  height: 16px;
  width: 1px;
  background-color: ${({theme}) => theme.COLORS.BLACK};
`;

export const QuantityHandler = {
  Container: QuantityHandlerContainer,
  Button: QuantityHandlerButton,
  Text: QuantityHandlerText,
  Separator: QuantityHandlerSeparator,
};

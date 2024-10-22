import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const styleSheet = StyleSheet.create({
  padding: {paddingHorizontal: 35, paddingVertical: 35},
});

export const Container = styled.View`
  width: 100%;
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.Text`
  padding: 50px;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.COLORS.GRAY};
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
  text-align: center;
`;

export const StyledProducts = {
  Container,
  styleSheet,
};

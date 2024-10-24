import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const styleSheet = StyleSheet.create({
  adjust: {minHeight: '100%', paddingHorizontal: 35, paddingVertical: 35},
});

const Container = styled.View`
  width: 100%;
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchProductInput = styled.TextInput`
  height: 38px;
  padding-left: 14px;
  width: 65%;
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY};
  margin-top: 70px;
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
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
  SearchProductInput,
};

import styled from 'styled-components/native';

export const StyledContainer = styled.SafeAreaView`
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

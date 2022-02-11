import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${RFValue(100)}px;
  height: ${RFValue(90)}px;

  justify-content:center;
  align-items: center;

  background-color: ${({theme})=> theme.colors.background_primary};

  padding: 16px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_500};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(13)}px;
`;
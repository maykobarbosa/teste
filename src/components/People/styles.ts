import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 48%;
  height: 240px;

  background-color: ${({theme}) => theme.colors.background_secundary};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 5px;
  margin: 1%;

`;

export const Details = styled.View`
width: 100%;
`;

export const Brand = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(12)}px;
`;
export const NickName = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(12)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`;
 
export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;

`;

export const Price = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_500};
  color: ${({theme}) => theme.colors.main};
  font-size: ${RFValue(15)}px;
`;

export const Type = styled.View`

`;

export const PeopleImage = styled.Image`
  width: ${RFValue(150)}px;;
  height: ${RFValue(150)}px;
  
`;


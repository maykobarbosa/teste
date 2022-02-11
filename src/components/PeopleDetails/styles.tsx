import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background_secundary};
`;


export const Cpam = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background_primary};
  width: 100%;
  align-items: center;
  padding: 5px;
`;


export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
  
`;

export const PeopleImages = styled.View`
  margin-top: ${getStatusBarHeight() +32}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center'
  },
  showsVerticalScrollIndicator: false
})``;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
`;

export const Description = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DescriptionColls = styled.View`
  flex-direction: column;
  width: 100%;
`;


export const Brand = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;


export const Name = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(12)}px;
`;

export const Proccess = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;
`;

export const Label = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_500};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`;

export const About = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background_primary};
  
`;

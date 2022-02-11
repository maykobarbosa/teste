import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface DateValueProps{
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.colors.header};
  padding-top: 96px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;

  justify-content: center;
  padding-bottom: 80px;
`;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_600};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(30)}px;

  margin-top: 40px;
`;

export const Message = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  text-align: center;

  margin-top: 16px;

`;
export const Footer = styled.View`
  align-items: center;
  width: 100%;
  margin: 40px 0;
`;

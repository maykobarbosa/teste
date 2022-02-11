import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface ButtonProps extends RectButton {
   color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
width: 45%;
padding: 10px;
align-items: center;
justify-content: center;
border-radius: 8px;
margin: 5px;

background-color: ${({ color }) => color  };
`;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_500};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
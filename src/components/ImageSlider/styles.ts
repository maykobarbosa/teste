import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface ImageIndexProps{
  active: boolean;
}
export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;

  background-color: ${({theme, active}) => 
  active ? theme.colors.shape : theme.colors.title};

  margin-left:8px;
  border-radius: 3px;
  margin-bottom: 5px;
`;

export const PeopleImageWrapper = styled.View`
/* //pegar a largura da tela */
  width: ${Dimensions.get('window').width}px;
  height: 232px;

  justify-content:center;
  align-items: center;
`;

export const PeopleImage = styled.Image`
  width: 100%;
  height: 100%;
`;

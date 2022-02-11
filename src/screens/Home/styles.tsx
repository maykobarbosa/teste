import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { PeopleDTO } from '../../dtos/PeopleDTO';

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({theme}) => theme.colors.background_secundary};

  justify-content: flex-end;
  padding: 10px 24px;
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme})=> theme.fonts.secundary_500};
  color: ${({theme})=> theme.colors.shape};
`;

export const PeopleList = styled(FlatList as new () => FlatList<PeopleDTO>).attrs({
  contentContainerStyle: {
    padding: 10
  },
  setShowsVerticalScrollIndicator: false,
})``;

export const Logo = styled.Image`
  width: ${RFValue(108)}px;
  height: ${RFValue(60)}px;
`;
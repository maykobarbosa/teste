import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { PeopleDTO } from '../../dtos/PeopleDTO';


import {
  PeopleImage,
  Container, Details, Name, Brand
} from './styles';


interface Props extends RectButtonProps {
data: PeopleDTO;
}

export function People({ data, ...rest }: Props){

  return (
    <Container {...rest}>
         
      <PeopleImage source={{uri: data.photos[0]}} resizeMode='contain'/>
      <Details>
        <Name>{data.name} ({data.nickname})</Name>
        <Brand>{data.cpam}</Brand>
        <Brand>Validade: {data.selfLife}</Brand>        
      </Details>
    </Container>
  );
}
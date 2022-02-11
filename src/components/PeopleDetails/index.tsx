import React from 'react';
import { Alert } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'

import * as Clipboard from 'expo-clipboard';
import { BackButton } from '../BackButton';
import { ImageSlider } from '../ImageSlider';



import{About, PeopleImages, Container, Content, Description, DescriptionColls, Details, Footer, Header, Label, Name, Proccess, Cpam, } from './styles';
import { Button } from '../Button';
import { PeopleDTO } from '../../dtos/PeopleDTO';
import { Linking } from 'react-native';
import { useTheme } from 'styled-components';


interface Params {
  people: PeopleDTO;
}

export function PeopleDetails(){
  const route = useRoute()
  const {people } = route.params as Params
  const theme = useTheme()  

  function handleLink(){
    Linking.openURL('https://portalbnmp.cnj.jus.br/#/pesquisa-peca');
  }
  
  const copyToClipboard = () => {
    Clipboard.default.setString(String(people.process))
    Alert.alert('Copiado com sucesso!\nConfirme o mandado no BNMP.')
  }

  return (
    <Container>
      <Header>
        <BackButton  />
      </Header>

      <PeopleImages>
        <ImageSlider imageUrl={people.photos} />
      </PeopleImages>      

      <Content>
        <Details>
          <DescriptionColls>
            <Description>
              <Label>Nome</Label>
              <Name>{people.name}</Name>
            </Description>
            <Description>
              <Label>Alcunha</Label>
              <Name>{people.nickname}</Name>
            </Description>
            <Description>
              <Label>CPF</Label>
              <Name>{people.cpf}</Name>
            </Description>
            <Description>
              <Label>Nasc.</Label>
              <Name>{people.birthDate}</Name>
            </Description>
            <Description>
              <Label>Mãe</Label>
              <Name>{people.mother}</Name>
            </Description>
            <Description>
              <Label>End.</Label>
              <Name>{people.address}</Name>
            </Description>
          </DescriptionColls>                        
        </Details>
        <Cpam>
          <Label>{people.cpam}</Label>
        </Cpam>
        <About>
          <Label>Nº do processo</Label> 
          <Proccess>{people.process}</Proccess>
        </About>
        <Description>
          <Label>Data do mandado</Label>
          <Name>{people.warrantDate}</Name>
        </Description>
        <Description>
          <Label>Validade</Label>
          <Name>{people.selfLife}</Name>
        </Description>
        <Description>
          <Label>Órgão</Label>
          <Name>{people.dispatchingAgency}</Name>
        </Description> 
        
      </Content>   
      <Footer>
        <Button 
          title="Copiar nº" 
          onPress={copyToClipboard} 
          color={theme.colors.success} 
        />
        <Button title="BNMP" onPress={handleLink} color={theme.colors.header} />  
      </Footer>  

    </Container>
  );
}


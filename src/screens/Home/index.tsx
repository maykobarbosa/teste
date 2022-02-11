import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import {useNavigation} from '@react-navigation/native'


import {
  PeopleList,
  Container,
  Header,
  HeaderContent,
  Title,
  Logo
} from './styles';
import {api} from '../../services/api';
import { PeopleDTO } from '../../dtos/PeopleDTO';
import { Load } from '../../components/Load';
import { People } from '../../components/People';

export function Home(){
  const [people, setPeople] = useState<PeopleDTO>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  function handlePeopleDetails(people: PeopleDTO){
    navigation.navigate('PeopleDetails', {people})
  }
  useEffect(() => {
    async function fechPeople() {
      try {
        const response = await api.get('/people')    
        setPeople(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fechPeople() 
  },[])
 
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
       
         
          <Title>
            Mandados a cumprir
          </Title>
        </HeaderContent>
      </Header>
      { loading ? <Load />  : 
        <PeopleList 
          data={people}
          keyExtractor={item=> item.id}
          numColumns={2}
          renderItem={({item})=>         
              <People data={item} onPress={() => handlePeopleDetails(item)}/>             
          }
        />
      }
    
      
    </Container>
  );
}
import React, { useEffect, useState } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native'
import {format} from 'date-fns'
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {Feather} from '@expo/vector-icons'

import{ Accessories, Brand, CalendarIcon, CarImages, Container, Content, DateInfo, DateTitle, DateValue, Description, Details, Footer, Header, Name, Period, Price, Rent, RentalDetails, RentalPeriod, RentalPrice, RentalPriceLabel, RentalPriceQuota, RentalPriceTotal, } from './styles';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../services/api';
import { Alert } from 'react-native';

interface RentalPeriod {
  start: string;
  end: string;
}


interface Params {
  car: CarDTO;
  dates: string[];
}


export function SchedulingDetails(){
  const [rentalPeriod, setRentalPediod] = useState<RentalPeriod>({} as RentalPeriod) 

  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const {car, dates } = route.params as Params

  const rentTotal = Number(car.rent.price * dates.length)
  async function handleSchedulingComplete(){
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates
    ]
    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    }).then(response => navigation.navigate('SchedulingComplete'))
    .catch(() => Alert.alert('Não foi possível realizar o agendamento!'))

  }

  useEffect(() => {
    setRentalPediod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1 ])), 'dd/MM/yyyy')
    })
  },[])
  return (
    <Container>
      <Header>
        <BackButton onPress={()=> {}} />
      </Header>

      <CarImages>
        <ImageSlider imageUrl={car.photos} />
      </CarImages>      

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
         
        </Details>
        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory 
                key={accessory.type} 
                name={accessory.name} 
                icon={getAccessoryIcon(accessory.type)} 
              />
            ))
          }
          
        </Accessories>
        
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>
          <Feather
              name='chevron-right'
              size={RFValue(10)}
              color={theme.colors.text}
            />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue >{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalDetails>
            <RentalPriceQuota>R$ {car.rent.price} x {dates.length} diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalDetails>
        </RentalPrice>

      </Content>   
      <Footer>
        <Button title="Alugar" color={theme.colors.success} onPress={handleSchedulingComplete} />  
      </Footer>  

    </Container>
  );
}
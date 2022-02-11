import React, { useState } from 'react';
import {format} from 'date-fns'
import {useNavigation, useRoute} from '@react-navigation/native'
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg'
import {
  Container, Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, Title
} from './styles';
import { Alert, StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar, DayProps,generateInterval } from '../../components/Calendar';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { CarDTO } from '../../dtos/CarDTO';


interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export function Scheduling(){
  const [ lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [rentalPeriod, setRentalPediod] = useState<RentalPeriod>({} as RentalPeriod)

  const navigation = useNavigation()
  const route = useRoute()
  const {car } = route.params as Params

  function handleSchedulingDetails(){
    if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted){
      Alert.alert('Selecione o intervalo para alugar.')
    }else{
      navigation.navigate('SchedulingDetails', {
        car, 
        dates: Object.keys(markedDates)
      })
    }
  }
  const theme = useTheme()

  function handleChangeDate(date: DayProps){
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if(start.timestamp > end.timestamp){
      start = end
      end = start
    }

    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)

    const firstDate = Object.keys(interval)[0]
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPediod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    })
  }
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton 
          onPress={() => {}} 
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim de aluguel 
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar 
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content> 

      <Footer>
        <Button title="Confirmar" onPress={handleSchedulingDetails}  />  
      </Footer>  

    </Container>
  );
}
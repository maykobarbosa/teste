import React from 'react';
import {Feather} from '@expo/vector-icons'
import {Calendar as CustomCalendar, LocaleConfig, DateCallbackHandler} from 'react-native-calendars'
import {
  Container
} from './styles';
import { useTheme } from 'styled-components';
import { ptBR } from './localeConfig';
import { generateInterval } from './generateInterval';

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps{
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouch?: boolean;
  }
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface CalendarProps{
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
}

function Calendar({markedDates, onDayPress}: CalendarProps){
  const theme = useTheme()
  return (
    <Container>
      <CustomCalendar 
        renderArrow={(direction) => 
          <Feather 
            size={24}
            color={theme.colors.text}
            name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
          />
        }
        headerStyle={{
          backgroundColor: theme.colors.background_secundary,
          borderBottomWidth: 0.5,
          borderBottomColor: theme.colors.text_detail,
          paddingBottom: 10,
          marginBottom: 10,
          width: 350
        }}

        theme={{
          textDayFontFamily: theme.fonts.primary_400,
          textDayHeaderFontFamily: theme.fonts.primary_500,
          textDayFontSize: 15,
          textMonthFontSize: 20,
          textMonthFontFamily: theme.fonts.secundary_600,
          monthTextColor: theme.colors.title,
          arrowStyle: {
            marginHorizontal: -15
          }
        }}
        firstDay={1}
        minDate={String(new Date())}
        markingType="period"
        markedDates={markedDates}
        onDayPress={onDayPress}


      />
    </Container>
  );
}

export { 
  Calendar,
  MarkedDateProps,
  DayProps,
  generateInterval 
}
import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
  PeopleImage,
  PeopleImageWrapper,
  Container, ImageIndex, ImageIndexes
} from './styles';
interface Props{
  imageUrl: String[];
}

interface ChangeImageProps{
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
export function ImageSlider({imageUrl}: Props){
  const [imageIndex, setImageIndex] = useState(0)
  const indexChanged = useRef((info: ChangeImageProps) => {
    setImageIndex(info.viewableItems[0].index!)
  })

  return (
    <Container>
      <ImageIndexes>
        {
          imageUrl.map((_, index) => (
            <ImageIndex 
              key={String(index)}
              active={index === imageIndex} 
            />
          ))
        }
      </ImageIndexes>

      <FlatList
        data={imageUrl}
        keyExtractor={key => key}
        renderItem={({item})=> (
          <PeopleImageWrapper>
            <PeopleImage 
              source={{uri: item}} 
              resizeMode="contain" 
            />
          </PeopleImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}
import React from 'react';
import {Text, TextInput, View, Image} from 'react-native';

const App = () => {
  return (
  <View>
    <TextInput style={{borderWidth: 2, borderColor: '#eeeeee'}}/>
    <Text>Hellow World</Text>
    <Photo/>
    <Gunawan/>
  </View>
  
  );
};

const Gunawan = () => {
  return <Text>Aldi Gunawan</Text>;
};

const Photo = () => {
  return (
    <Image 
    source={{uri :'http://placeimg.com/150/150/tech'}}
    style={{width : 150, height : 150}}
    />
  );
};

export default App;

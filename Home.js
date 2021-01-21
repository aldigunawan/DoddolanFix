import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native'


const SampleComponent = () => {
    return (
      <View>
        <TextInput style={{borderWidth: 2, borderColor: '#eeeeee'}}/>
        <Text>Hellow World</Text>
        <Photo/>
        <Gunawan/>
        <KelasBaru/>
      </View>
      
      );
  }; 
  
  //Style Sheet
  
  const styles = StyleSheet.create({
    text:{
      fontSize: 18,
    },
    Navbar:{
      backgroundColor:'#eeeeee',
    },
    search:{
      borderWidth:2,
      borderColor:'#efefef',
    }
  });

  const Gunawan = () => {
    return <Text>Aldi Gunawan</Text>;
  };
  
  const Photo = () => {
    return (
      <Image 
      source={{uri :'http://placeimg.com/150/150/tech'}}
      style={{width : 150, height : 1500}}
      />
    );
  };
  
  class KelasBaru extends Component{
    render(){
      return <Text>Komponen Class</Text>;
      }
  }
  
export default SampleComponent;  
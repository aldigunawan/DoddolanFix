import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './Home.js';
import StylingComponent from './Etalase.js';
import MateriFlex from './MateriFlex.js';

const App = () => {
  return (
  <View>
    <ScrollView>
      {/* <StylingComponent/>
      <SampleComponent/> */}
      <MateriFlex />
    </ScrollView>
  </View>
   );
};

export default App;

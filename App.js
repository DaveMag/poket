import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Presentation from './screens/Presentation/Presentation';

import globalStyles from './assets/style/globalStyle';
import MainNavigation from './navigation/MainNavigation';


const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;

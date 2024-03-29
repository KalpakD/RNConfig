/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Config from "react-native-config";
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{flex:1,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Text 
            style={{fontSize:20,
            justifyContent:'center',
            alignSelf:'center'}}
            >
              {`${Config.ENV }${Config.VERSION_CODE}`}
              </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

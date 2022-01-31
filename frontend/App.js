import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Create from './components/Create';
import Constants from 'expo-constants';
import Details from './components/Details';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; 

const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Home"
          component = {Home}
        />
        <Stack.Screen 
          name = "Create"
          component = {Create}
        />
        <Stack.Screen 
          name = "Details"
          component = {Details}
        />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddfdf',
    marginTop: Constants.statusBarHeight,
  },
});

export default()=> {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}
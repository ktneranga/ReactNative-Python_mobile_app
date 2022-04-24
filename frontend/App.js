import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import userReducer from './store/reducers/login';
import Navigator from './navigation/Navigator';

const rootReducer = combineReducers({
  users : userReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddfdf',
    marginTop: Constants.statusBarHeight,
  },
});

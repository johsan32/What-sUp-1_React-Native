import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigation/StackNavigation';
import ToastManager from 'toastify-react-native';
import ContextProvider from './src/context/MyContext';

function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      <ToastManager />
    </ContextProvider>
  );
}

export default App;

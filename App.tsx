import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import Navigator from './navigation/navigator';
import store from './store/store';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

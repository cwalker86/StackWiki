import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/views/LibraryList';

// Provider is the communication glue between Redux & React.
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="StackWiki" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/Store';
import AppointmentList from './components/AppointmentList';
import GlobalStyle from '../src/components/GlobalStyles';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="App">
        <AppointmentList />
      </div>
    </Provider>
  );
};

export default App;

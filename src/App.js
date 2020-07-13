import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
// import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyC8Hp6tLzzvYxa74apCa4pPH9oNmBC87AI',
      authDomain: 'manager-4c099.firebaseapp.com',
      databaseURL: 'https://manager-4c099.firebaseio.com',
      projectId: 'manager-4c099',
      storageBucket: 'manager-4c099.appspot.com',
      messagingSenderId: '754754290115',
      appId: '1:754754290115:web:128100f880aec8c31f3d76',
      measurementId: 'G-X2GBC5F2GB',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    //   const store = createStore(
    //     reducers, /* preloadedState, */
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    //     compose(
    //         applyMiddleware(ReduxThunk)
    //     )
    //    );

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

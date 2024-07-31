import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Notifications />
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
};

export default App;
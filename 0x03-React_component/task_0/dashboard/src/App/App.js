import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// function App() {
//   return (
//     <>
//       <Notifications />
//       <div className="App">        
//         <Header />        
//         <Login />       
//         <Footer />             
//       </div>
//     </>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <>
        <Notifications />
        <div className="App">        
          <Header />        
          <Login />       
          <Footer />             
        </div>
      </>
    );
  }
}

export default App;
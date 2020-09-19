import React, { Component } from 'react';
import FillOutCustomerInfo from './components/fill-out-customer-info';
import './App.css';
// import Header from './components/header';
// import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <div>
        {/* <Header/> */}
        <FillOutCustomerInfo/>
        {/* <Footer mobileNo='094435885' email='n.arunpoon@gmail.com' /> */}
      </div>
    );
  }
}

export default App;

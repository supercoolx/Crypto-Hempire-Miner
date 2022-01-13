import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Header from './layout/header';
import Footer from './layout/footer';
import Dashboard from './view/dashboard';
import Faq from './view/faq';
// import BusdHire from './view/hire';
import BusdHire from './view/busd';
import store from './redux/store';

import Styled from 'styled-components';
import BG from './assets/images/bg.png';

const StyleWrapper = Styled.div`
  font-family: 'Poppins';
  .sr-only {
    display: none;
  }
  img {
    width: 100%;
  }
  .padding-0 {
    padding: 0;
  }
  .margin-0 {
    margin: 0;
  }
  .main-content {
    background-image: ${BG};
    padding-top: 59px;
    padding-bottom: 350px;
    background-size: cover;
    @media(max-width: 768px) {
      padding-bottom: 200px;
      padding-top: 20px;
    }
  }
  .text-brown {
    color: #3D1900;
  }
  .text-red {
    color: red;
  }
  .text-green {
    color: green;
  }
  .text-light-brown {
    color: #FFC7A0;
  }
  .bold {
    font-weight: bold;
  }
  .extra-bold {
    font-weight: 900;
  }
  .flex-wrapper {
    display: flex;
    align-items: center;
    &.space-between {
      justify-content: space-between;
    }
  }
  .btn-transparent {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
    }
  }
  .default-btn {
    width: 147px;
    height: 38px;
    background-size: cover;
    font-weight: 900;
    &.large {
      width: 234px;
      height: 59px;
      font-size: 22px;
    }
  }
  input {
    border: 2px solid #3D1900;
    box-sizing: border-box;
    border-radius: 11px;
    height: 45px;
  }
`;

const App = () => {
  return (
    <StyleWrapper>
      <Provider store={store}>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/busd" component={BusdHire} />
            <Route path="/faq" component={Faq} />
            {/* <Redirect to="/" component={Dashboard} /> */}
          </Switch>
          <Footer />  
        </Router>
        <ToastContainer />
      </Provider>
    </StyleWrapper>
  );
}

export default App;

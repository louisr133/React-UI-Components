import React from 'react';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

const App = () => {
  return (
    <div className = 'appContainer'>
      <HeaderContainer />
      <CardContainer />
      <Footer />
      </div>
  );
  const currentDiv = document.getElementById("root");
  ReactDOM.render(header, currentDiv);
};

export default App;

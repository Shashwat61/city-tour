import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar.js";
import TourList from "./components/tourlist/Tourlist.js";


class App extends React.Component {


render(){
  return (
    <div>
    <Navbar/>
   <TourList/>
    </div>
  );
}
}
export default App;

import { useState } from 'react'
import './App.css'
import Product from './component/Product'
import Home from './component/Home';
import Geteway from './component/Gateway';
import Received from './component/Received';
import Processing from './component/Processing';
import NavBar from './component/NavBar';
import { Route,Routes } from 'react-router-dom';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div classNameName="app">
      <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route exact path='/home' Component={Home}></Route>
          <Route exact path='/Product' Component={Product}></Route>
          <Route exact path='/receive' Component={Received}></Route>
          <Route exact path='/process' Component={Processing}></Route>
          <Route exact path='/gateway' Component={Geteway}></Route>      
    </Routes>
      <NavBar/>
    </div>
  )
}

export default App


import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Product' element={<Product/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

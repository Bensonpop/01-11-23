
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Student from './Components/Student/Student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Studentview from './Components/Student/Studentview';
function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login a="Welcome to Benson"/>}></Route>
    <Route path='/Home' element={<Home pp="Benson"/>}></Route>
    <Route path='/Product' element={<Product/>}></Route>
    <Route path='/Student' element={<Student method='POST'/>}></Route>
    <Route path='/Studentview' element={<Studentview method='get'/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

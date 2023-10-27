import HomePage from './Components/HomePage';
import Settings from './Components/settings/Settings';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Components/Register/Signin'
import Signup from './Components/Register/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/login' element={<Signin/>}/>
          <Route path='/register' element={<Signup/>}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;

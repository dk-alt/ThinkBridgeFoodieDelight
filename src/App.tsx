import Dashboard from './Component/Dashboard/Dashboard'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Home } from './Component/Home/HomePage';
import { Route, Routes } from 'react-router';
import { RestaurantForm } from './Component/RegistrationForm/RestaurantForm';
import { Link } from 'react-router-dom';


const NavBar = ()=> (
  <nav className='navbar' data-testid='navbar'>
    <h3>Foodie Delight Admin</h3>
    <div className='navbar-action'>
      <Link to='/'>Home</Link>
      <Link to='/registration'>Restaurant Registration</Link>
      <Link to='/dashboard'>Restaurent List</Link>
    </div>
  </nav>
);

function App() {
  return (
    <>
      <NavBar />
      <div className='center-area' data-testid='center-area'>
       

        <Routes>
          <Route path="/" Component={Home}/> 
          <Route path="/dashboard" Component={Dashboard}/>
          <Route path="/registration" Component={()=><RestaurantForm onSuccess={()=>{}} isAdd={true} isModal={false}/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

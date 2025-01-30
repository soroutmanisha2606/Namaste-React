import './App.css';
import Navbar from './component/Navbar';
import MenuCard from './component/Card';
import { Route, Router } from 'react-router-dom';
import Contact from './component/Contact';


function App() {
  return (
    <div className="App">

  <Navbar/>
  {/* <MenuCard/> */}
  <Router>
    <Route path='/' element={<MenuCard/>}></Route>
    <Route path='/conatct' element={<Contact/>}></Route>
  </Router>
    </div>
  );
}

export default App;

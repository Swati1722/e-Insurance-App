import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/FrontPage/Home/Home';
import Admin from './Component/AdminDashboard/Admin/Admin'
import Agent from './Component/AgentDashboard/Agent/Agent';
import Employee from './Component/EmployeeDashboard/Employee/Employee';
import Customer from './Component/CustomerDashboard/Customer/Customer';

function App() {
  return (
    <>
    
     <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route exact path='/adminDashboard' element={<Admin/>} />
        <Route exact path='/customerDashboard' element={<Customer/>} />
        <Route exact path='/agentDashboard' element={<Agent/>} />
        <Route exact path='/employeeDashboard' element={<Employee/>} />
      </Routes>
    </>
  );
}

export default App;

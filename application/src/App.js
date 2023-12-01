import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/FrontPage/Home/Home';
import Admin from './Component/AdminDashboard/Admin/Admin'
import Agent from './Component/AgentDashboard/Agent/Agent';
import Employee from './Component/EmployeeDashboard/Employee/Employee';
import Customer from './Component/CustomerDashboard/Customer/Customer';
import SchemeHome from './Component/Scheme/SchemeHome'
import AddPolicy from './Component/CustomerDashboard/AddPolicy/AddPolicy'
import GetCustomer from './Component/Shared/AllCustomer/GetCustomer';
import GetEmployee from './Component/Shared/AllEmployee/GetEmployee';
import MyProfile from './Component/CustomerDashboard/MyProfile/MyProfile'
import Plan from './Component/Plans/Plan/Plan';
import GetAgent from './Component/Shared/AllAgent/GetAgent';

function App() {
  return (
    <>
    
     <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route path="/insurance-plan" element={<SchemeHome/>} />
        <Route exact path='/adminDashboard' element={<Admin/>} />
        <Route exact path='/adminDashboard/viewCustomer' element={<GetCustomer/>} />
        <Route exact path='/adminDashboard/viewEmployee' element={<GetEmployee/>} />
        <Route exact path='/adminDashboard/viewAgent' element={<GetAgent/>} />

        <Route exact path='/plan' element={<Plan/>} />

       
        <Route exact path='/customerDashboard/:username' element={<Customer/>} />
        <Route exact path='/customerDashboard/policy' element={<AddPolicy/>} />
        <Route exact path='/customerDashboard/profile' element={<MyProfile/>} />
       
       <Route exact path='/agentDashboard' element={<Agent/>} />
       


        <Route exact path='/employeeDashboard' element={<Employee/>} />
      </Routes>
    </>
  );
}

export default App;

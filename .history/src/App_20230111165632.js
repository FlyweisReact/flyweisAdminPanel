/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Customers from "./components/pages/Customers/Customers";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customers />} />
        {/* <Route path="/cat" element={<Cat />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/labour" element={<Labour />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/generateId" element={<GenerateId />} />
        <Route path="/Notice/Labour" element={<NotifyLabour />} />
        <Route path="/Notice/Customer" element={<NotifyCustomer />} />
        <Route path="/trans" element={<Transaction />} />
        <Route path="/city" element={<City />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/notification" element={<PushNotification />} />
        <Route path="/common" element={<CommonUser />} />
        <Route path="/service" element={<Servie />} /> */}

      </Routes>
    </>
  );
}

export default App;

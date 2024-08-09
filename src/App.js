import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import UserDetails from "./components/UserDetails";
import UserTable from "./components/UserTable";
import DashboardNumberDisplay from "./components/DashboardNumberDisplay";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-8 bg-custom-gradient">
          <DashboardNumberDisplay />
          <div className="flex justify-center">
            <Routes>
              <Route path="/" element={<UserTable />} />
              <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

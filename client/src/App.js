import { Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Admin from "./Admin/Admin";
import DashBoard from "./Dashboard/DashBoard";

function App() {
  return (
    <Routes >
      <Route path="/" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
  );
}

export default App;

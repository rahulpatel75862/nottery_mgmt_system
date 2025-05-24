import { Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Admin from "./Admin/Admin";

function App() {
  return (
    <Routes >
      <Route path="/" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
  );
}

export default App;

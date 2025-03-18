import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NavigationBar from "./components/NavigationBar";
import Login from "./components/Login";
import Register from "./register";
import ProjectDetails from "./ProjectDetails";

function Root() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Root;

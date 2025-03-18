import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NavigationBar from "./components/NavigationBar";
import Login from "./login";
import Register from "./register";

function Root() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Root;

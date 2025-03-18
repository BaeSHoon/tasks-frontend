import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NavigationBar from "./components/NavigationBar";

function Root() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Root;

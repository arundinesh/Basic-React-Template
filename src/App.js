import { Route, Routes } from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} />
    </Routes>
  );
}

export default App;

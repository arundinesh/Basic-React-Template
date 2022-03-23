import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

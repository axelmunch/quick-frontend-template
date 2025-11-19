import { Routes, Route, Navigate } from "react-router";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/" element={<AppLayout />}>
        <Route path="home" element={<HomePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

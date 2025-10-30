import { Route, Routes } from "react-router-dom";
import UserLayout from "./UserLayout/UserLayout";
import AdminLayout from "./AdminLayout/AdminLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </>
  );
};

export default App;

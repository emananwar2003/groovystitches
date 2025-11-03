import { Route, Routes } from "react-router-dom";
import UserLayout from "./UserLayout/UserLayout";
import AdminLayout from "./AdminLayout/AdminLayout";
import Signlayout from "./Login/signup.layout/Signlayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/registration/*" element={<Signlayout/>} />
      </Routes>
    </>
  );
};

export default App;

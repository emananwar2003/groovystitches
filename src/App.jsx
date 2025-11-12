import { Route, Routes } from "react-router-dom";
import UserLayout from "./UserLayout/UserLayout";
import AdminLayout from "./AdminLayout/AdminLayout";
import Signlayout from "./Login/signup.layout/Signlayout";
import ProtectAdmin from "./contextapi/ProtectAdmin";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route
          path="/admin/*"
          element={
            <ProtectAdmin>
              <AdminLayout />
            </ProtectAdmin>
          }
        />
        <Route path="/registration/*" element={<Signlayout />} />
      </Routes>
    </>
  );
};

export default App;

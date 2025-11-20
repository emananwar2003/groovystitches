import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./login/Login";
import Signup from "./sign up/Signup";
import EditUserProfile from "../../components/header/component/EditUserProfile";
import Protectcart from "../../contextapi/Protectcart";

const Signlayout = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="editprofile"
          element={
            <Protectcart>
              <EditUserProfile />
            </Protectcart>
          }
        />
      </Routes>
    </div>
  );
};

export default Signlayout;

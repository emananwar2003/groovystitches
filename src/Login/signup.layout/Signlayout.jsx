import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./login/Login";
import Signup from "./sign up/Signup";

const Signlayout = () => {
    return (
        <div>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Routes>
        </div>
    );

};

export default Signlayout;

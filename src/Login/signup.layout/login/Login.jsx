import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contextapi/Authcontext";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { name: "", email: "", password: "" };

    // Password validation
    if (formData.password === "") {
      newErrors.password = "- Please enter your password";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "- Password must be at least 8 characters long";
      valid = false;
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        "- Password must contain at least one uppercase letter";
      valid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password =
        "- Password must contain at least one special character";
      valid = false;
    } else {
      newErrors.password = "";
    }

    // Email validation
    if (formData.email === "") {
      newErrors.email = "- Please enter your email";
      valid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = "- Please enter a valid email";
        valid = false;
      }
    }

    setErrors(newErrors);

    if (valid) {
      const dummyUser = {
        id: "001",
        // name: formData.name,
        email: formData.email,
        role: "user",
      };
      login(dummyUser);
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center ">
      <Card color="transparent" shadow={false}>
        <div className="absolute inset-0 bg-[url('/Colors-img.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="relative z-10 p-5">
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to Login.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleLogin}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="h6"
                color="blue-gray"
                className={`-mb-3 ${
                  errors.email ? "text-red-500" : "text-blue-gray-900"
                }`}
              >
                {errors.email || "Your Email"}
              </Typography>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className={`-mb-3 ${
                  errors.password ? "text-red-500" : "text-blue-gray-900"
                }`}
              >
                {errors.password || "Password"}
              </Typography>
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                size="lg"
                placeholder="8 numbers"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button type="submit" className="mt-6" fullWidth>
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don’t have an account?{" "}
              <Link
                to="/registration/Signup"
                className="font-medium text-gray-900"
              >
                Sign up
              </Link>
            </Typography>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;

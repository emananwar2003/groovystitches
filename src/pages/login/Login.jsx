import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let valid = true;
    if (name === "") {
      setNameError("- Please enter your name");
      valid = false;
    } else if (name.length < 2) {
      setNameError("- Please enter real name");
      valid = false;
    } else if (name[0] !== name[0].toUpperCase()) {
      setNameError("- First letter must be capital");
      valid = false;
    } else {
      setNameError("");
    }
    if (password === "") {
      setPasswordError("- Please enter your password");
      valid = false;
    } else if (password.length < 8) {
      setPasswordError("- Password must be at least 8 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (email === "") {
      setEmailError("- Please enter your email");
      valid = false;
    } else {
      // تعبير منتظم بسيط للتحقق من صيغة الإيميل
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        setEmailError("- Please enter a valid email");
        valid = false;
      } else {
        setEmailError("");
      }
    }

    if (valid) {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center ">
      <Card color="transparent" shadow={false}>
        <div className="absolute inset-0 bg-[url('/Colors-img.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="relative z-10">
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
                  nameError ? "text-red-500" : "text-blue-gray-900"
                }`}
              >
                {nameError ? nameError : "Your Name"}
              </Typography>
              <Input
                size="lg"
                placeholder="name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className={`-mb-3 ${
                  emailError ? "text-red-500" : "text-blue-gray-900"
                }`}
              >
                {emailError ? emailError : "Your Email"}
              </Typography>
              <Input
                onChange={(e) => setEmail(e.target.value)}
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
                  passwordError ? "text-red-500" : "text-blue-gray-900"
                }`}
              >
                {passwordError ? passwordError : "Password"}
              </Typography>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
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
              <Link to="/sign" className="font-medium text-gray-900">
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

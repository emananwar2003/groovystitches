import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate(); // for navigation after validation
  // variables for validation
  const [user, Setuser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    ConfirmPassword: "",
  });

  const [errors, Seterror] = useState({
    FirstnameError: "",
    LastnameError: "",
    SignupEmailError: "",
    PhoneError: "",
    PasswordError: "",
    ConfirmPasswordError: "",
  });

  const [IsPass, setIsPass] = useState("");

  const [Agree, setAgree] = useState(false);
  const [AgreeError, setAgreeError] = useState("");

  const validateName = (name, firstORlastname) => {
    let error = "";
    if (name === "") {
      error = `- Please enter your ${firstORlastname}`;
    } else if (name.length < 2) {
      error = `- Please enter real ${firstORlastname}`;
    } else if (name[0] !== name[0].toUpperCase()) {
      error = `- First letter of ${firstORlastname} must be capital`;
    }
    return error;
  };

  const validatePass = (pass, passORconfirm) => {
    let error = "";

    if (pass === "") {
      error = `- Please enter ${passORconfirm}`;
    } else if (pass.length < 8) {
      error = "- Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(pass)) {
      error = "- Password must contain at least one uppercase letter";
    } else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(pass)) {
      error = "- Password must contain at least one special character";
    } else {
      error = "";
    }

    return error;
  };

  const HandelNewUser = async (e) => {
    e.preventDefault();

    const firstnameErr = validateName(user.firstName, "first name");
    const lastnameErr = validateName(user.lastName, "last name");

    if (firstnameErr) {
      Seterror({ ...errors, FirstnameError: firstnameErr });
      return false;
    } else {
      Seterror({ ...errors, FirstnameError: "" });
    }

    if (lastnameErr) {
      Seterror({ ...errors, LastnameError: lastnameErr });
      return false;
    } else {
      Seterror({ ...errors, LastnameError: "" });
    }

    if (user.email === "") {
      Seterror({ ...errors, SignupEmailError: "- Please enter your email" });
      return false;
    } else {
      Seterror({ ...errors, SignupEmailError: "" });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user.email)) {
      Seterror({ ...errors, SignupEmailError: "- Please enter a valid email" });
      return false;
    } else {
      Seterror({ ...errors, SignupEmailError: "" });
    }

    if (user.phone === "") {
      Seterror({ ...errors, PhoneError: "- Please enter your phone number" });
      return false;
    } else {
      Seterror({ ...errors, PhoneError: "" });
    }

    const egyptianPhoneRegex = /^\+20(10|11|12|15)\d{8}$/;
    if (!egyptianPhoneRegex.test(user.phone.trim())) {
      Seterror({
        ...errors,
        PhoneError: "- Please enter a vaild phone number with country code +20",
      });
      return false;
    } else {
      Seterror({ ...errors, PhoneError: "" });
    }

    const passErr = validatePass(user.password, "password");
    const confirmpassErr = validatePass(
      user.ConfirmPassword,
      "a Confirm password"
    );

    if (passErr) {
      Seterror({ ...errors, PasswordError: passErr });
      return false;
    } else {
      Seterror({ ...errors, PasswordError: "" });
    }

    if (confirmpassErr) {
      Seterror({ ...errors, ConfirmPasswordError: confirmpassErr });
      return false;
    } else {
      Seterror({ ...errors, ConfirmPasswordError: "" });
    }

    if (user.password !== user.ConfirmPassword) {
      setIsPass("- Passwords do not match.");
      return false;
    } else {
      setIsPass("");
    }

    if (!Agree) {
      setAgreeError("- Please agree to the Terms & Conditions");
      return false;
    } else {
      setAgreeError("");
    }

    const formData = new FormData();

    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("phone", user.phone);

    const req = await fetch("https://dummyjson.com/users/add", {
      //dah el route elly hab3at 3lyh data
      method: "post", //eb3at data
      // headers: { "Content-Type": "application/json" }, //gomla mn el mawke3 34an yfham elly bb3ato dah eno el type bta3o json
      body: formData, //bb3at fy el body dah el data bta3ty 3la 4kl object
    });

    const res = await req.json();
    console.log(res);

    navigate("/login");
  };

  return (
    <div className="relative min-h-screen bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[url('/Colors-img.jpg')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="relative z-10 flex flex-col items-center pt-16 px-4">
        <div className="flex flex-col items-center mb-6 text-center">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-4xl font-bold"
          >
            Signup
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Please enter your details to register.
          </Typography>
        </div>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={HandelNewUser}
        >
          <Typography
            color="black"
            className="mt-1 font-normal text-lg"
          ></Typography>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-10">
            <Card color="transparent" shadow={false}>
              <div className="mb-1 flex flex-col gap-6 p-5">
                <Typography
                  variant="h6"
                  color={errors.FirstnameError ? "red" : "blue-gray"}
                  className="-mb-3"
                >
                  {errors.FirstnameError ? errors.FirstnameError : "First Name"}
                </Typography>
                <Input
                  value={user.firstName}
                  onChange={(e) => {
                    const value = e.target.value;
                    Setuser({ ...user, firstName: value });
                    // validation أثناء الكتابة
                    const firstnameErr = validateName(value, "first name");
                    Seterror({ ...errors, FirstnameError: firstnameErr });
                  }}
                  size="lg"
                  placeholder="First name"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  color={errors.LastnameError ? "red" : "blue-gray"}
                  className="-mb-3"
                >
                  {errors.LastnameError ? errors.LastnameError : "Last Name"}
                </Typography>
                <Input
                  value={user.lastName}
                  onChange={(e) => {
                    const value = e.target.value;
                    Setuser({ ...user, lastName: value });
                    const lastnameErr = validateName(value, "last name");
                    Seterror({ ...errors, LastnameError: lastnameErr });
                  }}
                  size="lg"
                  placeholder="Last name"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  className="-mb-3 "
                  color={errors.SignupEmailError ? "red" : "blue-gray"}
                >
                  {errors.SignupEmailError ? errors.SignupEmailError : "Email"}
                </Typography>
                <Input
                  value={user.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    Setuser({ ...user, email: value });

                    let emailErr = "";
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (value === "") emailErr = "- Please enter your email";
                    else if (!emailPattern.test(value))
                      emailErr = "- Please enter a valid email";
                    Seterror({ ...errors, SignupEmailError: emailErr });
                  }}
                  size="lg"
                  placeholder="name@mail.com"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </Card>
            <Card color="transparent" shadow={false}>
              <div className="mb-1 flex flex-col gap-6 p-5">
                <Typography
                  variant="h6"
                  color={errors.PhoneError ? "red" : "blue-gray"}
                  className="-mb-3"
                >
                  {errors.PhoneError ? errors.PhoneError : "Phone Number"}
                </Typography>
                <Input
                  value={user.phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    Setuser({ ...user, phone: value });

                    let phoneErr = "";
                    const egyptianPhoneRegex = /^\+20(10|11|12|15)\d{8}$/;
                    if (value === "")
                      phoneErr = "- Please enter your phone number";
                    else if (!egyptianPhoneRegex.test(value.trim()))
                      phoneErr =
                        "- Please enter a vaild phone number with country code +20";
                    Seterror({ ...errors, PhoneError: phoneErr });
                  }}
                  type="tel"
                  size="lg"
                  placeholder="+20....."
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  color={errors.PasswordError ? "red" : "blue-gray"}
                  className="-mb-3"
                >
                  {errors.PasswordError ? errors.PasswordError : "Password"}
                </Typography>
                <Input
                  value={user.password}
                  onChange={(e) => {
                    const value = e.target.value;
                    Setuser({ ...user, password: value });
                    const passErr = validatePass(value, "password");
                    Seterror({ ...errors, PasswordError: passErr });

                    // لو confirm مكتوبة، نتحقق كمان من التطابق
                    if (user.ConfirmPassword && user.ConfirmPassword !== value)
                      setIsPass("- Passwords do not match.");
                    else setIsPass("");
                  }}
                  type="password"
                  size="lg"
                  placeholder=""
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  color={
                    errors.ConfirmPasswordError || IsPass ? "red" : "blue-gray"
                  }
                  className="-mb-3"
                >
                  {errors.ConfirmPasswordError
                    ? errors.ConfirmPasswordError
                    : "Confirm Password"}
                </Typography>
                <Input
                  value={user.ConfirmPassword}
                  onChange={(e) => {
                    const value = e.target.value;
                    Setuser({ ...user, ConfirmPassword: value });
                    const confErr = validatePass(value, "Confirm password");
                    Seterror({ ...errors, ConfirmPasswordError: confErr });

                    if (user.password && user.password !== value)
                      setIsPass("- Passwords do not match.");
                    else setIsPass("");
                  }}
                  type="password"
                  size="lg"
                  placeholder="Repeat password"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {IsPass && (
                  <div>
                    <Typography
                      color="red"
                      variant="small"
                      className="-mt-4 mb-4"
                    >
                      {IsPass}
                    </Typography>
                    <Typography color="red" variant="small" className="-mt-4">
                      Please make sure the password and confirm password fields
                      match.
                    </Typography>
                  </div>
                )}
              </div>
            </Card>
          </div>
          <div className="flex flex-col justify-center items-center w-full sm:w-auto pb-10">
            <Checkbox
              checked={Agree}
              onChange={(e) => setAgree(e.target.checked)}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            {AgreeError && (
              <Typography color="red" variant="small" className="mt-1">
                {AgreeError}
              </Typography>
            )}
            <Button type="submit" className="mt-6 w-full sm:w-auto">
              Signup
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?
              <Link to="/login" className="font-medium text-gray-900">
                Login
              </Link>
            </Typography>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

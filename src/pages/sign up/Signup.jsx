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
  const [Firstname, setFirstName] = useState("");
  const [FirstnameError, setFirstNameError] = useState("");
  const [Lastname, setLastName] = useState("");
  const [LastnameError, setLastNameError] = useState("");
  const [SignupEmail, setSignupEmail] = useState("");
  const [SignupEmailError, setSignupEmailError] = useState("");
  const [Phone, setPhone] = useState("");
  const [PhoneError, setPhoneError] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
  const [IsPass, setIsPass] = useState("");

  const [Agree, setAgree] = useState(false);
  const [AgreeError, setAgreeError] = useState("");

  //function for name validation بدل ما اعيد الكود للاسم الاول و التاني
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

  const validatePass = (pass,passORconfirm) => {
    let error = "";
    if (pass === "") {
      error = `- Please enter ${passORconfirm}`;
    } else if (pass.length < 8) {
      error = `- Please enter 8 charcters`;
    } else if (pass.length > 8) {
      error = `-Please enter 8 charcters onley`;
    }
    return error;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const firstnameErr = validateName(Firstname, "first name"); // استدعاء الفانكشن
    const lastnameErr = validateName(Lastname, "last name");

    const passErr = validatePass(Password,"password"); // استدعاء الفانكشن
    const confirmpassErr = validatePass(ConfirmPassword,"Confirm password");

    if (firstnameErr) {
      setFirstNameError(firstnameErr);
      return false;
    } else {
      setFirstNameError("");
    }

    if (lastnameErr) {
      setLastNameError(lastnameErr);
      return false;
    }else{
      setLastNameError("");
    }

    if (SignupEmail === "") {
      setSignupEmailError("- Please enter your email");
      return false;
    }else{
      setSignupEmailError("");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(SignupEmail)) {
      setSignupEmailError("- Please enter a valid email");
      return false;
    }else{
      setSignupEmailError("");
    }

    if (Phone === "") {
      setPhoneError("- Please enter your phone number");
      return false;
    }else{
      setPhoneError("");
    }

    if (!/^\+\d+$/.test(Phone.trim())) {
      setPhoneError("- Please start your number with country code 'ex:+20'");
      return false;
    }else{
      setPhoneError("");
    }

    if (Phone.length < 13 || Phone.length > 16) {
      setPhoneError("- Please enter a valid phone number length");
      return false;
    }else{
      setPhoneError("");
    }

    if (passErr) {
      setPasswordError(passErr);
      return false;
    }else{
      setPasswordError("");
    }

    if (confirmpassErr) {
      setConfirmPasswordError(confirmpassErr);
      return false;
    }else{
      setConfirmPasswordError("");
    }
    if (Password !== ConfirmPassword) {
      setIsPass("- Passwords do not match.");
      return false;
    }else{
      setIsPass("");
    }
    if (!Agree) {
      setAgreeError("- Please agree to the Terms & Conditions");
      return false;
    }else{
      setAgreeError("");
    }

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
          onSubmit={handleSignup}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-10">
            <Card color="transparent" shadow={false}>
              <div className="mb-1 flex flex-col gap-6 p-5">
                <Typography
                  variant="h6"
                  color={FirstnameError ? "red" : "blue-gray"} //blawn law fy error
                  className="-mb-3"
                >
                  {FirstnameError ? FirstnameError : "First Name"}{" "}
                  {/* by8yr el kalam law fy error */}
                </Typography>
                <Input
                  value={Firstname} // ba5od value el first name
                  onChange={(e) => setFirstName(e.target.value)} // ba5od el value kol ma tt5yar
                  size="lg"
                  placeholder="First name"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  color={LastnameError ? "red" : "blue-gray"} // blawn law fy error
                  className="-mb-3"
                >
                  {LastnameError ? LastnameError : "Last Name"}{" "}
                  {/* by8yr el kalam law fy error */}
                </Typography>
                <Input
                  value={Lastname} // ba5od value el last name
                  onChange={(e) => setLastName(e.target.value)} // ba5od el value kol ma tt5yar
                  size="lg"
                  placeholder="Last name"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  className={`-mb-3 ${
                    SignupEmailError ? "text-red-500" : "text-blue-gray-900"
                  }`}
                >
                  {SignupEmailError ? SignupEmailError : "Your Email"}{" "}
                  {/* for text changing */}
                </Typography>
                <Input
                  onChange={(e) => setSignupEmail(e.target.value)} // detect changimg value
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
                  color={PhoneError ? "red" : "blue-gray"}
                  className="-mb-3"
                >
                  {PhoneError ? PhoneError : "Your Phone Number"}
                </Typography>
                <Input
                  onChange={(e) => {
                    const value = e.target.value;
                    // يمنع أي حاجة غير الأرقام أو + في أول خانة
                    if (/^\+?[0-9]*$/.test(value)) {
                      setPhone(value);
                    }
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
                  color={PasswordError ? "red" : "blue-gray"}
                  className="-mb-3"
                >
                  {PasswordError ? PasswordError : "Password"}
                </Typography>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  size="lg"
                  placeholder="8 characters"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography
                  variant="h6"
                  color={ConfirmPasswordError || IsPass ? "red" : "blue-gray"}
                  className="-mb-3"
                >
                  {ConfirmPasswordError
                    ? ConfirmPasswordError
                    : "Confirm Password"}
                </Typography>
                <Input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  size="lg"
                  placeholder="Repeat password"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {IsPass && (
                  <Typography color="red" variant="small" className="-mt-4">
                    <h1>{IsPass}</h1>
                    <h1>
                      Please make sure the password and confirm password fields
                      match.
                    </h1>
                  </Typography>
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
                {AgreeError} {/* هيعرض كلام لو في ايرور */}
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

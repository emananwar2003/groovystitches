import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Signup = () => {
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
        <form className="w-full flex flex-col items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-10">
            <Card color="transparent" shadow={false}>
              <div className="mb-1 flex flex-col gap-6 p-5">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  First Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="First name"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Last Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Last name"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
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
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Phone Number
                </Typography>
                <Input
                  type="tel"
                  size="lg"
                  placeholder="Enter your phone number"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="8 characters"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Confirm Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="Repeat password"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </Card>
          </div>
          <div className="flex flex-col justify-center items-center w-full sm:w-auto pb-10">
            <Checkbox
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
            <Link to="/login" className="w-full sm:w-auto">
              <Button className="mt-6 w-full sm:w-auto">Signup</Button>
            </Link>
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

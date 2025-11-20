import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Swal from "sweetalert2";

const EditUserProfile = () => {
  const [user, setUser] = useState({
    firstName: "Menna",
    lastName: "Khaled",
    email: "menna@gmail.com",
    phone: "+201012345678",
  });

  const handleSave = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Profile Updated Successfully 🎉",
      text: "Your information has been saved.",
      icon: "success",
      background: "#1F2937",
      color: "#FBBF24",
      confirmButtonColor: "#B45309",
      iconColor: "#A3E635",
    });
  };

  return (
    <div className="relative min-h-screen bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      {/* Overlay for soft color effect */}
      <div className="absolute inset-0 bg-[url('/Colors-img.jpg')] bg-cover bg-center opacity-10"></div>

      <Card className="relative z-10 p-8 sm:p-10 bg-white bg-opacity-95 shadow-2xl w-[95%] max-w-md rounded-2xl border border-orange-200 backdrop-blur-md">
        <Typography
          variant="h4"
          className="text-center font-extrabold text-orange-900 tracking-wide"
        >
          Edit Profile ✨
        </Typography>

        <Typography
          color="gray"
          className="mt-2 mb-8 text-center text-sm sm:text-base"
        >
          Update your personal details and save changes
        </Typography>

        <form onSubmit={handleSave} className="flex flex-col gap-5">
          <Input
            label="First Name"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            size="lg"
            className="focus:!border-orange-900"
          />

          <Input
            label="Last Name"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            size="lg"
            className="focus:!border-orange-900"
          />

          <Input
            label="Email Address"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            size="lg"
            className="focus:!border-orange-900"
          />

          <Input
            label="Phone Number"
            type="tel"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            size="lg"
            className="focus:!border-orange-900"
          />

          <Button
            type="submit"
            className="mt-4 bg-orange-800 hover:bg-orange-900 w-full text-white text-md font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Save Changes
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default EditUserProfile;

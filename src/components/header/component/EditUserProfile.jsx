import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contextapi/Authcontext";

const EditUserProfile = () => {
  const navigate = useNavigate();
  const { userinfo, setuserinfo, token } = useAuth();

  const [user, setUser] = useState({
    email: userinfo?.email || "",
    phone: userinfo?.phone || "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      let emailErr = "";
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value === "") emailErr = "- Please enter your email";
      else if (!emailPattern.test(value)) emailErr = "- Please enter a valid email";
      setErrors((prev) => ({ ...prev, email: emailErr }));
    } else if (name === "phone") {
      let phoneErr = "";
      const egyptianPhoneRegex = /^\+20(10|11|12|15)\d{8}$/;
      if (value === "") phoneErr = "- Please enter your phone number";
      else if (!egyptianPhoneRegex.test(value.trim()))
        phoneErr = "- Please enter a valid phone number with country code +20";
      setErrors((prev) => ({ ...prev, phone: phoneErr }));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { email: "", phone: "" };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const egyptianPhoneRegex = /^\+20(10|11|12|15)\d{8}$/;

    if (!user.email) {
      newErrors.email = "- Please enter your email";
      valid = false;
    } else if (!emailPattern.test(user.email)) {
      newErrors.email = "- Please enter a valid email";
      valid = false;
    }

    if (!user.phone) {
      newErrors.phone = "- Please enter your phone number";
      valid = false;
    } else if (!egyptianPhoneRegex.test(user.phone.trim())) {
      newErrors.phone = "- Please enter a valid phone number with country code +20";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    if (user.email === userinfo.email && user.phone === userinfo.phone) {
      return Swal.fire({
        title: "No Changes Found",
        text: "Nothing was updated because you didn't change anything.",
        icon: "info",
        background: "#1F2937",
        color: "#FBBF24",
        confirmButtonColor: "#B45309",
      });
    }

    const id = localStorage.getItem("id");

    try {
      const req = await fetch(
        `https://backend-one-delta-10.vercel.app/api/v1/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email: user.email,
            phone: user.phone,
          }),
        }
      );

      const res = await req.json();

      if (req.ok) {
        Swal.fire({
          title: "Profile Updated Successfully",
          text: "Your information has been saved.",
          icon: "success",
          background: "#1F2937",
          color: "#FBBF24",
          confirmButtonColor: "#B45309",
          iconColor: "#A3E635",
        }).then(() => navigate("/"));

        setuserinfo({ ...userinfo, email: user.email, phone: user.phone });
      } else {
        Swal.fire({
          title: "Error",
          text: res.message,
          icon: "error",
          background: "#1F2937",
          color: "#FBBF24",
          confirmButtonColor: "#B45309",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative min-h-screen bg-[url('/Login-Bg-img.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="absolute inset-0 bg-[url('/Colors-img.jpg')] bg-cover bg-center opacity-10"></div>

      <Card className="relative z-10 p-8 sm:p-10 bg-white bg-opacity-95 shadow-2xl w-[95%] max-w-md rounded-2xl border border-orange-200 backdrop-blur-md">
        <Typography
          variant="h4"
          className="text-center font-extrabold text-orange-900 tracking-wide"
        >
          Edit Profile
        </Typography>

        <Typography color="gray" className="mt-2 mb-8 text-center text-sm sm:text-base">
          Update your personal details and save changes
        </Typography>

        <form onSubmit={handleSave} className="flex flex-col gap-5">
          
          {/* Email */}
          <div className="flex flex-col gap-1">
            <Typography
              variant="h6"
              className="min-h-[1.25rem] mb-1"
              color={errors.email ? "red" : "blue-gray"}
            >
              {errors.email ? errors.email : "Email Address"}
            </Typography>

            <Input
              name="email"
              value={user.email}
              onChange={handleChange}
              size="lg"
              placeholder="name@mail.com"
              label={null}
              className="!border !border-gray-300 focus:!border-orange-800"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <Typography
              variant="h6"
              className="min-h-[1.25rem] mb-1"
              color={errors.phone ? "red" : "blue-gray"}
            >
              {errors.phone ? errors.phone : "Phone Number"}
            </Typography>

            <Input
              name="phone"
              type="tel"
              value={user.phone}
              onChange={handleChange}
              size="lg"
              placeholder="+20....."
              label={null}
              className="!border !border-gray-300 focus:!border-orange-800"
            />
          </div>

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

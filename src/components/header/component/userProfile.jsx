import React from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

import { useAuth } from "../../../contextapi/Authcontext";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faPowerOff } from "@fortawesome/free-solid-svg-icons";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

const UserProfile = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { logout, userinfo } = useAuth();

  const closeMenu = () => setIsMenuOpen(false);

  const handleMenuClick = (label) => {
    if (label === "Sign Out") {
      logout();
      navigate("/registration/login");
    }
    closeMenu();
  };

  return (
    <div>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center rounded-full p-0"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="text-orange-800 text-3xl border-2 border-orange-800 rounded-full p-3
                         shadow-lg hover:shadow-xl "
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {/* أولاً: My Profile */}
          <MenuItem className="flex flex-col items-start gap-1 rounded cursor-default">
            <Typography as="span" variant="small" className="font-medium">
              My Profile
            </Typography>
            {/* هنا بنجيب الإيميل من الـ context */}
            <Typography
              as="span"
              variant="small"
              className="text-gray-500 text-xs"
            >
              {userinfo?.email || "No email"}
            </Typography>
          </MenuItem>

          {profileMenuItems
            .filter((item) => item.label !== "My Profile") 
            .map(({ label, icon }) => {
              const isLastItem = label === "Sign Out";
              return (
                <MenuItem
                  key={label}
                  onClick={() => handleMenuClick(label)}
                  className={`flex items-center gap-2 rounded ${
                    isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                  }`}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default UserProfile;

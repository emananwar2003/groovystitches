import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import logo from "../../../assets/logo.png";

export default function HeaderNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium transition-transform duration-200 hover:scale-110"
      >
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 1.5H10C11.1046 1.5 12 2.39543 12 3.5V13.5H4C2.89543 13.5 2 12.6046 2 11.5V1.5Z"
            fill="#FF7A00"
          />
          <path
            d="M12 3.5H14C14.5523 3.5 15 3.94772 15 4.5V12.5C15 13.6046 14.1046 14.5 13 14.5H4C2.89543 14.5 2 13.6046 2 12.5"
            stroke="#FF7A00"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <rect x="4" y="4" width="5" height="1.3" rx="0.6" fill="white" />
          <rect x="4" y="6.5" width="7" height="1.3" rx="0.6" fill="white" />
          <rect x="4" y="9" width="6" height="1.3" rx="0.6" fill="white" />
        </svg>
        <a
          href="https://groovystitches.vercel.app/about"
          className="flex items-center text-orange-800"
        >
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium transition-transform duration-200 hover:scale-110"
      >
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2.5H12C12.5523 2.5 13 2.94772 13 3.5V13.5C13 14.0523 12.5523 14.5 12 14.5H2C1.44772 14.5 1 14.0523 1 13.5V3.5C1 2.94772 1.44772 2.5 2 2.5Z"
            fill="#FF7A00"
          />
          <path
            d="M14 4.5H13V13.5H14C14.5523 13.5 15 13.0523 15 12.5V5.5C15 4.94772 14.5523 4.5 14 4.5Z"
            fill="#FF7A00"
          />
          <rect x="3" y="4.5" width="5" height="2" rx="0.5" fill="#FFFFFF" />
          <rect x="3" y="7.5" width="10" height="1.5" rx="0.5" fill="#FFFFFF" />
          <rect
            x="3"
            y="10.5"
            width="10"
            height="1.5"
            rx="0.5"
            fill="#FFFFFF"
          />
        </svg>
        <a
          href="https://groovystitches.vercel.app/news"
          className="flex items-center text-orange-800"
        >
          News
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium transition-transform duration-200 hover:scale-110"
      >
        <svg
          width="14"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H5L6.6 14.2C6.74 15.24 7.62 16 8.67 16H18.5C19.37 16 20.11 15.43 20.34 14.6L22 8H7.1"
            fill="#FF7A00"
          />
          <circle cx="9" cy="19" r="1.8" fill="#FF7A00" />
          <circle cx="18" cy="19" r="1.8" fill="#FF7A00" />
        </svg>
        <a
          href="https://groovystitches.vercel.app/cart"
          className="flex items-center text-orange-800"
        >
          Cart
        </a>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 bg-orange-100 shadow-lg">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Groovy Stitches Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-semibold text-orange-800">
            Groovy Stitches
          </span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1 ml-4">
          <a href="https://groovystitches.vercel.app/login">
            <Button
              variant="filled"
              size="sm"
              className="hidden lg:inline-block bg-orange-800 hover:bg-orange-900 text-white"
            >
              <span>Log In</span>
            </Button>
          </a>
          <a href="https://groovystitches.vercel.app/sign">
            <Button
              variant="filled"
              size="sm"
              className="hidden lg:inline-block bg-orange-800 hover:bg-orange-900 text-white"
            >
              <span>Sign up</span>
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <a
              href="https://groovystitches.vercel.app/login"
              className="w-full"
            >
              <Button
                fullWidth
                variant="filled"
                size="sm"
                className="lg:inline-block bg-orange-800 text-white hover:bg-orange-900"
              >
                <span>Log In</span>
              </Button>
            </a>
            <a href="https://groovystitches.vercel.app/sign" className="w-full">
              <Button
                fullWidth
                variant="filled"
                size="sm"
                className="bg-orange-800 text-white hover:bg-orange-900"
              >
                <span>Sign up</span>
              </Button>
            </a>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}

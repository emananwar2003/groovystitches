import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const LINKS = [
  {
    title: "Main Menu",
    items: ["About", "Products", "Cart", "News"],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-orange-50 shadow-inner">
      <div className="mx-auto w-full max-w-7xl px-8 py-5 md:px-12 lg:px-16 lg:py-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT COLUMN — LOGO + TITLE */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Typography variant="h5" className="mb-2">
              GroovyStitches
            </Typography>
            <img
              src="logo.png"
              alt="GroovyStitches Logo"
              className="w-32 h-auto m-6"
            />
          </div>
          {/* RIGHT COLUMN — LINKS */}
          <div className="flex justify-center md:justify-center">
            <div className="grid grid-cols-1 text-center md:text-left">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-3 font-medium opacity-40"
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as={Link}
                        to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
        {/* BOTTOM SECTION */}
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <Link to="/">GroovyStitches </Link>. All Rights
            Reserved.
          </Typography>
          {/* social media */}
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* insta */}
            <Link
              to="https://www.instagram.com/groovy_stitchess/"
              target="_blank"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            {/* tiktok */}
            <Link
              to="https://www.tiktok.com/@groovystitchess0?_r=1&_t=ZS-91t5Y42thYu"
              target="_blank"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="black"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M16.5 3.5c.58.46 1.23.85 1.93 1.14.67.28 1.38.47 2.07.56v3.01a6.82 6.82 0 01-4-1.35v6.87c0 3.68-2.99 6.67-6.67 6.67S3.16 17.41 3.16 13.73c0-3.68 2.99-6.67 6.67-6.67.36 0 .72.03 1.07.08v3.14a3.74 3.74 0 00-1.07-.15 3.53 3.53 0 00-3.53 3.53 3.53 3.53 0 003.53 3.53c1.94 0 3.53-1.59 3.53-3.53V2h3.1v1.5z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

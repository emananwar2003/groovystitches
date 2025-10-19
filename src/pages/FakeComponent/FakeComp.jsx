import React from "react";
import { Link } from "react-router-dom";

const FakeComp = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to GroovyStitches!</h1>
      <p className="mb-8">This is the main page of your application.</p>
      <div className="gap-4 flex justify-center">
        <Link
          to="/about"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to About Page
        </Link>
        <Link
          to="/news"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to News Page
        </Link>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to login Page
        </Link>
      </div>
    </div>
  );
};

export default FakeComp;

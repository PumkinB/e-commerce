import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-10">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="relative hidden xl:block">
        <path
          fill="#0F62FE"
          d="M53.6,-62.2C68.3,-51.5,78.3,-33.5,82.5,-13.9C86.7,5.7,85.1,27,74.5,40.8C63.9,54.6,44.2,61,25.9,65C7.6,69,-9.4,70.7,-24.9,66C-40.4,61.4,-54.5,50.5,-64.2,36C-73.8,21.4,-79.1,3.3,-74.5,-11.5C-69.9,-26.2,-55.4,-37.5,-41.4,-48.3C-27.3,-59.1,-13.7,-69.3,2.9,-72.8C19.4,-76.2,38.9,-72.8,53.6,-62.2Z"
          transform="translate(100 100)"
        />
      </svg>
      <img src="/img/people-go-shopping.png" alt="Person" className="hidden xl:block md:w-[750px] md:h-[450px] absolute right-0 left-7" />

      <div className="mx-5">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">Let's Explore Unique Clothes</h1>
        <p className="text-xl text-slate-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam qui veniam quidem temporibus nemo, sint amet rem? Eos, iure?
        </p>
        <Link to={"./login"} className="py-2 px-4 bg-indigo-600 text-white font-bold rounded text-lg">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import CARD_2 from "../../assets/images/card2.png"; 
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* LEFT SIDE */}
      <div className="w-full md:w-[55vw] flex flex-col justify-between px-10 py-8">
        <h2 className="text-2xl font-semibold text-violet-700 tracking-wide">
          Expense <span className="text-fuchsia-600">Tracker</span>
        </h2>

        <div className="grow flex items-center justify-center">
          {children}
        </div>
        </div>

   {/* RIGHT SIDE */} 

<div className="hidden md:flex w-[45vw] relative bg-liner-to-br from-violet-100 via-fuchsia-100 to-purple-200 overflow-hidden p-8">

  <div className="absolute -top-10 -left-10 w-56 h-56 bg-violet-500 rounded-[40px] blur-2xl opacity-40" />
  <div className="absolute top-[35%] -right-14 w-56 h-64 border-20 border-fuchsia-400 rounded-[40px] opacity-50" />
  <div className="absolute -bottom-10 left-10 w-56 h-56 bg-fuchsia-600 rounded-[40px] blur-2xl opacity-30" />

  <div className="relative z-20 mt-4 mx-auto w-[85%]">
    <StatsInfoCard
      icon={<LuTrendingUpDown />}
      label="Track Your Income & Expense"
      value="50,000"
      color="bg-gradient-to-tr from-violet-600 to-fuchsia-500"
    />
  </div>

  <img
    src={CARD_2}
    alt="Dashboard Preview"
    className="absolute bottom-5 left-1/2 -translate-x-1/2 w-72 lg:w-[85%] rounded-2xl shadow-xl shadow-violet-400/20 z-10"
  />
</div>

    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg shadow-purple-400/20 border border-gray-200/40 z-20">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full shadow-md`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-sm text-gray-500 mb-1">{label}</h6>
        <span className="text-[22px] font-semibold text-gray-700">
          &#8377;{value}
        </span>
      </div>
    </div>
  );
};

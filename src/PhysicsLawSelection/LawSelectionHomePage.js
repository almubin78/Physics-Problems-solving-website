import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LawSelectionHomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        সূত্র নির্ধারন 
      </h1>
      <p className="text-xl font-bold text-gray-800 mb-6">
        তুমি যদি সূত্র গুলো না বুঝ তবে অধ্যায় সিলেক্ট কর 
      </p>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { path: "/find-laws/motion", label: "গতি" },
          { path: "/find-laws/force", label: "বল" },
          {
            path: "/find-laws/work-power-energy",
            label: "কাজ,ক্ষমতা ও শক্তি",
          },
          { 
            path: "/find-laws/sound-and-wave", 
            label: "শব্দ ও তরঙ্গ" 
          },
        ].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-center font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default LawSelectionHomePage;

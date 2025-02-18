import { NavLink, Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SolvingHomePage = () => {
//   const [defaultPath, setDefaultPath] = useState(null);

//   useEffect(() => {
//     // Set default path when the component mounts
//     setDefaultPath("/laws-integrations/motion");
//   }, []);

//   if (defaultPath) {
//     return <Navigate to={defaultPath} replace />;
//   }

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Laws & Integrations
      </h1>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { path: "/laws-integrations/motion", label: "Motion" },
          { path: "/laws-integrations/force", label: "Force" },
          {
            path: "/laws-integrations/work-power-energy",
            label: "Work & Energy",
          },
          { path: "/laws-integrations/sound-and-wave", label: "Sound & Wave" },
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

export default SolvingHomePage;

import { NavLink, Outlet, } from "react-router-dom";

const PhysicsSolvingHomePage = () => {
  

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      {/* <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Laws & Integrations
      </h1> */}
      <p className="text-xl font-bold text-gray-800 mb-6 divider">
        অধ্যায় নির্ধারন কর 
      </p>
      <p className="text-md font-bold text-gray-800 mb-6">
       (শুধু মাত্র প্রয়োগমূলক প্রশ্নের জন্য )
      </p>


      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { path: "/laws-integrations/motion", label: "গতি" },
          { path: "/laws-integrations/force", label: "বল" },
          {
            path: "/laws-integrations/work-power-energy",
            label: "কাজ,ক্ষমতা শক্তি",
          },
          { path: "/laws-integrations/matterAndPressure", label: "পদার্থের অবস্থা ও চাপ" },
          { path: "/laws-integrations/sound-and-wave", label: "শব্দ ও তরঙ্গ" },
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

export default PhysicsSolvingHomePage;

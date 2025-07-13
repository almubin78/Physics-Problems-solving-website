import { Link, NavLink, Outlet, } from "react-router-dom";

const PhysicsCalculatorRootPage = () => {
  

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
       <Link className="underline text-red-200" to='/message'>উচ্চতর দক্ষতা মূলক সমাধান</Link>
      </p>


      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { path: "/physics-calculator/motion", label: "গতি" },
          { path: "/physics-calculator/force", label: "বল" },
          {
            path: "/physics-calculator/work-power-energy",
            label: "কাজ,ক্ষমতা শক্তি",
          },
          { path: "/physics-calculator/matterAndPressure", label: "পদার্থের অবস্থা ও চাপ" },
          { path: "/physics-calculator/sound-and-wave", label: "শব্দ ও তরঙ্গ" },
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

export default PhysicsCalculatorRootPage;

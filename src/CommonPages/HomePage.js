
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// import { router } from "../router/router";
const HomePage = () => {
    // console.log(router.basename);
  return (
    <div>
     
      <Navbar />
      <p className="mt-20"></p>
      <Outlet />
      {/* <Camera color="red" size={48} />; */}
      {/* <ProjectHierarchy/> */}
      <Footer />
    </div>
  );
};

export default HomePage;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Camera } from 'lucide-react';
import ProjectHierarchy from "../HierarchyCompoent/ProjectHierarchy";
// import { router } from "../router/router";
const HomePage = () => {
    // console.log(router.basename);
  return (
    <div>
      <marquee behavior="" direction="ltr">Hey, Are You want to lern from zoro</marquee>
      <Navbar />
      <Outlet />
      {/* <Camera color="red" size={48} />; */}
      {/* <ProjectHierarchy/> */}
      <Footer />
    </div>
  );
};

export default HomePage;

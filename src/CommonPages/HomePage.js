import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Camera } from 'lucide-react';
import ProjectHierarchy from "../HierarchyCompoent/ProjectHierarchy";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Camera color="red" size={48} />;
      <ProjectHierarchy/>
      <Footer />
    </div>
  );
};

export default HomePage;

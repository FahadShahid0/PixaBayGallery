import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import ProfileDetails from "../pages/profilepage";
import PageLayout from "../components/pagelayout";
import ImagesDashboard from "../pages/images-dashboard";
import About from "../pages/about";
import * as RC from './constants';


const AllRoutes = () => {
  return (
      <Routes>
        <Route path={RC.ImagesDashboard} element={<PageLayout><ImagesDashboard /></PageLayout>} />
        <Route path={RC.ImageDetails} element={<PageLayout><ProfileDetails /></PageLayout>} />
        <Route path={RC.About} element={<PageLayout><About /></PageLayout>} />
        <Route path="*" element={<Navigate to={RC.ImagesDashboard}/>}/>
      </Routes>
  );
};

export default AllRoutes;

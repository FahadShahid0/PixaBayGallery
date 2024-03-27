import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import PageLayout from "../components/pagelayout";
import ImagesDashboard from "../pages/images-dashboard";
import * as RC from './constants';


const AllRoutes = () => {
  return (
      <Routes>
        <Route path={RC.ImagesDashboard} element={<PageLayout><ImagesDashboard /></PageLayout>} />
        <Route path="*" element={<Navigate to={RC.ImagesDashboard}/>}/>
      </Routes>
  );
};

export default AllRoutes;

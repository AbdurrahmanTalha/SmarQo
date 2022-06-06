import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsCorrect from "../DetailsCorrect/DetailsCorrect";
import Home from "../homepage/Home";
import Login from "../login/Login";
import PostRequirement from "../postRequirements/PostRequirement";
import ReqDetails from "../ReqDetails/ReqDetails";
import Register from "../register/Register";
import paths from "./routerPath";

const RoutesPath = () => {
  return (
    <Routes>
      <Route exact path={paths.home} element={<Home />} />
      <Route
        exact
        path={paths.postRequirementNow}
        element={<PostRequirement />}
      />
      <Route exact path={paths.login} element={<Login />} />
      <Route exact path={paths.signup} element={<Register />} />
      <Route exact path={paths.detailsCorrect} element={<DetailsCorrect></DetailsCorrect>}></Route>
      <Route exact path={paths.reqDetails} element={<ReqDetails></ReqDetails>}></Route>
    </Routes>
  );
};

export default RoutesPath;

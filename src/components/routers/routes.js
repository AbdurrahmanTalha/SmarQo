import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsCorrect from "../DetailsCorrect/DetailsCorrect";
import Home from "../homepage/Home";
import Login from "../login/Login";
import PostRequirement from "../postRequirements/PostRequirement";
import DetailsTabs from "../ReqDetails/DetailsTabs";
import Register from "../register/Register";
import DetailsListTabs from "../DetailsList/DetailsListTabs"
import DetailsProfile from "../DetailsProfile/DetailsProfile"
import paths from "./routerPath";
import Feedback from "../Feedback/Feedback";
import UserInfo from "../UserInfo/UserInfo";
import Dashboard from "../Dashboard/Dashboard";
import AccountSettings from "../AccountSettings/AccountSettings";

import Chat from "../Chat/Chat";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const RoutesPath = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Be Vietnam Pro",
        "sans-serif"
      ].join(','),
    },
  });
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
      <Route exact path={paths.reqDetails} element={<DetailsTabs></DetailsTabs>}></Route>
      <Route exact path={paths.detailsList} element={<DetailsListTabs></DetailsListTabs>}></Route>
      <Route exact path={paths.detailsProfile} element={<DetailsProfile></DetailsProfile>}></Route>
      <Route exact path={paths.feedback} element={<Feedback></Feedback>}></Route>
      <Route exact path={paths.userInfo} element={<UserInfo></UserInfo>}></Route>
      <Route exact path={paths.dashboard} element={<Dashboard></Dashboard>}></Route>
      <Route exact path={paths.accountSettings} element={<AccountSettings></AccountSettings>}></Route>
      <Route exact path={paths.chat} element={<Chat></Chat>}></Route>
    </Routes>
    <ThemeProvider theme={theme}>
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
        <Route exact path={paths.reqDetails} element={<DetailsTabs></DetailsTabs>}></Route>
        <Route exact path={paths.detailsList} element={<DetailsListTabs></DetailsListTabs>}></Route>
        <Route exact path={paths.detailsProfile} element={<DetailsProfile></DetailsProfile>}></Route>
        <Route exact path={paths.feedback} element={<Feedback></Feedback>}></Route>
        <Route exact path={paths.userInfo} element={<UserInfo></UserInfo>}></Route>
        <Route exact path={paths.dashboard} element={<Dashboard></Dashboard>}></Route>
        <Route exact path={paths.accountSettings} element={<AccountSettings></AccountSettings>}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default RoutesPath;

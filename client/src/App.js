import { Container } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home";
import CourseDescription from "./components/Reports/CourseDescription";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import CourseDescription1 from "./components/Reports/CourseDescription1";
import OpeningReport from "./components/Reports/OpeningReport";
import AttainmentReport from "./components/Reports/AttainmentReport";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        {/* <Navbar /> */}
        <CustomNavbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/courseDescription" element={<CourseDescription />} />
          <Route path="/courseDescription1" element={<CourseDescription1 />} />
          <Route path="/openingReport" element={<OpeningReport />} />
          <Route path="/attainmentReport" element={<AttainmentReport />} />
        </Routes>
        {/* <Home /> */}
      </Container>
    </BrowserRouter>
  );
};

export default App;

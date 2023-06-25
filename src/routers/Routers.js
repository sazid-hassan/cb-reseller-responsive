import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Orders from "../pages/Orders";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import { Spin } from "antd";

const Routers = () => {
  return (
    <div>
      <Suspense
        fallback={
          <>
            <Spin size="large" />
          </>
        }
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />

            <Route
              path="/orders"
              element={
                <Layout>
                  <Orders />
                </Layout>
              }
            />

            <Route path="/login" element={<LogIn />} />

            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default Routers;

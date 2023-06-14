import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Orders from "../pages/Orders";

const Routers = () => {
  return (
    <div>
      <Suspense fallback={<></>}>
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
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default Routers;

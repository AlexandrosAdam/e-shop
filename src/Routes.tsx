import React, { FC } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Navbar from "./layout/Navbar";
import Home from "./views/Home";
import Products from "./views/Products";
import Profile from "./views/Profile";

const Routes: FC = () => (
  <Switch>
    <Route exact path="/">
      <Layout>
        <Home />
      </Layout>
    </Route>
    <Route exact path="/products">
      <Layout>
        <Products />
      </Layout>
    </Route>
    <Route exact path="/profile">
      <Layout>
        <Profile />
      </Layout>
    </Route>
  </Switch>
);

export default Routes;

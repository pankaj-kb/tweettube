/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AuthCheck from "./AuthCheck.jsx";
import TweetsPage from "./pages/TweetsPage.jsx";
import DevInfoPage from "./pages/DevInfoPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import WatchHistoryPage from "./pages/WatchHistoryPage.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import SubscriptionsPage from "./pages/SubscriptionsPage.jsx";
import Layout from "./Layout/Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<AuthCheck><Layout/></AuthCheck>}>
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          <AuthCheck>
            <HomePage />
          </AuthCheck>
        }
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route
        path="subscriptions"
        element={
          <AuthCheck>
            <SubscriptionsPage />
          </AuthCheck>
        }
      />
      <Route
        path="profile"
        element={
          <AuthCheck>
            <ProfilePage />
          </AuthCheck>
        }
      />
      <Route
        path="tweets"
        element={
          <AuthCheck>
            <TweetsPage />
          </AuthCheck>
        }
      />
      <Route
        path="watch-history"
        element={
          <AuthCheck>
            <WatchHistoryPage />
          </AuthCheck>
        }
      />
      <Route
        path="dev-info"
        element={
          <AuthCheck>
            <DevInfoPage />
          </AuthCheck>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

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
import AllTweetsPage from "./pages/AllTweetsPage.jsx";
import DevInfoPage from "./pages/DevInfoPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import WatchHistoryPage from "./pages/WatchHistoryPage.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import SubscriptionsPage from "./pages/SubscriptionsPage.jsx";
import Layout from "./Layout/Layout.jsx";
import VideoPage from "./pages/VideoPage.jsx";
import AuthRouter from "./components/AuthRouter.jsx";
import LoginCheck from "./components/LoginCheck.jsx";
import TweetPage from "./pages/TweetPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import VideoUploadPage from "./pages/VideoUploadPage.jsx";
import TweetUploadPage from "./pages/TweetUploadPage.jsx";

export const router = createBrowserRouter(
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
      <Route
        path="video/:videoId"
        element={
          <AuthCheck>
            <VideoPage />
          </AuthCheck>
        }
      />
      <Route
        path="login"
        element={
          <LoginCheck>
            <LoginPage />
          </LoginCheck>
        }
      />
      <Route
        path="register"
        element={
          <LoginCheck>
            <RegisterPage />
          </LoginCheck>
        }
      />
      <Route
        path="subscriptions"
        element={
          <AuthCheck>
            <SubscriptionsPage />
          </AuthCheck>
        }
      />
      <Route
        path="profile/:username"
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
            <AllTweetsPage />
          </AuthCheck>
        }
      />
      <Route
        path="tweet/:tweetId"
        element={
          <AuthCheck>
            <TweetPage />
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
      <Route
        path="search/:query"
        element={
          <AuthCheck>
            <SearchPage />
          </AuthCheck>
        }
      />
      <Route
        path="upload/video"
        element={
          <AuthCheck>
            <VideoUploadPage />
          </AuthCheck>
        }
      />
      <Route
        path="upload/tweet"
        element={
          <AuthCheck>
            <TweetUploadPage />
          </AuthCheck>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthRouter />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//   <Route path="/" elements={<App />}>

//   </Route>)
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <RouterProvider router={router} /> */}
    <App />
  </Provider>
);

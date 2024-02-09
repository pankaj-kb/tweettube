import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { RouterProvider } from "react-router-dom";
import { router } from "../main";
import LoadingScreen from "../pages/LoadingScreen";

function AuthRouter() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // const loginStatus = useSelector((state) => state.auth.status);
  // const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const refreshToken = await axios.get(`/users/refresh-token`);
        console.log(refreshToken);
        const response = await axios.get("/users/current-user");
        // console.log("from AuthRouter: ", response);
        if (response.data.statusCode === 200) {
          dispatch(login(response.data.data.user));
        } else {
          dispatch(login(null));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [dispatch]);

  // useEffect(() => {
  //   if (loginStatus) {
  //     if (userData && userData.data) {
  //       setLoading(false);
  //     }
  //   }
  // }, [loginStatus, userData]);

  return (
    <>{loading ? <LoadingScreen /> : <RouterProvider router={router} />}</>
  );
}

export default AuthRouter;

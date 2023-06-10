import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { loginUser } from "../../../../reduxToolkit/authSlice/authSlice";
import { useDispatch } from "react-redux";

const SignInWithFacebook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url = location.search.slice(6);

  useEffect(() => {
    const getFacebookUser = async () => {
      try {
        const user = await axios
          .get(
            `https://api.vatandoshlarfondi.uz/api/oauth/call-back/facebook?code=${url}`
          )
          .then((res) => res.data);

        dispatch(loginUser(user));
        if (user.token) {
          navigate("/registration/register");
        }
      } catch (e) {
        console.log(e);
      }
    };

    getFacebookUser();
  }, []);

  return <div>Login with Facebook</div>;
};

export default SignInWithFacebook;

import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const SignInWithGoogle = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.search.slice(6));

  const url = location.search.slice(6);

  useEffect(() => {
    const getGoogleUser = async () => {
      try {
        const user = await axios
          .get(
            `https://api.vatandoshlarfondi.uz/api/oauth/call-back/google?code=${url}`
          )
          .then((res) => res.data);

        localStorage.setItem("user", JSON.stringify(user));
        if (user.token) {
          navigate("/");
        }
      } catch (e) {
        console.log(e);
      }
    };

    getGoogleUser();
  }, []);

  return <div>Login with Google</div>;
};

export default SignInWithGoogle;

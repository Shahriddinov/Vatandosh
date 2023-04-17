import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../SignIn/SignIn.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { setPassword } from "../../../../reduxToolkit/authSlice/extraReducer";

export default function SetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActivePasswordEye, setisActivePasswordEye] = useState(false);
  const [isActiveCurrentPasswordEye, setisActiveCurrentPasswordEye] =
    useState(false);
  const token = useSelector((state) => state.authSlice.token);
  const verifyToken = localStorage.getItem("verifyToken");
  const [passwords, setPasswords] = useState({
    token: verifyToken,
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPassword(passwords));
  };

  useEffect(() => {
    if (token) {
      navigate("/registration/register");
    }
  }, [token]);

  return (
    <div className="auth">
      <div className="container">
        <div className="auth-wrapper">
          <div className="auth-desc">
            <h2 className="auth-desc-title">
              Lorem ipsum dolor sit amet consectetur. Mauris sit mauris
            </h2>
            <p className="auth-desc-text">
              Lorem ipsum dolor sit amet consectetur. Neque sed ultrices vel
              orci mollis felis ultrices leo. Erat vestibulum amet nibh luctus
              vitae velit vitae vulputate blandit. Malesuada commodo magna sed
              sem justo non convallis. Vestibulum id nunc et morbi lobortis non
              bibendum arcu netus. Eget nisi tincidunt aliquam rutrum nunc
              feugiat fermentum in nisi
            </p>
          </div>
          <div className="auth-form auth-signup">
            <div className="auth-form-title">
              <h3>Parolingizni kiriting</h3>
              <p>
                Hisobingiz bilan bog'langan email pochtangizni kiriting va
                parolingizni tiklash uchun tasdiqlash kodini yuboramiz.
              </p>
            </div>
            <form
              className="auth-form-inputs"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label className="auth-form-inputs-passwordInput auth-form-inputs-passwordInput-changePassword">
                <span>Parol</span>
                <input
                  onChange={(e) =>
                    setPasswords((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  type={isActivePasswordEye ? "text" : "password"}
                  minLength={5}
                  maxLength={30}
                  required
                />
                {isActivePasswordEye ? (
                  <AiFillEyeInvisible
                    className="auth-form-inputs-passwordInput-eyeIcon"
                    onClick={() => setisActivePasswordEye(false)}
                  />
                ) : (
                  <AiFillEye
                    className="auth-form-inputs-passwordInput-eyeIcon"
                    onClick={() => setisActivePasswordEye(true)}
                  />
                )}
              </label>
              <label className="auth-form-inputs-passwordInput">
                <span>Qaytadan parol</span>
                <input
                  onChange={(e) =>
                    setPasswords((prev) => ({
                      ...prev,
                      password_confirmation: e.target.value,
                    }))
                  }
                  type={isActiveCurrentPasswordEye ? "text" : "password"}
                  minLength={5}
                  maxLength={30}
                  required
                />
                {isActiveCurrentPasswordEye ? (
                  <AiFillEyeInvisible
                    className="auth-form-inputs-passwordInput-eyeIcon"
                    onClick={() => setisActiveCurrentPasswordEye(false)}
                  />
                ) : (
                  <AiFillEye
                    className="auth-form-inputs-passwordInput-eyeIcon"
                    onClick={() => setisActiveCurrentPasswordEye(true)}
                  />
                )}
              </label>
              <button
                type="submit"
                className="auth-form-inputs-submitBtn auth-form-inputs-submitBtn-changePassword"
              >
                O’rnatish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

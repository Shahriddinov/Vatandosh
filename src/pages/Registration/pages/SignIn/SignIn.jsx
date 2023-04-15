import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { signIn } from "../../../../reduxToolkit/authSlice/extraReducer";

import google from "../../../../assets/images/register/google-icon.svg";
import apple from "../../../../assets/images/register/apple-icon.svg";
import facebook from "../../../../assets/images/register/facebook-icon.svg";
import oneid from "../../../../assets/images/register/oneid-icon.svg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import "./SignIn.scss";

export default function SignIn() {
  const dispatch = useDispatch();
  const [isActivePasswordEye, setisActivePasswordEye] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const user = useSelector((state) => state.authSlice.userData);
  const error = useSelector((state) => state.authSlice.error);

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(userData));
  };

  useEffect(() => {
    if (user) {
      alert("Signed in successfully");
    }
  }, [user]);

  if (error) {
    alert(error);
  }

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
          <div className="auth-form">
            <div className="auth-form-title">
              <h3>Shaxsiy kabinetga kirish</h3>
              <p>Iltimos ma’lumotlaringizni kirting</p>
            </div>
            <form
              className="auth-form-inputs"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label className="auth-form-inputs-emailInput">
                <span>Email pochtangizni kiriting</span>
                <input
                  type="email"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </label>
              <label className="auth-form-inputs-passwordInput">
                <span>Parol</span>
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({
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
              <div className="auth-form-inputs-checkbox">
                <div className="auth-form-inputs-checkbox-input">
                  <input type="checkbox" name="" id="" />
                  <span>Qurilmani eslab qolish</span>
                </div>
                <div className="auth-form-inputs-checkbox-forgetPassword">
                  <Link to="/registration/recovery-password">
                    Parolni unutdingizmi?
                  </Link>
                </div>
              </div>
              <button type="submit" className="auth-form-inputs-submitBtn">
                Profilga kirish
              </button>
            </form>
            <div className="auth-links">
              <div className="auth-links-list">
                <a
                  href="http://www.google.com"
                  className="auth-links-list-item"
                >
                  <img src={google} alt="icon" />
                </a>
                <a href="http://www.apple.com" className="auth-links-list-item">
                  <img src={apple} alt="icon" />
                </a>
                <a
                  href="http://www.facebook.com"
                  className="auth-links-list-item auth-links-list-item-facebook"
                >
                  <img src={facebook} alt="icon" />
                </a>
                <a
                  href="https://id.egov.uz/"
                  className="auth-links-list-item auth-links-list-item-oneid"
                >
                  <img src={oneid} alt="icon" />
                </a>
              </div>
              <div className="auth-links-tosignup">
                <span>Hali ro’yxatdan o’tmaganmisiz?</span>
                <Link to="/registration/signup">Ro’yxatdan o’ting</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import InputControl from "components/InputControl";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../config/firebase";

const style = {
  bg: "w-screen h-screen bg-gradient-to-r from-[#9900ff] to-[#cc80ff] flex justify-center items-center",
  container:
    "min-w-[400px] w-fit h-fit bg-white shadow-2xl p-[30px] rounded-[10px] flex flex-col gap-[30px]",
  heading: "font-bold text-3xl text-center",
  footer: "flex flex-col gap-[10px]",
  button:
    "w-full transition outline-0 border-0 bg-[#9900ff] text-[#fff] rounded-[5px] font-bold text-s py-[10px] py-[16px] hover:bg-[#cc80ff] disabled:bg-gray-500",
  text: "font-semibold color-[#000]",
  span: "font-bold text-[#9900ff] text-s tracking-wider ml-2 hover:text-[#cc80ff]",
  error: "font-bold text-s text-red-500 text-center",
};

const SignIn = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleInputChange = (type: string, value: string) => {
    setError("");
    if (type === "email") {
      setInputValues((prev) => ({
        ...prev,
        email: value,
      }));
    } else {
      setInputValues((prev) => ({
        ...prev,
        password: value,
      }));
    }
  };

  const handleSubmit = async () => {
    if (!inputValues.email || !inputValues.password) {
      setError("Fill all input fields");
      return;
    }
    setSubmitButtonDisabled(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      );
      setSubmitButtonDisabled(false);
      navigate("/");
    } catch (error) {
      setSubmitButtonDisabled(false);
      if (error && typeof error === "object" && error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>Sign In</h1>
        <InputControl
          label="Email"
          type="email"
          placeholder="Enter email address"
          value={inputValues.email}
          handleInputChange={handleInputChange}
        />
        <InputControl
          label="Password"
          type="password"
          placeholder="Enter password"
          value={inputValues.password}
          handleInputChange={handleInputChange}
        />
        <b className={style.error}>{error}</b>
        <div className={style.footer}>
          <button
            className={style.button}
            onClick={handleSubmit}
            disabled={submitButtonDisabled}
          >
            Sign In
          </button>
          <p className={style.text}>
            Don't have an account?
            <span className={style.span}>
              <Link to="/signUp">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

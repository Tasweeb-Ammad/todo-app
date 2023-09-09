import InputControl from "components/InputControl";
import { useState } from "react";
import { Link } from "react-router-dom";

const style = {
  bg: "w-screen h-screen bg-gradient-to-r from-[#9900ff] to-[#cc80ff] flex justify-center items-center",
  container:
    "min-w-[400px] w-fit h-fit bg-white shadow-2xl p-[30px] rounded-[10px] flex flex-col gap-[30px]",
  heading: "font-bold text-3xl text-center",
  footer: "flex flex-col gap-[10px]",
  button:
    "w-full transition outline-0 border-0 bg-[#9900ff] text-[#fff] rounded-[5px] font-bold text-s py-[10px] py-[16px] hover:bg-[#cc80ff]",
  text: "font-semibold color-[#000]",
  span: "font-bold text-[#9900ff] text-s tracking-wider ml-2 hover:text-[#cc80ff]",
  error: "font-bold text-s text-red-500 text-center",
};

const SignIn = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

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
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>Sign In</h1>
        <InputControl
          label="Email"
          type="email"
          placeholder="Enter email address"
          handleInputChange={handleInputChange}
        />
        <InputControl
          label="Password"
          type="password"
          placeholder="Enter password"
          handleInputChange={handleInputChange}
        />
        <b className={style.error}>{error}</b>
        <div className={style.footer}>
          <button className={style.button}>Sign In</button>
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

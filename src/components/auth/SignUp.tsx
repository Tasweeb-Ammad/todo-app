import InputControl from "components/InputControl";
import { Link } from "react-router-dom";

const style = {
  bg: "w-screen h-screen bg-gradient-to-r from-[#9900ff] to-[#cc80ff] flex justify-center items-center",
  container:
    "min-w-[400px] w-fit h-fit bg-white shadow-2xl p-[30px] rounded-[10px] flex flex-col gap-[30px]",
  heading: "font-bold text-3xl w-full flex justify-center",
  footer: "flex flex-col gap-[10px]",
  button:
    "w-full transition outline-0 border-0 bg-[#9900ff] text-[#fff] rounded-[5px] font-bold text-s py-[10px] py-[16px] hover:bg-[#cc80ff]",
  text: "font-semibold color-[#000]",
  span: "font-bold text-[#9900ff] text-s tracking-wider ml-2 hover:text-[#cc80ff]",
};

const SignUp = () => {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>Sign Up</h1>
        <InputControl label="Name" type="text" placeholder="Enter your name" />
        <InputControl
          label="Email"
          type="email"
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          type="password"
          placeholder="Enter password"
        />
        <div className={style.footer}>
          <button className={style.button}>Sign Up</button>
          <p className={style.text}>
            Already have an account?
            <span className={style.span}>
              <Link to="/signIn">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

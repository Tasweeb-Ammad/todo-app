import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "components/Home";
import SignIn from "components/auth/SignIn";
import SignUp from "components/auth/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

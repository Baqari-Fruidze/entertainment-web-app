import { Dispatch, SetStateAction } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createContext, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { TuserInfo } from "./types.ts/User";
import { TuserContext } from "./types.ts/ContextType";
import { Teror } from "./types.ts/Eror";

export const Context = createContext<TuserContext>({
  userInfo: { emailAdress: "", password: "", Rpassword: "" },
  setUserInfo: () => {},
  eror: {
    same: false,
    empty: { email: false, password: false, Rpassword: false },
    valid: true,
  },
  setEror: () => {},
});
function App() {
  const [userInfo, setUserInfo] = useState<TuserInfo>({
    password: "",
    emailAdress: "",
    Rpassword: "",
  });
  const [eror, setEror] = useState<Teror>({
    same: false,
    empty: {
      email: false,
      password: false,
      Rpassword: false,
    },
    valid: true,
  });
  return (
    <Context.Provider value={{ userInfo, setUserInfo, eror, setEror }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { createContext, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { TuserInfo } from "./types.ts/User";
import { TuserContext } from "./types.ts/ContextType";
import { Teror } from "./types.ts/Eror";
import Header from "./components/Header";
import Home from "./pages/Home";
import data from "./data.json";
import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Context = createContext<TuserContext>({
  userInfo: { emailAdress: "", password: "", Rpassword: "" },
  setUserInfo: () => {},
  eror: {
    empty: {
      email: false,
      password: false,
      Rpassword: false,
    },
    same: false,
  },
  setEror: () => {},
});

function ConditionalHeader() {
  const location = useLocation();

  return location.pathname === "/login" ||
    location.pathname === "/signUp" ? null : (
    <Header />
  );
}
const swiper = new Swiper('.swiper', {
    
  modules: [Navigation, Pagination],
  ...
});
function App() {
  const [userInfo, setUserInfo] = useState<TuserInfo>({
    password: "",
    emailAdress: "",
    Rpassword: "",
  });
  const [eror, setEror] = useState<Teror>({
    empty: {
      email: false,
      password: false,
      Rpassword: false,
    },
    same: false,
  });
  console.log(data);
  return (
    <Context.Provider value={{ userInfo, setUserInfo, eror, setEror }}>
      <BrowserRouter>
        <ConditionalHeader />

        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

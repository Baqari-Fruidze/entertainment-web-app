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
import { TuserInfo } from "./types/User";
import { TuserContext } from "./types/ContextType";
import { Teror } from "./types/Eror";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useEffect } from "react";
import { Tdata } from "./types/Data";
import info from "../src/data.json";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Bookmarked from "./pages/Bookmarked";

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
  data: [],
  setData: () => {},
  statusChanger: () => {},
  inputValue: "",
  setInputValue: () => {},
});

function ConditionalHeader() {
  const location = useLocation();

  return location.pathname === "/login" ||
    location.pathname === "/signUp" ? null : (
    <Header />
  );
}
function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const statusChanger = (id: string) => {
    setData(() => [
      ...data.map((item) =>
        item.title === id ? { ...item, isBookmarked: !item.isBookmarked } : item
      ),
    ]);
  };
  const [data, setData] = useState<Tdata>(info);
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
  return (
    <Context.Provider
      value={{
        userInfo,
        setUserInfo,
        eror,
        setEror,
        data,
        setData,
        statusChanger,
        inputValue,
        setInputValue,
      }}
    >
      <BrowserRouter>
        <ConditionalHeader />

        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="tvSeries" element={<TVSeries />} />
          <Route path="bookmarked" element={<Bookmarked />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

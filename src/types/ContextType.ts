import { Dispatch, SetStateAction } from "react";
import { TuserInfo } from "./User";
import { Teror } from "./Eror";
import { Tdata } from "./Data";
export interface TuserContext {
  userInfo: TuserInfo;
  setUserInfo: Dispatch<SetStateAction<TuserInfo>>;
  eror: Teror;
  setEror: Dispatch<SetStateAction<Teror>>;
  data: Tdata;
  setData: React.Dispatch<React.SetStateAction<Tdata>>;
  statusChanger: (id: string) => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
}

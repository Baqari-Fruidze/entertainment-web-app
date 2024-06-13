import { Dispatch, SetStateAction } from "react";
import { TuserInfo } from "./User";
import { Teror } from "./Eror";
export interface TuserContext {
  userInfo: TuserInfo;
  setUserInfo: Dispatch<SetStateAction<TuserInfo>>;
  eror: Teror;
  setEror: Dispatch<SetStateAction<Teror>>;
}

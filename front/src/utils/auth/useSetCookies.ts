import { rememberTokenState } from "@/stores/rememberToken";
import { useSetRecoilState } from "recoil";
import Cookies from "js-cookie";

// set cookie
const setToken = async (token: string | undefined) => {
  const setRememberToken = useSetRecoilState(rememberTokenState);
  setRememberToken(token);
};
// remember token setup and set cookie
// const setRememberToken = useSetRecoilState(rememberTokenState);
export const setRememberToken = async (token: string | undefined) => {
  await setToken(token ?? "");
  Cookies.set("rememberToken", token ?? "");
};

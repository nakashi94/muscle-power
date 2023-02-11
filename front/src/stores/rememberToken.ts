import { atom } from "recoil";

export const rememberTokenState = atom<string | null | undefined>({
  key: "rememberToken",
  default: "",
})

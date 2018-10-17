import fetch from "@/server";
import { Base64 } from "js-base64";

export const userLogin = (username, password) =>
  fetch("api/login", {
    userName: username,
    passWord: Base64.encode(password)
  });

export const userLogout = () => fetch("api/loginOut", {});

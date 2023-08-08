import CryptoJS from "crypto-js";
const secret = process.env.REACT_APP_SECRET;

export const readFromSession = () => {
  const encryptedSession = localStorage.getItem("session");
  if (!encryptedSession) return {};
  const decryptedSession = CryptoJS.AES.decrypt(
    encryptedSession,
    secret || ""
  ).toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedSession);
};

export const writeToSession = (newValue: string) => {
  const encryptedSession = CryptoJS.AES.encrypt(
    newValue,
    secret || ""
  ).toString();
  localStorage.setItem("session", encryptedSession);
};

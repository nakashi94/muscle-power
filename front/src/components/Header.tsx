import Link from "next/link";
import Router from "next/router";
import React, { memo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../config/firebase/firebaseInit";
import { provider } from "../config/firebase/auth-google-provider-create";

export const Header: React.FC = memo(() => {
  const onClickLoginButton = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        await Router.push("/mypage");
        toast.success("Login Successful!", {
          icon: "💪",
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <header className="bg-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">header</Link>
        </div>
        <button onClick={onClickLoginButton}>Log in</button>
      </div>
      <ToastContainer />
    </header>
  );
});

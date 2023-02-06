import Link from "next/link";
import Router from "next/router";
import React, { memo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Header: React.FC = memo(() => {
  const onClickLoginButton = () => {
    Router.push("/guest");
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

import Link from "next/link";
import Router from "next/router";
import React, { memo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../config/firebase/firebaseInit";
import { provider } from "../../config/firebase/auth-google-provider-create";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
import { rememberTokenState } from "@/stores/rememberToken";

// Modal.setAppElement("__next");

export const Header: React.FC = memo(() => {
  // remember token setup
  const setRememberToken = useSetRecoilState(rememberTokenState);

  // modal
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  // sign in function
  const onClickSignIn = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        setRememberToken(token);
        // The signed-in user info.
        // const user = result.user;
        // console.log(user);
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
    <header className="bg-gray-op sticky top-0 w-full h-16">
      <div className="container h-full px-8 mx-auto my-auto top-1/2">
        <div className="flex items-center justify-between h-full">
          <div className="text-2xl font-bold">
            <Link href="/" className="text-blues">
              GoriGori
            </Link>
          </div>
          <button
            onClick={openModal}
            className="bg-red-500 rounded px-2 py-1 outline-none border-none"
          >
            Log in
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="absolute top-1/2 left-1/2 right-auto bottom-auto translate-x-[-50%] translate-y-[-50%] bg-gray-800 p-16 rounded-3xl shadow-2xl"
            ariaHideApp={false}
            contentLabel="Login Modal"
          >
            <button onClick={closeModal} className="absolute top-4 right-4">
              <IoClose />
            </button>
            <h1 className="font-bold text-2xl mb-8">GoriGori</h1>
            <button
              onClick={onClickSignIn}
              className="outline-none border-none rounded bg-red-500 px-4 py-2"
            >
              Sign in with Google
            </button>
          </Modal>
        </div>
        <ToastContainer />
      </div>
    </header>
  );
});

import Link from "next/link";
import Router from "next/router";
import React, { memo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../config/firebase/firebaseInit";
import { provider } from "../config/firebase/auth-google-provider-create";
import Modal from "react-modal";

// Modal.setAppElement("__next");

export const Header: React.FC = memo(() => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModal = () => {
    setModalIsOpen(true);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1f2937",
    },
  };
  const onClickSignIn = () => {
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
        <button onClick={openModal}>Log in</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Login Modal"
        >
          <button onClick={closeModal}>close</button>
          <h1>App name</h1>
          <button onClick={onClickSignIn}>Sign in with Google</button>
        </Modal>
      </div>
      <ToastContainer />
    </header>
  );
});

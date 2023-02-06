import { Footer } from "@/components/Footer";
import { HeadTitle } from "@/components/HeadTitle";
import { Header } from "@/components/Header";
import React from "react";

export const Profile: React.FC = () => {
  return (
    <>
      <HeadTitle title={"profile"} />
      <Header />
      <div>
        <h1>profile</h1>
        <div>
          <div>
            <div>height</div>
            <div>160</div>
          </div>
          <div>
            <div>weight</div>
            <div>60</div>
            <input type="password" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

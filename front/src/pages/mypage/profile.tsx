import React from "react";

import { Footer, Header, HeadTitle } from "../../components/layouts";

export const Profile: React.FC = () => {
  return (
    <>
      <HeadTitle title={"profile | "} />
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

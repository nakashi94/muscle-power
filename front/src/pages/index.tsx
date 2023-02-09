import Image from "next/image";
import Router from "next/router";

import muscle from "../images/muscle-man-back.png";
import { Footer, Header, HeadTitle } from "../components/layouts";

export const Home = () => {
  const onClickRegister = () => {
    Router.push("/mypage");
  };
  return (
    <>
      <HeadTitle title={""} />
      <Header />
      <div className="py-4">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex items-center">
            <div className="basis-1/2 px-4">
              <h1 className="text-4xl font-bold mb-4">heading1</h1>
              <p className="mb-12">paragraph</p>
              <button
                onClick={onClickRegister}
                className="bg-red-500 rounded px-2 py-1 outline-none border-none"
              >
                register
              </button>
            </div>
            <div className="basis-1/2 px-4">
              <Image
                src={muscle}
                alt="images"
                width={740}
                height={480}
                priority={true}
                className="block mx-auto"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

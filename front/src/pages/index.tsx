import Image from "next/image";
import Router from "next/router";

import muscle from "../images/muscle-man-back.png";
import { Footer, Header, HeadTitle } from "../components/layouts";

export const Home = () => {
  const onClickRegister = () => {
    Router.push("/mypage");
  };
  // const getData = async () => {
  //   const data = await fetch("http://localhost:8000/api/foodlog");
  //   const food = await data.json();
  //   console.log(food);
  // };
  return (
    <>
      <HeadTitle title={""} />
      <Header />
      {/* <button onClick={getData}>get</button> */}
      <div className="py-4">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex items-center">
            <div className="basis-2/5 px-4">
              <h1 className="text-5xl font-bold my-8">ムキムキの先へ</h1>
              <p className="mb-16 text-sm">
                強靭な体を作るためのに必要な栄養素をマネジメントする
              </p>
              <button
                onClick={onClickRegister}
                className="bg-gray-800 w-full rounded px-2 py-1 mb-8 shadow-[8px_8px_16px_rgba(17,24,39,1.0),-8px_-8px_16px_rgba(55,65,81,1.0)] outline-none border-none hover:opacity-80"
              >
                register
              </button>
            </div>
            <div className="basis-3/5 px-4">
              <Image
                src={muscle}
                alt="images"
                width={800}
                height={520}
                priority={true}
                className="block mx-auto ml-12"
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

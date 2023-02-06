import Image from "next/image";

import muscle from "../images/muscle-man-back.jpg";
import { HeadTitle } from "../components/HeadTitle";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <HeadTitle title={""} />
      <Header />
      <div className="py-4">
        <div className="container max-w-screen-lg mx-auto px-4">
          <div className="flex items-center">
            <div className="basis-1/2">
              <h1>heading1</h1>
              <p>paragraph</p>
              <button>register</button>
            </div>
            <div className="basis-1/2">
              <Image
                src={muscle}
                alt="images"
                width={400}
                height={400}
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

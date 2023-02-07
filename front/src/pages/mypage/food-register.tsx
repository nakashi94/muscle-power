import { Footer, Header, HeadTitle } from "../../components/layouts";
import React from "react";

export const FoodRegister: React.FC = () => {
  return (
    <>
      <HeadTitle title={"food-register | "} />
      <Header />
      <div className="py-16">
        <div className="container max-w-screen-lg mx-auto px-4">
          <div>
            <h1 className="text-4xl pb-16">Registration of food logs</h1>
            <form
              action="#"
              method="post"
              name="register-food-logs"
              className="text-xl"
            >
              <div className="mb-8">
                <div className="mb-4">
                  <label htmlFor="food-name">what to eat</label>
                  <span className="text-red-400">*必須</span>
                </div>
                <input
                  type="text"
                  name="food-name"
                  id="food-name"
                  minLength={1}
                  maxLength={30}
                  autoFocus={false}
                  placeholder="what to eat?"
                  required={true}
                  className="block w-full bg-gray-600 rounded focus:border-none focus:outline-none px-4 py-2"
                />
              </div>
              <div>
                <div className="mb-4">
                  <label htmlFor="amount">amount</label>
                  <span className="text-red-400">*必須</span>
                </div>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  min={0}
                  placeholder="amount"
                  step={0.1}
                  autoFocus={false}
                  required={true}
                  className="block w-full bg-gray-600 rounded focus:border-none focus:outline-none px-4 py-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FoodRegister;
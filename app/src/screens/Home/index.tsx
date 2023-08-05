import React from "react";
import Navbar from "../../componets/navbar";

const Landing = () => {
  return (
    <>
      <Navbar />

      <main className=" bg-fuchsia-100">
        <div className="flex">
          <div className="main py-40 pl-9 justify-around ">
            <div className="text-3xl">
              Learning Tallwind with react and next js
            </div>
            <p className="w-1/2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              hic consequuntur ducimus numquam reprehenderit soluta vero minus,
              ratione.
            </p>
            <div className="buttons space-x-4 mt-4">
              <button className="text-sm bg-purple-900 px-4 py-1 rounded-2xl text-white hover:text-black hover:bg-white hover:border-2 hover:border-purple-900">
                Buy now
              </button>
              <button className="text-sm bg-purple-900 px-4 py-1 rounded-2xl text-white hover:text-black hover:bg-white hover:border-2 hover:border-purple-900">
                Explore
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="h-96 mr-96"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/35685/business-man-mobile-phone-clipart-md.png"
            />
          </div>
        </div>
      </main>
    </>
  );
};
export default Landing;

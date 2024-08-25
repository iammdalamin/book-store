import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <nav
        className="container mx-auto w-full h-[128px] bg-Primary py-7 border-none 
      rounded-[32px] ">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-6xl text-Text">Book Store</h1>
        </div>
      </nav>
    </>
  );
};

export default Header;

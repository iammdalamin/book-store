// components/Book.tsx
import React from "react";
import { Item } from "../utils/data";

interface BookProps {
  bookItem: Item;
}

const Book: React.FC<BookProps> = ({ bookItem }) => {
  return (
    <div className="cursor-pointer w-full  border-none py-4 px-3  rounded-[20px]  shadow-md flex flex-col bg-Secondary ">
      <h3 className="text-lg font-semibold mb-2">{bookItem.title}</h3>
      <div className="text-sm">
        <p className="text-sm">Author: {bookItem.author}</p>
        <p className="text-sm">Price: ${bookItem.price.toFixed(2)}</p>
        <p className="text-xs">Published on: {bookItem.date.toDateString()}</p>
      </div>
      <div className="tags mt-5">
        <hr className="w-full bg-Text mb-2"></hr>

        {bookItem.tags.map((tag, index) => (
          <span
            key={index}
            className="transition duration-300 ease-in-out cursor-pointer bg-Text text-black hover:bg-Secondary hover:text-white rounded-full px-2 py-2 text-xs mr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Book;

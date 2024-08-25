"use client";

import React, { useState } from "react";
import { Item, bookData } from "../utils/data";
import Book from "./Book";
import SortField from "./SortField";

const BooksField: React.FC = () => {
  const [sortedBooks, setSortedBooks] = useState<Item[]>(bookData);

  const handleSortChange = (newSortedBooks: Item[]) => {
    setSortedBooks(newSortedBooks);
  };

  return (
    <>
      <SortField onSortChange={handleSortChange} />

      <div className="container w-full h-full py-4 mx-auto bg-Primary border-none rounded-[32px] flex flex-col gap-4 px-5 ">
        <div className="flex flex-wrap p-5 gap-5 justify-between ">
          {sortedBooks.map((bookItem: Item, Index: number) => (
            <Book key={Index} bookItem={bookItem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksField;

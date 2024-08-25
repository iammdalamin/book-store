import React, { useState } from "react";
import Book from "./Book";
import { sampleData, Item } from "../utils/data";

const BookList: React.FC = () => {
  const [sortOption, setSortOption] = useState<string>("price");
  const [filterTag, setFilterTag] = useState<string>("");

  // Sorting function
  const sortedBooks = [...sampleData].sort((a, b) => {
    if (sortOption === "price") {
      return a.price - b.price;
    } else if (sortOption === "author") {
      return a.author.localeCompare(b.author);
    } else if (sortOption === "date") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return 0;
  });

  // Filter by tag
  const filteredBooks = sortedBooks.filter((book) =>
    filterTag ? book.tags.includes(filterTag) : true,
  );

  const total = filteredBooks.reduce((acc, book) => acc + book.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Store</h1>

      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded p-1">
          <option value="price">Price</option>
          <option value="author">Author</option>
          <option value="date">Publication Date</option>
        </select>

        <label className="ml-4 mr-2">Filter by Tag:</label>
        <select
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
          className="border rounded p-1">
          <option value="">All</option>
          <option value="Climate change">Climate change</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="History">History</option>
          <option value="Technology">Technology</option>
          <option value="Biochemistry">Biochemistry</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map((bookItem) => (
          <Book key={bookItem.id} bookItem={bookItem} />
        ))}
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold">TOTAL: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default BookList;





transition-transform duration-500 transform hover:scale-105
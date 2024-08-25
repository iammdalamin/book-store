"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { bookData, Item } from "../utils/data";

interface SortFieldProps {
  onSortChange: (sortedBooks: Item[]) => void;
}

const SortField: React.FC<SortFieldProps> = ({ onSortChange }) => {
  const [sortOption, setSortOption] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<boolean>(false);
  const [tagsDrop, setTagsDrop] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const dropdownRef = useRef<HTMLUListElement>(null);

  const sortedBooks = useMemo(() => {
    return [...bookData]
      .filter((book) => {
        return (
          selectedTags.size === 0 ||
          book.tags.some((tag) => selectedTags.has(tag))
        );
      })
      .sort((a, b) => {
        if (sortOption === "price") {
          return sortOrder ? a.price - b.price : b.price - a.price;
        } else if (sortOption === "author") {
          return sortOrder
            ? a.author.localeCompare(b.author)
            : b.author.localeCompare(a.author);
        } else if (sortOption === "date") {
          return sortOrder
            ? new Date(a.date).getTime() - new Date(b.date).getTime()
            : new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return 0;
      });
  }, [selectedTags, sortOption, sortOrder]);

  useEffect(() => {
    if (typeof onSortChange === "function") {
      onSortChange(sortedBooks);
    } else {
      console.error("onSortChange is not a function", onSortChange);
    }
  }, [sortedBooks, onSortChange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setTagsDrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const newTags = new Set(prev);
      if (newTags.has(tag)) {
        newTags.delete(tag);
        setTagsDrop(true);
      } else {
        newTags.add(tag);
        setTagsDrop(true);
      }
      return newTags;
    });
  };

  const handleSort = (option: string) => {
    if (sortOption === option) {
      setSortOrder((prev) => !prev);
    } else {
      setSortOption(option);
      setSortOrder(false);
    }
  };

  return (
    <>
      <div className="container w-full h-full py-4 mx-auto bg-Primary border-none rounded-[32px] flex justify-between px-5">
        <div>
          <ul className="flex gap-6 text-[12px]">
            <li className="cursor-pointer" onClick={() => handleSort("price")}>
              <span className="flex">
                Price
                {sortOption === "price" ? (
                  sortOrder ? (
                    <FaArrowDownLong size={14} />
                  ) : (
                    <FaArrowUpLong size={14} />
                  )
                ) : (
                  <>
                    <FaArrowUpLong size={14} className="text-gray-400" />
                  </>
                )}
              </span>
            </li>
            <li className="cursor-pointer" onClick={() => handleSort("author")}>
              <span className="flex">
                Author
                {sortOption === "author" ? (
                  sortOrder ? (
                    <FaArrowDownLong size={14} />
                  ) : (
                    <FaArrowUpLong size={14} />
                  )
                ) : (
                  <>
                    <FaArrowUpLong size={14} className="text-gray-400" />
                  </>
                )}
              </span>
            </li>
            <li className="cursor-pointer" onClick={() => handleSort("date")}>
              <span className="flex">
                Date
                {sortOption === "date" ? (
                  sortOrder ? (
                    <FaArrowDownLong size={14} />
                  ) : (
                    <FaArrowUpLong size={14} />
                  )
                ) : (
                  <>
                    <FaArrowUpLong size={14} className="text-gray-400" />
                  </>
                )}
              </span>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 text-[12px]">
          <div
            className="cursor-pointer relative"
            onClick={() => setTagsDrop(!tagsDrop)}>
            <span className="flex font-bold">
              Tags
              <IoMdArrowDropdown className="text-lg" />
            </span>
            <ul
              ref={dropdownRef}
              className={`absolute bg-Secondary text-Text p-5 rounded-[32px] z-10 transition-all duration-300 ease-in-out w-[220px] flex flex-wrap justify-center items-center gap-2 ${
                tagsDrop ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}>
              {Array.from(new Set(bookData.flatMap((item) => item.tags))).map(
                (tag, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer transition duration-300 ease-in-out   hover:bg-gray-200 hover:text-black p-1 rounded-md ${
                      selectedTags.has(tag)
                        ? "rounded-[32px] bg-Text  text-black"
                        : ""
                    }`}
                    onClick={() => toggleTag(tag)}>
                    {tag}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="flex gap-1">
            <p
              className="cursor-pointer"
              onClick={() => setSelectedTags(new Set())}>
              Reset
            </p>
            <p>Rules</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortField;

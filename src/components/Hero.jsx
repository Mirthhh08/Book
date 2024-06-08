import React, { useContext, useState, useCallback } from "react";

import { debounce } from "lodash";

import { BookContext } from "../context/BookContext";
const Hero = () => {
  const { searchBooks } = useContext(BookContext);
  const [query, setQuery] = useState("");

  console.log(query);

  const debouncedSearch = useCallback(
    
    debounce((query) => {
      searchBooks(query);
    }, 1000),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-10">
      <p className="md:text-4xl text-2xl font-normal tracking-wider xl:mx-0 md:mx-10 mx-2 mt-5 md:mt-10">
        You can open any door you want - just find the{" "}
        <span className=" underline decoration-red-600 ">right</span> book
      </p>

      <input
        placeholder="Enter the name of the book"
        type="text"
        onChange={handleChange}
        className="sm:w-[450px] w-[230px] p-2 border-2 border-gray-400 rounded outline-none sm:text-xl"
      />
    </div>
  );
};

export default Hero;

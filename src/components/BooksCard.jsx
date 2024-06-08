import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const BooksCard = (props) => {
  const { title, img, author, handler, text } = props;
  const { addToBookShelf, removeFromBookShelf } = useContext(BookContext);
  return (
    <div className="w-[180px]  lg:w-[250px]  mb-5 text-sm ">
      <div>
        <div className="">
          <img
            src={img}
            className="h-[300px] w-[180px]  lg:w-[250px] lg:h-[400px]"
          />
        </div>
        <p className="my-2 font-medium break-words text-md xl:text-lg  ">
          {title}
        </p>
        <p className="my-2  break-words text-md xl:text-lg  ">
          by: {author[0]}
        </p>
      </div>
      <button
        className="px-2 py-1 rounded-md bg-gray-800 text-white"
        onClick={() =>
          text == "add" ? addToBookShelf(props) : removeFromBookShelf(props)
        }
      >
        {text == "add" ? "Add to Shelf" : "Remove"}
      </button>
    </div>
  );
};

export default BooksCard;

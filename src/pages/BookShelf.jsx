import React, { useContext } from "react";
import BooksCard from "../components/BooksCard";
import { BookContext } from "../context/BookContext";
const BookShelf = () => {
  const { removeFromBookShelf, bookShelf } = useContext(BookContext);

  return (
    <div className="mt-10">
      <p className="text-2xl font-semibold tracking-wider">
        Personal Bookshelf{" "}
      </p>

      {bookShelf.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10 gap-4 h-[300px]">
          <p className="tracking-wider text-xl font-semibold">
            Shelf is empty :/
          </p>

          <p className="px-2 py-1 bg-black text-white rounded-lg">Add Books</p>
        </div>
      ) : (
        <div className="mt-10 flex justify-center items-center gap-8 flex-wrap">
          {bookShelf.map((book) => {
            return (
              <BooksCard
                key={book.id}
                id={book.id}
                title={book.title}
                img={book.img}
                author={book.author}
                edition={book.edition_count}
                publishYear={book.publish_year}
                handler={removeFromBookShelf}
                text="remove"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookShelf;

import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import coverImg from "../assets/cover_unavailable.png";
import BooksCard from "./BooksCard";
import BookCardSkelleton from "./BookCardSkelleton";
const DisplayBooks = () => {
  const { books, loader, searchResultTitle } = useContext(BookContext);

  const booksWithCovers = books.map((book) => {
    return {
      ...book,
      id: book.id.replace("/works/", ""),
      cover_img: book.cover_id
        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
        : coverImg,
    };
  });
  console.log(booksWithCovers);

  return (
    <div className="">
        <p>{searchResultTitle}</p>
      {loader ? (
        <div className="mt-10 flex justify-center items-center gap-8 flex-wrap">
          {Array.from(new Array(10)).map((item, idx) => (
            <BookCardSkelleton key={idx} />
          ))}
        </div>
      ) : (
        booksWithCovers && (
          <div className="mt-10 flex justify-center items-center gap-8 flex-wrap">
            
            {booksWithCovers.map((book) => {
              return (
                <BooksCard
                  id={book.id}
                  key={book.id}
                  title={book.title}
                  img={book.cover_img}
                  author={book.author}
                  text="add"
                />
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default DisplayBooks;

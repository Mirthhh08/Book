import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(null);
  const [searchResultTitle, setSearchResultTitle] = useState("");
  const addNotify = () => {
    toast.success("📕 Book Added to Shelf!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const noBookFound = () => {
    toast.success("📕 No Books Found!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const alreadyExistNotify = () => {
    toast.error("❌ Book Already Exist!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const removeNotify = () => {
    toast.success("📕 Book Removed from Shelf!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [bookShelf, setBookShelf] = useState(() => {
    return localStorage.getItem("personalBookshelf")
      ? JSON.parse(localStorage.getItem("personalBookshelf"))
      : [];
  });

  const addToBookShelf = (book) => {
    if (bookShelf.some((b) => b.id === book.id)) {
      alreadyExistNotify();
      return;
    }
    setBookShelf((perv) => {
      const updatedBookShelf = [...perv, book];
      localStorage.setItem(
        "personalBookshelf",
        JSON.stringify(updatedBookShelf)
      );
      return updatedBookShelf;
    });
    addNotify();
  };

  const removeFromBookShelf = (book) => {
    setBookShelf((perv) => {
      const updatedBookShelf = perv.filter((b) => b.id != book.id);
      localStorage.setItem(
        "personalBookshelf",
        JSON.stringify(updatedBookShelf)
      );
      return updatedBookShelf;
    });

    removeNotify();
  };

  const searchBooks = async (query) => {
    if (query.length < 1) {
      toast.info("Please Enter Something", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setBooks([]);
      return;
    }
    try {
      setLoader(true);
      const searchRes = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      ).then((data) => data.json());

      const { docs } = searchRes;

      if (docs) {
        const newBooks = docs.map((book) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = book;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setBooks(newBooks);

        if (newBooks.length === 0) {
          noBookFound();
        }
      }

      setLoader(false);
    } catch (err) {
      console.error(err);
      setLoader(false);
    }
  };

  const contextValue = {
    searchBooks,
    addToBookShelf,
    removeFromBookShelf,
    books,
    bookShelf,
    loader,
    searchResultTitle,
  };

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};

export default BookProvider;

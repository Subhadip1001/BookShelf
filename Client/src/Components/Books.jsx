import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";
import axios from "axios";

function Books() {
  const[books, setBooks] = useState([]);
  useEffect(()=>{
    const getBooks = async ()=>{
      try {
        const res = await axios.get("http://localhost:4001/books");
        setBooks(res.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    getBooks();
  },[])
  return (
  <>
    <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <br />
        <br />
        <br />
        <br />
        <div className="items-center justify-center text-center dark:bg-slate-900 dark:text-white">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here!</span>
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti repellendus veniam, ab, dolores iure illum labore possimus architecto sint placeat, optio ducimus vitae alias harum magnam fugiat asperiores est dolorum facilis quaerat. Dolore est doloremque aut laudantium tempora accusamus ad sit iusto. Aliquam similique impedit, eveniet quo facilis optio!</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
          {
            books.map((item=>
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Books

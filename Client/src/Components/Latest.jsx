import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function Latest() {
  const[books, setBooks] = useState([]);
  useEffect(()=>{
    const getBooks = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/books");
        const result = res.data.filter((data) => {return data.new === true});
        setBooks(result);
      } catch (error) {
        console.log("Error : ", error);
      }
    }
    getBooks();
  },[])
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    // console.log(filterData);
    
    return <>
    <div className ="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
      <h1 className="font-semibold text-xl pb-2"> New Books</h1>
      <p>In this section, you will find a wide variety of the latest books, both free and paid, across different genres. Whether you're seeking fiction, non-fiction, or educational materials, explore this curated selection to discover new releases and timeless classics that cater to your reading preferences.</p>
      </div>
    <div className="mt-5 mb-5">
      <Slider {...settings}>
        {
          books.map((item=>{
            return <Cards item={item} key={item._id}/>
          }))
        }
      </Slider>
    </div>
    </div>
    </>
}

export default Latest;


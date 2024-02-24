import Delete from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import Card from "../Card";
// import Carousel from '../components/Carousel'
import Footer from "../Footer";
import Navbar from "../Navbar";

const getUniqueCategories = (items) => {
  const categories = items.map((item) => item.CategoryName);
  return [...new Set(categories)];
};

export default function Home() {
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState("");
  const foodItemsByCategory = foodItems.reduce((acc, item) => {
    if (!acc[item.CategoryName]) {
      acc[item.CategoryName] = [];
    }
    acc[item.CategoryName].push(item);
    return acc;
  }, {});

  const loadFoodItems = async () => {
    let response = await fetch("http://localhost:5000/api/auth/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItems(response[0]);
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id='carouselExampleFade'
          className='carousel slide carousel-fade '
          data-bs-ride='carousel'
        >
          <div className='carousel-inner ' id='carousel'>
            <div className=' carousel-caption  ' style={{ zIndex: "9" }}>
              <div className=' d-flex justify-content-center'>
                <input
                  className='form-control me-2 w-75 bg-dark text-white'
                  type='search'
                  placeholder='Search in here...'
                  aria-label='Search'
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  className='btn text-white bg-danger h-25'
                  onClick={() => {
                    setSearch("");
                  }}
                >
                  <Delete />
                </button>
              </div>
            </div>
            <div className='carousel-item active'>
              <img
                src='https://source.unsplash.com/random/900x700/?burger'
                className='d-block w-100  '
                style={{ filter: "brightness(30%)" }}
                alt='...'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://source.unsplash.com/random/900x700/?pastry'
                className='d-block w-100 '
                style={{ filter: "brightness(30%)" }}
                alt='...'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://source.unsplash.com/random/900x700/?barbeque'
                className='d-block w-100 '
                style={{ filter: "brightness(30%)" }}
                alt='...'
              />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleFade'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleFade'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      {/* logic to reflect food item in */}
      <div className='container'>
        {getUniqueCategories(foodItems).map((category) => (
          <div className='row mb-3'>
            <div key={category} className='fs-3 m-3'>
              {category}
            </div>
            <hr
              id='hr-success'
              style={{
                height: "4px",
                backgroundImage:
                  "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))",
              }}
            />
            {foodItemsByCategory[category]
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <div key={item.id} className='col-12 col-md-6 col-lg-3'>
                  <Card
                    foodName={item.name}
                    item={item}
                    options={item.options[0]}
                    ImgSrc={item.img}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

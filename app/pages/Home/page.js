"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { LiaRetweetSolid } from "react-icons/lia";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
const Homepage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/image/homeSlider1.png",
    "/image/homeSlider2.jpeg",
    "/image/homeSlider1.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore.",
      name: "Ema Watson",
      date: "Monday, July 28, 2023",
      image: "/image/Specialty10.png"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore.",
      name: "John Doe",
      date: "Friday, August 15, 2023",
      image: "/image/Specialty11.png"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore.",
      name: "John Doe",
      date: "Friday, August 15, 2023",
      image: "/image/Specialty12.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [reviews.length]);

  return (
    <div className="homepage">
      <div className="homepage-container">
        <div className="slider">
          <div
            className="slider-images"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }} // Inline style to handle sliding
          >
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Slide ${index}`} />
            ))}
          </div>
          <div className="slider-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="home-new-arrivals">
        <div className="home-new-arrivals-head">
          <h2>New Arrivals</h2>
        </div>
        <div className="home-new-arrivals-content">
          <div className="new-arrivals-border1">
            <div className="new-arrivals-border2">
              <div className="image-container">
                <Link href='/pages/ClothShop'>
                <img src="/image/newArrival1.jpeg" alt="Kurta" />
                <div className="hover-text">Kurta</div>
                </Link>
              
              </div>
              <div className="image-container">
              <Link href='/pages/JewelleryShop'>
                <img src="/image/newArrival2.jpeg" alt="Bangles" />
                <div className="hover-text">Bangles</div>
                </Link>
              </div>
              <div className="image-container">
              <Link href='/pages/ClothShop'>
                <img src="/image/newArrival3.jpeg" alt="Kurta" />
                <div className="hover-text">Kurta</div>
                </Link>
              </div>
              <div className="image-container">
                  <Link href='/pages/JewelleryShop'>
                <img src="/image/newArrival4.jpeg" alt="Bridal Sets" />
                <div className="hover-text">Bridal Sets</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-featured">
        <div className="home-featured-head">
          <h2>Featured Collection</h2>
          <p>Add featured products to weekly lineup</p>
        </div>
        <div className="home-featured-content">
          <div className="home-featured-img img1">
            <div className="home-featured-border border1"></div>
            <div className="featured-img img1">
              <div className="featured-content right">
                <p>Beautiful</p>
                <h2>Wedding Sets</h2>
                <Link href="/pages/ClothShop">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="home-featured-img img2">
            <div className="home-featured-border border2"></div>
            <div className="featured-img img2">
              <div className="featured-content left">
                <p>New Arrivals</p>
                <h2>Wedding Sets</h2>
                <Link href="/pages/JewelleryShop">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="home-featured-img img3">
            <div className="home-featured-border border3"></div>
            <div className="featured-img img3">
              <div className="featured-content right">
                <p>New Arrivals</p>
                <h2>Wedding Sets</h2>
                <Link href="/pages/JewelleryShop">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="home-featured-img img4">
            <div className="home-featured-border border4"></div>
            <div className="featured-img img4">
              <div className="featured-content left">
                <p>New Design</p>
                <h2>Wedding Sets</h2>
                <Link href="/pages/ClothShop">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-specialty">
        <div className="home-specialty-container">
          <div className="home-specialty-head">
            <h2>Our Specialty - South Indian</h2>
          </div>
          <div className="home-specialty-content">
            <div className="home-specialty-img">
              <img src="/image/Specialty1.png" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/Specialty2.png" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/Specialty3.png" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/Specialty4.png" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/Specialty5.jpeg" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/Specialty6.jpeg" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/Specialty7.jpeg" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/Specialty8.jpeg" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/Specialty9.png" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/Specialty10.png" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/Specialty11.png" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
            <div className="home-specialty-img">
              <img src="/image/Specialty12.png" alt="" />
              <div className="specialy-img-content">
                <p className="para">Demo Product Name</p>
                <span>$500</span>
                <Link href='/pages/Cart'><div className="specialy-img-content">
                 <p>Add to Cart</p>
                 <IoCartOutline/>
                </div></Link>
              </div>
            </div>
          </div>
          <div className="home-specialty-two-img">
  <div className="specialty-content">
     
  </div>
  <div className="specialty-content">
    <div className="content-overlay">
      <h2>Exclusive Offer</h2>
      <span>Up to 50% off</span>
      <p>Discover our premium products today.</p>
      <Link href="/pages/OrderPage" className="shop-now-btn">Shop Now</Link>
    </div>
  </div>
</div>

        </div>
      </div>
      <div className="home-store">
        <div className="home-store-container">
          <div className="home-store-bg-img">
            <div className="home-store-bg-img-contents">
            <div className="home-store-bg-img-head">
            <h2>Visit Our Store</h2>
            </div>
            <div className="home-store-bg-img-content">
              <p>Rains HQ, Jens Olsens Vej 13 ,8200 AarhusN, Denmark</p>
              <div className="store-timing">
                <p>Mon - Fri, 8:30am - 10:30pm</p>
                <p>Saturday, 8:30am - 10:30pm</p>
                <p>Sunday Closed</p>
              </div>
            </div>
            </div>
          </div>
          <div className="home-store-img">
            <img src="/image/OurStore.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="home-review">
      <div className="home-review-container">
        <div className="review-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {reviews.map((review, index) => (
            <div key={index} className="review-container">
              <div className="review-content">
                <div className="review-content-img">
                  <img src="/image/review.png" alt="Review Image" />
                </div>
                <BiSolidQuoteAltLeft />
                <div className="review-text">
                  <p>{review.text}</p>
                </div>
                <div className="review-name">
                  <p>{review.name}</p>
                  <span>{review.date}</span>
                </div>
              </div>
              <div className="review-image">
                <img src={review.image} alt="Reviewer Image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="home-orders">
      <div className="home-order-container">
        <div className="home-order-contents">
        <div className="home-order-cotent">
          <MdOutlineLocalShipping/>
          <p>Free Shipping</p>
        </div>
        {/* <div className="home-order-cotent">
          <GiReturnArrow/>
          <p>Returns</p>
        </div> */}
        <div className="home-order-cotent">
          <RiSecurePaymentLine/>
          <p>Secure Payments</p>
        </div>
        <div className="home-order-cotent">
          <RiCustomerServiceFill/>
          <p>Customer Support</p>
        </div>
        </div>
      </div>
    </div>
    <div className="home-logos">
      <div className="home-logo-content">

    
      <div className="logo-border"></div>
      <div className="home-logo-container">

        <img src="/image/logo1.png" alt="" />
        <img src="/image/logo2.png" alt="" />
         <img src="/image/logo3.png" alt="" />
         <img src="/image/logo4.png" alt="" />
         <img src="/image/logo5.png" alt="" />
      </div>
      <div className="logo-border"></div>
    </div>
    </div>
    </div>
  );
};

export default Homepage;

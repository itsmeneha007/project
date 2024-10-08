import React, { useState, useEffect } from 'react';
import './Middle.css'; 

const Middle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/23/original-SeptBAU_SkinMedica_Skinstore_HPbanner_1180x450-155223.png",
    "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/01/original-Skinstore_DisruptorBanners_1180x450-163601.jpg",
    "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/43/original-Frame_4-171843.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="image">
      <main id="hero">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </main>
      <div className="A">
        <button onClick={goToPrevious}>&lt;</button>
        <button onClick={goToNext}>&gt;</button>
      </div>

      <Brands />
    </section>
  );
};

const Brands = () => {
  return (
          
    <div id="image-2">
      <div class="heading"><h3>Shop by top Brands or DermStore</h3></div>
      <div class="first">
      <img 
        src="https://static.thcdn.com/images/small/webp/widgets/121-us/35/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T124331.760-164335.png" 
        alt="Brand 1" 
      />
      <img 
        src="https://static.thcdn.com/images/small/webp/widgets/121-us/04/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T124159.974-164204.png" 
        alt="Brand 2" 
      />
      <img 
        src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T123911.716-163923.png" 
        alt="Brand 3" 
      />
      <img 
        src="https://static.thcdn.com/images/small/webp/widgets/121-us/01/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T123751.910-163801.png" 
        alt="Brand 4" 
      />
      <img 
        src="https://static.thcdn.com/images/small/webp/widgets/121-us/24/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T123820.680-163824.png" 
        alt="Brand 5" 
      />
      <img 
        src="https://static.thcdn.com/images/small/webp/widgets/121-us/52/original-SkinStore_Widgets_-_Untitled_Page_-_2024-08-30T123847.252-163852.png" 
        alt="Brand 6" 
      />
      </div>
      <ImageSlider/>
    </div>
  );
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/27/original-HP-Disruptor-Skinstore-1644x244-Shop-140927.png',
    'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/32/original-HP-Disruptor-DS-1640x244_%281%29-135332.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="part-2">
      <div className="B">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <div className="c">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>
      <Part3/>
    </div>
  );
};



const Part3 = () => {
  return (
    <div id="part-3">
      <div className="single-image">
        <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/40/original-original-LoyaltyAccountPage_1920x511-074248-203740.jpg" alt="Trending Now" />
      </div>
      <h3>Trending Now at Dermstore</h3>

      <div className="D">
        <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/55/original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T103540.064-143555.png" alt="" />
        <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/29/original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T100843.816-140929.png" alt="" />
        <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T093952.369-134017.png" alt="" />
        <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/53/original-SkinStore_Widgets_-_Untitled_Page_-_2024-09-11T103145.078-143153.png" alt="" />
        <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/29/original-SkinStore_Widgets_-_Untitled_Page_-_2024-10-01T091511.573-131629.png" alt="" />
      </div>
      <div class="z">
      <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/17/original-OctBAU_Earn20_disrupter_1640x244-193317.png" alt="" />
      </div>

      

      <div className="E">
        <h4>15% of The Ordinary</h4>
        <h4>up to 50% of</h4>
        <h4>Buy One Get One</h4>
      </div>

      <div id="F">
        {products.map((product, index) => (
          <div key={index} className={`product ${index + 1}`}>
            <img src={product.img} alt={product.title} />
            <p>{product.title}</p>
            <button>{product.discountText}</button>
            <p>{product.price}</p>
            <button>QUICK BUY</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const products = [
  {
    img: "https://static.thcdn.com/images/small/webp//productimg/original/11363397-5014901836942401.jpg",
    title: "The Ordinary Lactic Acid 5% + HA 2% Superficial Peeling Formulation 20ML",
    discountText: "15% off with code: SS15",
    price: "$8.10"
  },
  {
    img: "https://static.thcdn.com/images/small/webp//productimg/original/11638499-2075023393634280.jpg",
    title: "The Ordinary EUK 134 Serum 0.1% 30ml",
    discountText: "15% off with code: SS15",
    price: "$11.50"
  },
  {
    img: "https://static.thcdn.com/images/small/webp//productimg/original/11416763-1684901837113227.jpg",
    title: "The Ordinary 100% Cold Pressed Virgin Marula Oil 30ml",
    discountText: "15% off with code: SS15",
    price: "$11.40"
  },
  {
    img: "https://static.thcdn.com/images/small/webp//productimg/original/11416763-1684901837113227.jpg",
    title: "The Ordinary 100% Plant Derived Squalane 30ml",
    discountText: "15% off with code: SS15",
    price: "$10.40"
  }
];










export default Middle;
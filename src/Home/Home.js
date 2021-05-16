import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/products");
    // .then((response) => response.json())
    //   .then((data) => setProduct(data.products));
    // console.log("this is ",product);
  }, [product]);

  return (
    <div className="home">
      {/* The background prime video banner */}
      <div className="home__container">
        <img
          className="home__image"
          src="https://llounge.in/wp-content/uploads/2020/11/IN_r1307_r1306_Marketing_Page_L_FFH-1500_01._CB419228453_.jpg"
          alt="Banner"
        />
        <div className="home__row">
          <Product
            id="1"
            title="New Apple iPhone 12 (128GB) - White"
            price={81900}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000"
            rating={5}
          />
          <Product
            id="2"
            title="New Apple iPhone 12 pro (128GB) - Gold"
            price={58000}
            image="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_260,w_260/v1605202304/Croma%20Assets/Communication/Mobiles/Images/8952382717982.png"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="New Apple iPhone SE (64GB) - White"
            price={25000}
            image="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_350,w_350/v1605338373/Croma%20Assets/Communication/Mobiles/Images/8943053111326.png"
            rating={4}
          />
          <Product
            id="4"
            title="New Apple iPhone 11 (128GB) - Jet Black"
            price={38000}
            image="https://t.infibeam.com/img/othe/0441617/f7/50/iphone11b2.jpg.47e0aef750.989x250x250.jpg"
            rating={2}
          />
          <Product
            id="5"
            title="New Apple iPhone XR (128GB) - Blue"
            price={40000}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwDCKm9TcOiSOh11oA3kXboV1LGyNnwWWTw&usqp=CAU"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="iPhone 12"
            price={79000}
            image="https://finc.b-cdn.net/itech/products/iphone-12a.jpg?width=600"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

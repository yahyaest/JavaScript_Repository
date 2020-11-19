import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMwebp_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          key={1}
          id="1"
          title="PlayStation 4 Console - 1TB Slim Edition"
          price={389}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/715RBdgZtHL._SL1500_.jpg"
        />

        <Product
          key={2}
          id="2"
          title="Omen by HP Obelisk Gaming Desktop Computer, i9-9900K, NVIDIA GeForce RTX 2080 SUPER 8 GB, 32 GB RAM, 1 TB SSD, (875-1023, Black)"
          price={3299}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71qplGttd5L._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          key={3}
          id="3"
          title="Samsung Galaxy S20 5G| Fingerprint ID and Facial Recognition | Cosmic Gray"
          price={999.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71h1NfW14xL._AC_SL1500_.jpg"
        />
        <Product
          key={4}
          id="4"
          title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
          price={198.65}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
        />
        <Product
          key={5}
          id="5"
          title="Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card | 1080p Resolution | HDMI |"
          price={592}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61445UADu9L._AC_SL1000_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          key={6}
          id="6"
          title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
          price={278.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;

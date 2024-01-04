import React from "react";
import Hero from "../components/Hero";
import Favorites from "../components/Favorites";
import Trending from "../components/Trending";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <Hero />
      <main>
        <Favorites />
        <Banner
          title="Start With Design"
          des="EliteDecor products are all crafted to standard sizes, allowing you the
                flexibility to mix and match them effortlessly."
          img="https://www.mandicasa.com/wp-content/uploads/2023/08/collection-diamond.jpg"
        />
        <Trending />
        <Banner
          title="Build A Dream"
          des="EliteDecor items are manufactured in standardized sizes, providing you with the freedom to effortlessly mix and match them according to your preferences."
          img="https://image.made-in-china.com/2f0j00TUJoLHRrhykK/White-Luxury-Kitchen-Design-High-End-Lacquer-Finish-Modern-Kitchen-Cabinets.jpg"
        />
      </main>
    </>
  );
}

export default Home;

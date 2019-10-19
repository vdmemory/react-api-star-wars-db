import React from "react";
import Crawl from "react-star-wars-crawl";

// Import the necessary styles, or include them another way with your build process
import "react-star-wars-crawl/lib/index.css";

export default function CrawlComp() {
  return (
    <Crawl
      style={{ height: "100px" }}
      title="Episode IV"
      subTitle="A New Hope"
      text="It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…"
    />
  );
}

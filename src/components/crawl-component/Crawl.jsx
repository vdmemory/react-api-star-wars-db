import React from "react";
import PropTypes from "prop-types";

import "./crawl.css";

export default function Crawl({
  audioOgg,
  audioMp3,
  fade,
  crawlLogo,
  textOne,
  textTwo,
  textThree
}) {
  return (
    <div className="crawl-container d-flex">
      <audio autoPlay>
        <source src={audioOgg} type="audio/ogg" />
        <source src={audioMp3} type="audio/mpeg" />
      </audio>
      <div className="stars">
        <p className="fade-in">{fade}</p>
        <p className="fade-in-logo">
          <img className="logo" src={crawlLogo} alt="logo" />
        </p>
        <div className="crawl">
          <div className="crawlcontent">
            <p>{textOne}</p>
            <br />
            <br />
            <p>{textTwo}</p>
            <br />
            <br />
            <p>{textThree}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
Crawl.defaultProps = {
  audioOgg: "https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg",
  audioMp3: "https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3",
  crawlLogo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/2000px-Star_Wars_Yellow_Logo.svg.png",
  fade: "A long time ago in a galaxy far, far away...",
  textOne:
    "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
  textTwo:
    "During the battle, rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.",
  textThree:
    "Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy...."
};
Crawl.propTypes = {
  audioOgg: PropTypes.string,
  audioMp3: PropTypes.string,
  fade: PropTypes.string,
  crawlLogo: PropTypes.string,
  textOne: PropTypes.string,
  textTwo: PropTypes.string,
  textThree: PropTypes.string
};

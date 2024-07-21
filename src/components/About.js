import React from "react";
import Aboutimg from "../images/Mario and Adrian A.jpg";
import Aboutimg2 from "../images/Mario and Adrian b.jpg";
import "../App.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-txt">
        <h2>Little lemon</h2>
        <h3>Chicago</h3>
        <p>
        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. Their journey began with a passion for culinary arts and a deep appreciation for their Italian heritage.

Mario, the culinary mastermind behind Little Lemon, brings a wealth of experience from his years as a chef in Italy. He meticulously crafts the menu using cherished family recipes, ensuring each dish embodies the authentic flavors of the Mediterranean. His dedication to quality and innovation shines through in every bite, offering a delightful fusion of tradition and creativity.

Adrian, on the other hand, is the visionary marketer who has been instrumental in shaping the restaurant's identity and reach. His efforts have not only brought the essence of classic Italian cuisine to Little Lemon but have also expanded the menu to include a diverse array of Mediterranean dishes. Adrian's strategic approach to marketing and his commitment to excellence have positioned Little Lemon as a beloved dining destination in Chicago.

Together, Mario and Adrian have created a warm and inviting space where guests can enjoy a unique blend of traditional and contemporary Mediterranean flavors. Their shared dream and complementary skills have made Little Lemon a culinary gem, celebrating the rich and varied tastes of the Mediterranean region.
        </p>
      </div>
      <div className="about-img">
        <div className="img1">
          <img src={Aboutimg} alt="Mario" />
        </div>
        <div className="img2">
          <img src={Aboutimg2} alt="Mario2" />
        </div>
      </div>
    </div>
  );
};

export default About;

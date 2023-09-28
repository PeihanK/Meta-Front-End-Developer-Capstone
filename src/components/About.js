import Aboutimg from "../images/Mario and Adrian A.jpg";
import Aboutimg2 from "../images/Mario and Adrian b.jpg";
const About = () => {
  return (
    <div className="about-section">
      <div className="about-txt">
        <h2>Little lemon</h2>
        <h3>Chicago</h3>

        <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant. To craft the menu, Mario relies on family recipes and his
          experience as a chef in Italy. Adrian does all the marketing for the
          restaurant and led the effort to expand the menu beyond classic
          Italian to incorporate additional cuisines from the Mediterranean
          region.
        </p>
      </div>
      <div className="about-img">
        <div className="img1">
          <img src={Aboutimg} alt="Mario"></img>
        </div>
        <div className="img2">
          <img src={Aboutimg2} alt="Mario2"></img>
        </div>
      </div>
    </div>
  );
};

export default About;

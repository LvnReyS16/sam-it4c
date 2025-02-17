

import HeroImage from "../assets/image-hero.webp";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <h1>Hi I am <span style={{color: "red"}}>Developer</span></h1>
      </div>
      <div>
        <img className="hero-img" src={HeroImage} alt="Hero picture" />
      </div>
    </div>
  );
};

export default Hero;

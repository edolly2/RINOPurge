/* eslint-disable react/prop-types */
import "../styles/HomeSection.css";

const HomeSection = (props) => {
  return (
    <section className="home-section-container">
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </section>
  );
};

export default HomeSection;

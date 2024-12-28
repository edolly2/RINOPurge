import HomeSection from "../components/HomeSection";
import "../styles/HomePage.css";
import Example from "../assets/example.png";

const HomePage = () => {
  return (
    <div>
      <h1>RINO Purge</h1>
      <p>&quot;Taking Back to GOP-One RINO at a Time!&quot;</p>
      <HomeSection title="RINO of the Week">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
          rerum, quaerat repellat sint atque quasi animi dignissimos voluptas
          quo eum modi nostrum ullam explicabo optio facilis veritatis hic!
          Mollitia.
        </p>
      </HomeSection>
      <HomeSection title="Top 10 RINOs">
        <ol type="1">
          <li>him</li>
          <li>her</li>
          <li>him</li>
          <li>him</li>
          <li>him</li>
          <li>him</li>
          <li>him</li>
          <li>him</li>
          <li>him</li>
          <li>him</li>
        </ol>
      </HomeSection>
      <HomeSection title="RINO News">
        <div className="home-section-wrapper">
          <img className="home-section-img" src={Example} alt="Example" />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            corporis rerum placeat voluptatum officia nulla consequuntur quas
            natus doloribus qui, quae animi porro sunt fugiat maxime ex
            voluptatem perferendis inventore!
          </div>
        </div>
      </HomeSection>
    </div>
  );
};

export default HomePage;

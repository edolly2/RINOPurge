/* eslint-disable react/prop-types */
import "../styles/MainComponent.css";

const MainComponent = ({ children }) => {
  return (
    <main className="main-container">
      <div className="content-wrapper">{children}</div>
    </main>
  );
};

export default MainComponent;

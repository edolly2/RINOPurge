/* eslint-disable react/prop-types */
import "../styles/NewsStory.css";

const NewsStory = (props) => {
  return (
    <article className="news-container">
      <h1>{props.newsTitle}</h1>
      <div className="news-wrapper">
        <img
          className="news-img"
          src={props.newsImage}
          alt={props.newsImageAlt}
        />
        <div>
          <p>{props.newsText}</p>
          <div>
            <a className="read-full-link" href="">
              Read Full Article
            </a>
          </div>
        </div>
      </div>
      <footer>
        <address>
          Written by <a href="mailto:author@example.com">{props.newsAuthor}</a>.
        </address>
      </footer>
    </article>
  );
};

export default NewsStory;

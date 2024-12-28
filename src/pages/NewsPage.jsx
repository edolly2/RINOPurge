import NewsStory from "../components/NewsStory";
import "../styles/NewsPage.css";
import Image from "../assets/example.png";

const NewsPage = () => {
  return (
    <section>
      <NewsStory
        newsTitle="Random News Title"
        newsImage={Image}
        newsText="Dolore ipsum sunt do voluptate consequat deserunt Lorem. Do sint occaecat irure laboris veniam cupidatat commodo veniam enim in. Fugiat ut tempor ad consectetur minim officia. Sunt consequat aliqua tempor eiusmod elit. Elit cillum exercitation non quis ad voluptate eiusmod dolor dolor magna eiusmod. Officia pariatur id fugiat aliqua sunt dolor ipsum quis aliqua irure aute consectetur dolor id. Reprehenderit cillum pariatur qui quis reprehenderit cillum."
        newsAuthor="John Doe"
      />
    </section>
  );
};

export default NewsPage;

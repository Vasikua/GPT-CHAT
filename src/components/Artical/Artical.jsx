import "./Artical.css";

const Artical = ({ imageURL, data, title }) => {
  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-image">
        <img src={imageURL} alt="blog image" />
      </div>
      <div className="gpt3__blog-container-content">
        <div>
          <p>{data}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Artical;

import image from "../assets/images.jpeg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2  "
      style={{ maxWidth: "345px" }}
    >
<img
  src={src && src.trim() !== "" ? src : image}
  className="card-img-top"
  style={{
    height: "200px",
    width: "100%",
    objectFit: "cover"
  }}
  alt="news"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = image;
  }}
/>

      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News current event. It is information about something that has just happened."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

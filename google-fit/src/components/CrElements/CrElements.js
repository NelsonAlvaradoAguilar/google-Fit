import "./CrElements.scss";

const CrElements = ({ images, text, alt }) => {
  console.log(images);
  <div className="element">
    <img src={images} alt={alt}></img>
    <p>{text}</p>
  </div>;
};
export default CrElements;

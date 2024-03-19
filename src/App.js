import "./styles/style.css";
import "./helper/data.js";
import images from "./helper/data.js";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Image Gallery</h1>
      </div>
      <div className="image-container">
        {images.map((image) => (
          <div>
            <div className="main">
              <img src={image.src.large} alt="" width={"200px"}></img>
            </div>
            <h3>{image.photographer}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

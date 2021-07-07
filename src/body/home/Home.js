import Carousel from "react-bootstrap/Carousel";
import { Component } from "react";
import "./Home.scss";

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="home-content container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/gallery/image3.jpg "
                alt="First Image"
              />
              <Carousel.Caption>
                <h3>Inivation and Planning time</h3>
                <p>It's one of first images has taken in Speaker's Circle</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/gallery/image2.jpg"
                alt="First Image" height="50%"
              />
              <Carousel.Caption>
                <h3>Empowerments meeting</h3>
                <p>It's one of first images has taken in Speaker's Circle</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/gallery/image1.jpg"
                alt="First Image" height="80%"
              />
              <Carousel.Caption>
                <h3>Founded from - India</h3>
                <p>Offecial log of Speaker's Circle (SP)</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Home;

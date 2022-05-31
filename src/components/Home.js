import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="main">
      <h1>ĐÂY LÀ TRANG CHỦUUUUUUUUUUU</h1>
      <div className="banner">
        <div
          id="carouselExampleIndicators"
          class="carousel slide d-flex justify-content-center align-items-center"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/slide1.png"
                class="d-block w-100 slide-img1"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="/slide2.jpg"
                class="d-block w-100 slide-img2"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="/slide3.jpg"
                class="d-block w-100 slide-img3"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="/slide4.jpg"
                class="d-block w-100 slide-img4"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev custom-btn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next custom-btn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="border-span"></div>
      <div className="News py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>TIN MỚI NHẤT</h2>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod, nisl eget consectetur venenatis, nisl lectus aliquet
                  nisi, euismod consectetur nisi lectus aliquet nisi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod, nisl eget consectetur venenatis, nisl lectus aliquet
                  nisi, euismod consectetur nisi lectus aliquet nisi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod, nisl eget consectetur venenatis, nisl lectus aliquet
                  nisi, euismod consectetur nisi lectus aliquet nisi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod, nisl eget consectetur venenatis, nisl lectus aliquet
                  nisi, euismod consectetur nisi lectus aliquet nisi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod, nisl eget consectetur venenatis, nisl lectus aliquet
                  nisi, euismod consectetur nisi lectus aliquet nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

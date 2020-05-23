import React, { useState } from "react";
import GoogleMapCombo from "./GoogleMapCombo";

function Header() {
  const [showMap, setShowMap] = useState(false);
  function CallShowMap() {
    setShowMap(true);
  }

  return (
    <div>
      <header>
        <div className="logo">
          <img src="./img/logo.png" alt="Company Logo" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#">Property Management</a>
          </li>
          <li className="nav-item">
            <a href="#">Book Your Rental</a>
          </li>
          <li className="nav-item">
            <a href="#">415-209-5847</a>
          </li>
        </ul>
      </header>

      <section className="top-rated">
        <h2>
          Top Rated Places To Stay{" "}
          {!showMap ? (
            <div className="pull-right show-map-btn" onClick={CallShowMap}>
              Show Map
            </div>
          ) : null}
        </h2>

        <section className="row">
          <div className={`${showMap ? "col-md-6" : "col-md-12"} img-list`}>
            <div className="img-box">
              <img src="./img/1.jpeg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>
            <div className="img-box">
              <img src="./img/2.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>
            <div className="img-box">
              <img src="./img/3.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>
            <div className="img-box">
              <img src="./img/4.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>
            <div className="img-box">
              <img src="./img/5.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>{" "}
            <div className="img-box">
              <img src="./img/6.jpg" />
              <div className="img-content">
                <div className="title">
                  Handsome Beach Cottage W Outdoors Lounged{" "}
                </div>
                <div className="star">
                  <i className="fa fa-star"></i>4.6 (30)
                </div>
              </div>
              <p className="price">
                <b>$375</b>/night
              </p>
            </div>
          </div>
          {showMap ? (
            <div aria-hidden={false} className="col-md-6 side-nav">
              <div className="control-box">
                <div
                  className="close-btn "
                  onClick={() => {
                    setShowMap(false);
                  }}
                >
                  <span>X</span>
                </div>
                <div className="search">
                  <h3>
                    <input type="checkbox" /> Search As I Move The Map
                  </h3>
                </div>
              </div>
              <div className="google-map-view">{<GoogleMapCombo />}</div>
            </div>
          ) : null}
        </section>
      </section>
    </div>
  );
}

export default Header;

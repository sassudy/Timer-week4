import React from "react";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__item">
        <h4>Spirited away</h4>
        <div className="gallery__item--image">
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
            alt="Spirited away"
          />
        </div>
      </div>
      <div className="gallery__item">
        <h4>As above So Below</h4>
        <div className="gallery__item--image">
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oJZSajKLJkoTOzSZQN2ZwRnPwHZ.jpg"
            alt="As above So Below"
          />
        </div>
      </div>
      <div className="gallery__item">
        <h4>Journey to the Center of the Earth</h4>
        <div className="gallery__item--image">
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/myhj05hTAcQL2rhOrMqWxiioo49.jpg"
            alt="Journey to the Center of the Earth"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;

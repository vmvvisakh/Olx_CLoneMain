import React from 'react';

import Heart from '../../assets/Heart';
import './Post.css';

function Posts() {

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="https://wallpapercave.com/wp/wp2432645.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 350000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> Royal Enfield</p>
            </div>
            <div className="date">
              <span>Tue May 6 2021</span>
            </div>
          </div>
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 45000000</p>
              <span className="kilometer">Four Wheeler</span>
              <p className="name"> Mercedes Benz</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Posts;

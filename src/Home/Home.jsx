import React from 'react';
import ReactDom from 'react-dom';

import './Home.css'

const Home = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button style={{color: 'black'}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://media.istockphoto.com/id/1213615970/photo/gym-background-fitness-weight-equipment-on-empty-dark-floor.jpg?s=612x612&w=0&k=20&c=WyPxLxpfd9Pi6l0BMyWsqrrZIi_SrMmgTtYn8k08qQI=" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Well Equipped</h5>
              <p>Our center has every wellness equipment that you need and yes all of them are in good condition !!</p>
            </div>
        </div>
        <div class="carousel-item">
          <img src="https://goldsgym.in/uploads/blog/compress-strong-man-training-gym-min.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Great environment</h5>
              <p>Need a silent and fitty Environment? <br/> Well don't worry, we care about you and your needs, so we've got the best environment for you.</p>
              <p></p>
            </div>
        </div>
        <div class="carousel-item">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHw%3D&w=1000&q=80" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Ohh !! You're a yoga person ??</h5>
              <p>Some of you may want to have yoga in your peace time. <br/> We've made special yoga capsules that suits your health and your needs. </p>
            </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Home;

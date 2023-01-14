import React from "react";
import { ReactDOM } from "react";

import './Yoga.css'

const Yoga = () => {

    return (
    
        <div style={{textAlign: 'center', margin: '5rem 6rem', padding: '4rem'}} className="yoga_features">

            <h2 style={{marginBottom: '2rem', fontWeight: 'lighter',backgroundColor: 'black', color: 'white', padding: '1rem', borderRadius: '1rem'}}>Features of our brand new Yoga Program</h2>

            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img style={{height: '70px', width: '70px'}} src="https://cdn-icons-png.flaticon.com/128/84/84145.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Peace of Mind</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{height: '70px', width: '70px'}} src="https://cdn-icons-png.flaticon.com/128/2982/2982214.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Mindfullness</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{height: '70px', width: '70px'}} src="https://cdn-icons-png.flaticon.com/128/2647/2647625.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Meditation</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{height: '70px', width: '70px'}} src="https://cdn-icons-png.flaticon.com/128/9387/9387303.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Yoga Carpet</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Yoga;
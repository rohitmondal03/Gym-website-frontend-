import React, { ReactDOM } from "react";

import './Welcome.css'

const Welcome = () => {
    return (
        <div id="welcome_sec" class="container">

            {/* left div */}
            <div id="left_div" class="container">
                <figure class="figure">
                    <img src="https://img.mensxp.com/media/content/2017/Jun/extremely-stupid-things-desi-gym-trainers-are-experts-at-1400x653-1498636294.jpg?w=656&h=432&cc=1" class="figure-img img-fluid rounded" alt="..." />
                    <figcaption class="figure-caption"></figcaption>
                </figure>
            </div>

            {/* right div */}
            <div id="right_div" class="container">
                <h1> Welcome To <span style={{color: 'rgb(255, 119, 119)', textDecoration: 'underline'}}>GymLyf</span></h1>
                <h4> HELLO THERE! </h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti odio laboriosam in recusandae expedita ducimus voluptatum provident doloremque doloribus, deserunt, ad maxime voluptas voluptatem ex qui quam saepe debitis dolorum! </p>
                <button style={{width: 'fit-content', padding: '10px', margin: '2rem 0'}} type="button" class="btn btn-info">Our Programs</button>
            </div>


        </div>
    )
}

export default Welcome;
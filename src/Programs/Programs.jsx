import React from 'react';
import ReactDom from 'react-dom';

import './Programs.css'

const Programs = () => {
    return (
        <div style={{ margin: '2rem 2rem', backgroundColor: 'whitesmoke', padding: '1rem', borderRadius: '20px', fontWeight: 'bolder' }} className='programs'>

            <h1 style={{ fontFamily: 'Crimson Text, serif', textAlign: 'center', marginBottom: '20px', color: 'rgb(6, 166, 235)', fontSize: '3rem', fontWeight: 'bold' }}>Programs we offer</h1>

            <div style={{textAlign: 'center'}} class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div class="card-body">
                            <h2 class="card-title">Basic exercise</h2>
                            <h4>$30</h4>
                            <p style={{fontFamily: 'Crimson Text, serif', fontSize: '20px', fontWeight: '500'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti odio laboriosam in recusandae expedita ducimus voluptatum provident doloremque doloribus, deserunt, ad maxime voluptas voluptatem ex qui quam saepe debitis dolorum!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div class="card-body">
                            <h2 class="card-title">Boot Camp</h2>
                            <h4>$40</h4>
                            <p style={{fontFamily: 'Crimson Text, serif', fontSize: '20px', fontWeight: '500'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti odio laboriosam in recusandae expedita ducimus voluptatum provident doloremque doloribus, deserunt, ad maxime voluptas voluptatem ex qui quam saepe debitis dolorum!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div style={{backgroundColor: 'rgb(112, 253, 244)'}} class="card-body">
                            <h1> Best Seller ! </h1>
                            <hr />
                            <h2 class="card-title">Private training</h2>
                            <h4>$60</h4>
                            <p style={{fontFamily: 'Crimson Text, serif', fontSize: '20px', fontWeight: '500'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti odio laboriosam in recusandae expedita ducimus voluptatum provident doloremque doloribus, deserunt, ad maxime voluptas voluptatem ex qui quam saepe debitis dolorum!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div class="card-body">
                            <h2 class="card-title">Semi-Private training</h2>
                            <h4>$65</h4>
                            <p style={{fontFamily: 'Crimson Text, serif', fontSize: '20px', fontWeight: '500'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti odio laboriosam in recusandae expedita ducimus voluptatum provident doloremque doloribus, deserunt, ad maxime voluptas voluptatem ex qui quam saepe debitis dolorum!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div class="card-body">
                            <h2 class="card-title">Athletic performance</h2>
                            <h4>$80</h4>
                            <p style={{fontFamily: 'Crimson Text, serif', fontSize: '20px', fontWeight: '500'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti odio laboriosam in recusandae expedita ducimus voluptatum provident doloremque doloribus, deserunt, ad maxime voluptas voluptatem ex qui quam saepe debitis dolorum!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div class="card-body">
                            <h2 class="card-title">Yoga Classes</h2>
                            <h4>$45</h4>
                            <p style={{fontFamily: 'Crimson Text, serif', fontSize: '20px', fontWeight: '500'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti odio laboriosam in recusandae expedita ducimus voluptatum provident doloremque doloribus, deserunt, ad maxime voluptas voluptatem ex qui quam saepe debitis dolorum!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs;
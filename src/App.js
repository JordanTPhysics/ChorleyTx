import React, { useState } from 'react';

function App() {

    const [formData, setFormData] = useState({})


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <section className='row App-header'>
                <div className='col-4'>
                    <h1>Fast. Reliable. Local</h1>

                </div>
                <div className='col-4'>
                    <img src='images/Wheelchair Taxi Service.jpg' alt='wheelchair taxi service' className='App-logo' />

                </div>
                <div className='col-4'>
                    <h1>Spacious. Accommodating. Easy Access.</h1>

                </div>
                <div className='col-12'>
                </div>
            </section>
            <section className='row'>
                <div className='col-6'>
                    <h2 className='link'>📍Chorley</h2>
                </div>
                <div className='col-6'>
                    <h2 className='link'>
                        <a href='tel:01253722728' target='_blank'>📞 01253722728</a>
                    </h2>
                </div>
            </section>
            <section className='row'>
                <p>
                    We cover Chorley, Euxton Buckshaw Village, Whittle le Woods, Clayton le Woods, Brinscall, Coppull Adlington
                    <br />
                    We take cards and online payments.
                </p>
            </section>
            <section className='row'>
                <div className='col-md-6'>
                    <img src='images/car-removebg.png' alt='Car' className='App-img img-fluid' />
                </div>
                <div className='col-md-6'>
                    <img src='images/inside.png' alt='inside of taxi' className='App-img img-fluid' />
                </div>
            </section>
            <section className='row'>
                <form>
                    <h2 >If you have an enquiry about your journey please fill in the form and we will get back to you</h2>

                    <div className="form-group">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" name="name" id="name" required onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label><br />
                        <input type="tel" name="phone" id="phone" required onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="From">From Postcode</label><br />
                        <input type="text" name="From" id="From" required onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="To">To Postcode</label><br />
                        <input type="text" name="To" id="To" required onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Enquiry:</label><br />
                        <textarea name="message" id="message" required onChange={handleChange}></textarea>
                    </div>

                    <button type="submit" className="button">Submit</button>
                </form>
            </section>
            <section className='row'>
                <div className='col-12'>
                    &copy; 2024 Wheelchair Taxi Service
                    <p>Design By Jordan - FirstImpression Marketing</p>
                </div>
            </section>
        </div>
    );
}

export default App;
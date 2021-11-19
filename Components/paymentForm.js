import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function PaymentForm() {
  const [first_name, setFName] = useState('');
  const [last_name, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile_number, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZIPCode] = useState('');
  const [state, setState] = useState('');
  const [booking_id, setBookingId] = useState('21');
  const [card_number, setCardNumber] = useState('');
  const [card_expiration, setExpirationDate] = useState('');
  const [card_cvv, setCVV] = useState('');
  const [travel_to_date, setToDate] = useState('2021-11-16');
  const [travel_from_date, setFromDate] = useState('2021-11-10');
  const [basic_price, setBasePrice] = useState('2300');
  const [taxes_fees, setTaxes] = useState('50');
  const [total, setTotal] = useState('2350');


// const setId = () => {
//     if (typeof window !== "undefined") {
//         const windowUrl = window.location.search;
//         const params = new URLSearchParams(windowUrl);
//         const id = params.get('id');
//         setBookingId(id);
//         console.log(booking_id);
//     }
// }
  const handleSubmit1 = e => {
    e.preventDefault();
    const data1 = {
      first_name,
      last_name,
      email,
      mobile_number,
      address,
      city,
      state,
      country,
      zipcode,
      booking_id,
      card_number,
      card_expiration,
      card_cvv,
      travel_to_date,
      travel_from_date,
      basic_price,
      taxes_fees,
      total
    };
    console.log(data1);
    // window.location.href = "/success"

    try {
        axios
            .post(
                `https://staging.bookingadmin.vacayou.com/api/bookingpayment`,
                data1,
            )
            .then((response) => {
                console.log(response);

                return response;
            });
    } catch (err) {
        console.error(`Error received from axios.post: ${JSON.stringify(err)}`);
    }
  };


  return (
    <div>
      <main>
        <form onSubmit={handleSubmit1} className="payment-form">
            <h4>Billing Details</h4>
            <div className="name flex items-center justify-between">
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="first_name"
                            type="text"
                            title="Only Alphabets"
                            placeholder="John"
                            pattern="[a-z A-Z\s]*$"
                            required
                            onChange={e => setFName(e.target.value) 
                            }
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="last_name"
                            pattern="[a-z A-Z\s]*$"
                            title="Only Alphabets"
                            placeholder="Doe"
                            type="text"
                            required
                            onChange={e => setLName(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="mail flex items-center justify-between">
                <div>
                    <label htmlFor="email">Email Address</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="email"
                            type="email"
                            placeholder="john@email.com"
                            required
                            onChange={e => setEmail(e.target.value) 
                            }
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="mobile_number">Mobile Phone</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="mobile_number"
                            type="text"
                            title="Only Numbers"
                            placeholder="5683728936"
                            required
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="country flex items-center justify-between">
                <div>
                    <label htmlFor="country">Country</label>
                    <div>
                        <select className="rounded border-2" id="country" required onChange={e => setCountry(e.target.value)}>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                            <option>Africa</option>
                            <option>Australia</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="address flex items-center justify-between">
                <div>
                    <label htmlFor="address">Address</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="address"
                            type="text"
                            required
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="city flex items-center justify-between">
                <div>
                    <label htmlFor="city">City</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="city"
                            type="text"
                            pattern="[a-z A-Z\s]*$"
                            title="Only Alphabets"
                            required
                            onChange={e => setCity(e.target.value) 
                            }
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <div>
                        <select className="rounded border-2" id="state" required onChange={e => setState(e.target.value)}>
                            <option>New York</option>
                            <option>Toronto</option>
                            <option>Mumbai</option>
                            <option>Nairobi</option>
                            <option>Melbourne</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="zipcode">ZIP Code</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="zipcode"
                            type="tel"
                            pattern="[0-9]*$" 
                            title="Only Numbers."
                            required
                            onChange={e => setZIPCode(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <h4>Payment Details</h4>
            <div className="card-details flex items-center justify-between">
                <div>
                    <label htmlFor="card_number">Card Number</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="cno"
                            type="tel" 
                            pattern="[0-9 ]*$" 
                            title="Numbers and Space."
                            maxLength="19" 
                            placeholder="xxxx xxxx xxxx xxxx"
                            required
                            onChange={e => setCardNumber(e.target.value) 
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="exp-dates flex items-center justify-between">
                <div>
                    <label htmlFor="card_expiration">Expiration Date</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="expdate"
                            type="tel" 
                            pattern="[0-9/]*$" 
                            maxLength="7" 
                            placeholder="mm/yyyy"
                            required
                            onChange={e => setExpirationDate(e.target.value) 
                            }
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="card_cvv">CVV</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="cvv"
                            type="tel" 
                            pattern="[0-9]*$" 
                            maxLength="3" 
                            placeholder="xxx"
                            required
                            onChange={e => setCVV(e.target.value) 
                            }
                            // onChange={() => setId() }
                        />
                    </div>
                </div>
            </div>
            {/* <div className="text-lg leading-7 font-semibold text-center card-btn"><a href="/success" className="bookbtn">RESERVE YOUR EXPERIENCE</a></div> */}
          <button type="submit" className="bookbtn">RESERVE YOUR EXPERIENCE</button>
        </form>
        <p>{booking_id}</p>
      </main>
    </div>
  );
}   
import { useState, useEffect } from 'react';
import axios from 'axios';
// import {Link} from "react-router-dom";

export default function TripForm() {
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [infants, setInfants] = useState('');
//   const [rooms, setRooms] = useState('');
//   const [nights, setNights] = useState('');
  const [services, setServices] = useState('');
//   const [selRoom, setSelRoom] = useState('');
  const [bId, setId] = useState('');

  const [offData, setoffData] = useState();
    
  useEffect(() => {
      setoffData(JSON.parse(localStorage.getItem('offerVal')));
  }, []);
  console.log(offData);
//   const [offData1] = offData.split('"');
//   console.log(offData1);

//   const offer_id = eValues1[17];
//   const package_id = "96";
// //   let max_adults = 12;
  let max_children = 2;
//   eValues1[31];
  let max_infants = 1;
//   eValues1[35];
//   let adult_price = adults * eValues1[39];
//   let children_price = children * eValues1[43];

//   const price_values = {
//     adult_price,
//     children_price
//   }

//   useEffect(() => {
//     localStorage.setItem('prices', JSON.stringify(price_values));
//   }, [price_values]);
  
//   const handleChange = event => {
//     setSelRoom(event.target.value)
//   };
  
  useEffect(() => {
    console.log(bId);
  }, [bId]);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      adults,
      children,
      infants,
    //   rooms,
    //   nights,
      services,
    //   selRoom,
      offer_id,
      package_id,
    };

    console.log(data);
    // const axios = require('axios');
    axios
        .post(
            `https://staging.bookingadmin.vacayou.com/api/addbooking`,
            data,
        )
        .then((response) => {
            console.log(response);
            var msg = response.data.message;
            console.log(msg);
            setId(response.data.data.booking.id);
            console.log(bId);
            return response;
        });
    // window.location.href = `/payment/?id=${bId}`
  };
  return (
    <div>
        <form onSubmit={handleSubmit} className="trip-form">
            <h4>Party Size</h4>
            <div className="party-size flex items-center justify-between">
                <div>
                    <label htmlFor="adults">Number of Adults</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="adults"
                            type="number"
                            onChange={e => setAdults(e.target.value) 
                            }
                            required
                        />
                    </div>
                </div>
                {max_children > 0 ? 
                    <div>
                        <label htmlFor="children">Number of Children</label>
                        <div>
                            <input
                                className="rounded border-2"
                                id="children"
                                type="number"
                                onChange={e => setChildren(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    : ''
                }
                {max_infants > 0 ?
                    <div>
                        <label htmlFor="infants">Number of Infants</label>
                        <div>
                            <input
                                className="rounded border-2"
                                id="infants"
                                type="number"
                                onChange={e => setInfants(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    : 
                    <div>
                        <label htmlFor="infants" style={{color: '#fff'}}>Number of Infants</label>
                        <div>
                            <input
                                className="rounded border-2"
                                id="infants"
                                type="hidden"
                                onChange={e => setInfants(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                }
            </div>
            {/* <h4>Accomodations</h4>
            <div className="party-size add-on flex items-center justify-between">
                <div>
                    <label htmlFor="room">Room Selection</label>
                    <div>
                        <select className="rounded border-2" name='selRoom' onChange={handleChange} required>
                            <option>Deluxe King Room</option>
                            <option>Signature Room</option>
                            <option>Family Room</option>
                        </select>
                    </div>
                </div>
                {/* <div>
                    <label htmlFor="rooms">Number of Rooms</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="rooms"
                            type="number"
                            onChange={e => setRooms(e.target.value)}
                            required
                        />
                    </div>
                </div> 
            </div> */}
            <h4>Customization Requests</h4>
            <div className="party-size add-on flex items-center justify-between">
                {/* <div>
                    <label htmlFor="nights">Additional Nights</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="nights"
                            type="number"
                            onChange={e => setNights(e.target.value)}
                            required
                        />
                    </div>
                </div> */}
                <div>
                    <label htmlFor="services">Do you want any other wellness services?</label>
                    <div>
                        <input
                            className="rounded border-2"
                            id="services"
                            type="text"
                            pattern="[a-z A-Z \s]*$"
                            title="Only Alphabets."
                            onChange={e => setServices(e.target.value)}
                            required
                        />
                    </div>
                </div>
            </div>
            {/* <div className="text-lg leading-7 font-semibold text-center card-btn"><a href="/payment" className="bookbtn">PROCEED TO CHECKOUT</a></div> */}
          <button type="submit" className="bookbtn">PROCEED TO CHECKOUT</button>
        </form>
        {/* <div>
            {console.log(msg)}
        </div> */}
    </div>
  );
}   
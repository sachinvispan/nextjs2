import React, { Component } from 'react';
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import phone from '../public/images/phone-call.svg';
import chat from '../public/images/chat.svg';
import Tick from '../public/images/check.png';


export default class TripCustomization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateData: '',
            adults: '',
            children: '',
            infants: '',
            services: '',
            offer_id: '',
            package_id: '',
            booking_id: '',
            error_msg: '',
            total_price: '',
        };
    }
    // handleOfferChange = (event) => {
    //     this.setState({selOffer: event.target.value});
    //     console.log(this.state.selOffer);
    // };

    static async getInitialProps() {
        const tripDate = new Date();
        const eTripDate = tripDate.toString().replace(/ /g,"-").replace(/.{4}/, '').slice(0, -40);
        const res = await fetch(`http://127.0.0.1:8000/api/getpackagedetailbyholidayid/96/${eTripDate}/${eTripDate}`)
        const offers = await res.json()
        console.log(offers);
        return { offers }
      }
      componentWillMount() {
        this.setState({
          offers: this.props.offers
        })
      }
    componentDidMount() {
        this.setState({
            dateData: localStorage.getItem('form')
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const data = {
          adults: this.state.adults,
          children: this.state.children,
          infants: this.state.infants,
        //   rooms,
        //   nights,
          services: this.state.services,
        //   selRoom,
          offer_id: this.state.offer_id,
          package_id: this.state.package_id,
        };
    
        console.log(data);
        // const axios = require('axios');
        axios
            .post(
                `http://127.0.0.1:8000/api/addbooking`,
                data,
            )
            .then((response) => {
                console.log(response);
                var msg = response.data.message;
                console.log(msg);
                {response.data.message === "Booking created successfully" ? this.setState({booking_id: response.data.data.booking.id}) : ''}
                this.setState({error_msg: response.data.message});
                // setId(response.data.data.booking.id);
                console.log(this.state.booking_id);
                const bId = this.state.booking_id;
                const a_p = this.state.adults * +this.state.dateData.split('"')[43];
                const c_p = this.state.children * +this.state.dateData.split('"')[47];
                const i_p = this.state.infants * +this.state.dateData.split('"')[51];
                const final_base_price = +this.state.dateData.split('"')[23] + a_p + c_p + i_p;
                const taxes = +this.state.dateData.split('"')[27];
                const total_price = final_base_price + taxes;
                const val = {
                    bId,
                    total_price,
                }
                localStorage.setItem('bId', JSON.stringify(val));
                return response;
            });
        window.location.href = "/payment"
      };
    
      changeAdults = (e) =>{
        this.setState({adults: e.target.value});
      }
      changeChildren = (e) =>{
        this.setState({children: e.target.value});
      }
      changeInfants = (e) =>{
        this.setState({infants: e.target.value});
      }
      changeServices = (e) =>{
        this.setState({services: e.target.value});
        this.setState({offer_id: this.state.dateData.split('"')[43]});
        this.setState({package_id: this.state.offers.package_id});
      }

    
    // getValues() {
    //     const sValues = localStorage.getItem('form');
    //     console.log('s' + sValues);
    //     if(!sValues) return {
    //         sDateEdited,
    //         eDateEdited,
    //         offer
    //     };
    //     return JSON.parse(sValues);
        
    // }
    

    render() {
        const offerList = this.state.offers;
        // console.log(process.env.REACT_APP_API_URL);
        const offerData = this.state.offerData;
        console.log(offerData);
        const sDate = this.state.dateData.split('"');
        console.log(this.state.dateData);
        console.log(sDate);
        const a_p = this.state.adults * +sDate[43];
        const c_p = this.state.children * +sDate[47];
        const i_p = this.state.infants * +sDate[51];
        const final_base_price = +sDate[23] + a_p + c_p + i_p;
        const taxes = +sDate[27];
        const total_price = final_base_price + taxes;
        const max_children = sDate[35];
        const max_infants = sDate[39];
        
        return (
            <div className={styles.container}>
            <Head>
                <title>Vacayou – Wellness & Active Travel That Moves You</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Header/>
            </header>
            <main className={styles.main}>
                <section className={styles.tripcontainer} style={{backgroundImage:`url(${offerList.package_image} )`}}>
                    <div className="container mx-auto sm:px-6 lg:px-8">
                        <div className={styles.tripcontainer1}>
                            <h2 className="text-center mb-4">{offerList.package_name}</h2>
                        </div>
                    </div>
                </section>
                <section className="trip">
                    <div className="container mx-auto sm:px-6 lg:px-8">
                        <div className="grid grid-rows-1 grid-flow-col gap-4 trip-container">
                            <div className="trips col-span-1">
                                <h2>Customize Your Trip</h2>
                                <p>Please provide just a bit more information to create your ideal wellness experience.</p>
                                <div>
                                    <form onSubmit={this.handleSubmit} className="trip-form">
                                        <h4>Party Size</h4>
                                        <div className="party-size flex items-center justify-between">
                                            <div>
                                                <label htmlFor="adults">Number of Adults</label>
                                                <div>
                                                    <input
                                                        className="rounded border-2"
                                                        id="adults"
                                                        type="number"
                                                        onChange={this.changeAdults}
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
                                                            onChange={this.changeChildren}
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
                                                            onChange={this.changeInfants}
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
                                                            onChange={this.changeInfants}
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
                                                        onChange={this.changeServices}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="text-lg leading-7 font-semibold text-center card-btn"><a href="/payment" className="bookbtn">PROCEED TO CHECKOUT</a></div> */}
                                    <button type="submit" className="bookbtn">PROCEED TO CHECKOUT</button>
                                    </form>
                                    <div style={{marginTop: "20px", fontWeight: "600"}}>
                                        {this.state.error_msg}
                                    </div>
                                </div>
                                <div className="need-assistance">
                                    <h4>Need Assistance</h4>
                                    <p>Our Travel Concierge team is here to help!</p>
                                    <p className="info flex items-center"><Image src={phone} /> <a href="tel:833 822 2968">833 822 2968</a></p>
                                    <p className="info flex items-center"><Image src={chat} /> <a href="#">Chat with us</a></p>
                                </div>
                            </div>
                            <div className="booking-details col-span-1">
                                <div className="selected-offer">
                                    <h4>
                                        {sDate[15]}
                                    </h4>
                                    <div className="sel-offer flex items-center">
                                        <div className="trip-info">
                                            <div className="flex items-center" style={{paddingBottom: 10 + 'px'}}>
                                                <p>Offer: </p>
                                                <p style={{fontWeight: 500, marginLeft: 5 + 'px', fontSize: 16 + 'px'}}>{sDate[15]}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p>Travel Dates: </p>
                                                <p style={{fontWeight: 500, marginLeft: 5 + 'px', fontSize: 16 + 'px'}}>{sDate[3]} - {sDate[7]}</p>
                                            </div>
                                        </div>
                                        <div className="trip-img" style={{backgroundImage:`url(${offerList.package_image} )`}}>
                                            {/* <Image src={PckgImg} /> */}
                                        </div>
                                    </div>
                                    <p className="pckg-info">Included in Your Package:</p>
                                    <ul>
                                        <li><Image src={Tick} /> Luxurious accomodations for two in a Signature room with one king size bed</li>
                                        <li><Image src={Tick} /> A 50-minute Mirbeau Signature Massage per person</li>
                                        <li><Image src={Tick} /> Special welcome amenity</li>
                                    </ul>
                                </div>
                                <div className="booking-summary">
                                    <h4>
                                        Booking Summary
                                    </h4>
                                    <p className="flex items-center justify-between">
                                        <span>Base Price</span>
                                        <span>${final_base_price}</span>
                                    </p>
                                    <p className="flex items-center justify-between">
                                        <span>Taxes & Fees*</span>
                                        <span>${taxes}</span>
                                    </p>
                                    <p className="flex items-center justify-between">
                                        <span>Total</span>
                                        <span>${total_price}</span>
                                    </p>
                                </div>
                                <div className="tnc">
                                    <p>*Taxes and Fees are an estimate and may vary slightly. There may also be additional fees due to the provider which are documented in the package terms and conditions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            </div>
        );
    }
}

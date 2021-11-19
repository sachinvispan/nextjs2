import React, { Component } from 'react';
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import phone from '../public/images/phone-call.svg';
import chat from '../public/images/chat.svg';
import PckgImg from '../public/images/q_70 (4) (1).jpg';
import Tick from '../public/images/check.png';
import PaymentForm from '../Components/paymentForm'
// import BookingSummary from '../Components/bookingSummary';
// import {useLocation} from "react-router-dom";

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pDateData: '',
            bData: '',
            first_name: '',
            last_name: '',
            email: '',
            mobile_number: '',
            address: '',
            city: '',
            state: '',
            country: '',
            zipcode: '',
            booking_id: '',
            card_number: '',
            card_expiration: '',
            card_cvv: '',
            travel_to_date: '',
            travel_from_date: '',
            basic_price: '',
            taxes_fees: '',
            total: '',
        };
    }

    static async getInitialProps() {
        const tripDate = new Date();
        const eTripDate = tripDate.toString().replace(/ /g,"-").replace(/.{4}/, '').slice(0, -40);
        const res = await fetch(`https://staging.bookingadmin.vacayou.com/api/getpackagedetailbyholidayid/96/${eTripDate}/${eTripDate}`)
        const offers = await res.json()
        //console.log(offers);
        return { offers }
      }
      componentWillMount() {
        this.setState({
          offers: this.props.offers
        })
      }
      componentDidMount() {
        this.setState({
            pDateData: localStorage.getItem('form'),
            bData: localStorage.getItem('bId')
        })
      }
      handlePaymentSubmit = e => {
        e.preventDefault();
        const data1 = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          mobile_number: this.state.mobile_number,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          country: this.state.country,
          zipcode: this.state.zipcode,
          booking_id: this.state.bData,
          card_number: this.state.card_number,
          card_expiration: this.state.card_expiration,
          card_cvv: this.state.card_cvv,
          travel_to_date: this.state.pDateData.split('"')[7],
          travel_from_date: this.state.pDateData.split('"')[3],
          basic_price: this.state.pDateData.split('"')[23],
          taxes_fees: this.state.pDateData.split('"')[27],
          
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

      changeFName = (e) =>{
        this.setState({first_name: e.target.value});
      }
      changeLName = (e) =>{
        this.setState({last_name: e.target.value});
      }
      changeEmail = (e) =>{
        this.setState({email: e.target.value});
      }
      changePhone = (e) =>{
        this.setState({mobile_number: e.target.value});
      }
      changeCountry = (e) =>{
        this.setState({country: e.target.value});
      }
      changeAddress = (e) =>{
        this.setState({address: e.target.value});
      }
      changeCity = (e) =>{
        this.setState({city: e.target.value});
      }
      changeState = (e) =>{
        this.setState({state: e.target.value});
      }
      changeZipCode = (e) =>{
        this.setState({zipcode: e.target.value});
      }
      changeCardNumber = (e) =>{
        this.setState({card_number: e.target.value});
      }
      changeCardExpiration = (e) =>{
        this.setState({card_expiration: e.target.value});
      }
      changeCardCvv = (e) =>{
        this.setState({card_cvv: e.target.value});
      }
   
    render() {
        const offerList = this.state.offers;
        const spDate = this.state.pDateData.split('"');
        console.log(this.state.pDateData);
        console.log(spDate);
        const final_base_price = +spDate[23];
        const taxes = +spDate[27];
        // const max_children = spDate[35];
        // const max_infants = spDate[39];
        const bIData = this.state.bData.split('"');
        console.log(bIData);
        const total_price = bIData[4];
        // if (typeof window !== "undefined") {
        //     const windowUrl = window.location.search;
        //     const params = new URLSearchParams(windowUrl);
        //     const id = params.get('id');
        //     console.log(params);
        //     console.log(id);
        // }
        
        // let location = useLocation();
        // console.log(location);
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
                            <h2>You're Almost There...</h2>
                            <p>Please provide your payment details to complete your booking.</p>
                            <div>
                                <form onSubmit={this.handlePaymentSubmit} className="payment-form">
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
                                                    onChange={this.changeFName}
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
                                                    onChange={this.changeLName}
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
                                                    onChange={this.changeEmail}
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
                                                    onChange={this.changePhone}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="country flex items-center justify-between">
                                        <div>
                                            <label htmlFor="country">Country</label>
                                            <div>
                                                <select className="rounded border-2" id="country" required onChange={this.changeCountry}>
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
                                                    onChange={this.changeAddress}
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
                                                    onChange={this.changeCity}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="state">State</label>
                                            <div>
                                                <select className="rounded border-2" id="state" required onChange={this.changeState}>
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
                                                    onChange={this.changeZipCode}
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
                                                    onChange={this.changeCardNumber}
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
                                                    onChange={this.changeCardExpiration}
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
                                                    onChange={this.changeCardCvv}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="text-lg leading-7 font-semibold text-center card-btn"><a href="/success" className="bookbtn">RESERVE YOUR EXPERIENCE</a></div> */}
                                <button type="submit" className="bookbtn">RESERVE YOUR EXPERIENCE</button>
                                </form>
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
                                    {spDate[15]}
                                </h4>
                                <div className="sel-offer flex items-center">
                                    <div className="trip-info">
                                        <div className="flex items-center" style={{paddingBottom: 10 + 'px'}}>
                                            <p>Offer: </p>
                                            <p style={{fontWeight: 500, marginLeft: 5 + 'px', fontSize: 16 + 'px'}}>{spDate[15]}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <p>Travel Dates: </p>
                                            <p style={{fontWeight: 500, marginLeft: 5 + 'px', fontSize: 16 + 'px'}}>{spDate[3]} - {spDate[7]}</p>
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
                            {/* <BookingSummary /> */}
                            <div className="tnc">
                                <p>*Taxes and Fees are an estimate and may vary slightly. There may also be additional fees due to the provider which are documented in the package terms and conditions.</p>
                                <p>Any customizations are not reflected in price and we will reach out to you within 24 hours to confirm your request.</p>
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

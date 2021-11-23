import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRange } from 'react-date-range';
import {useState,useEffect} from 'react'


export default function DateSelection(props) {
  
    const [offer, setOffer] = useState({});
    const [offers, setOffers] = useState({});
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);

      let sDate = state[0].startDate;
      let sDateEdited = sDate.toString().replace(/ /g,"-").replace(/.{4}/, '').slice(0, -40);
      console.log(sDateEdited);
      let eDate = state[0].endDate;
      let eDateEdited = eDate.toString().replace(/ /g,"-").replace(/.{4}/, '').slice(0, -40);
      console.log(eDateEdited);
      const fetchConfig = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      };

      const fetchAPI = async function getStaticProps() {
        const res = await fetch(`https://staging.bookingadmin.vacayou.com/api/getpackagedetailbyholidayid/96/${sDateEdited}/${eDateEdited}`, fetchConfig);
        res
        .json()
        .then(res => setOffers(res))
        // const fetchOffers = await res.json();
        // setOffers(fetchOffers);
        // return { fetchOffers }
      }
    
      useEffect(() => {
        fetchAPI(sDateEdited,eDateEdited,fetchConfig)
      }, [sDateEdited,eDateEdited]);
      
    const handleClick = (event, props) => {
      setOffer({ offerName: event.target.parentElement.childNodes[0].innerHTML, offerId: event.target.parentElement.childNodes[1].innerHTML, offerPrice: event.target.parentElement.childNodes[2].lastChild.innerHTML.replace(/(<([^>]+)>)/gi, "").replace(/[a-z]/gi, '').slice(-9)});
      // console.log(this.state.offer);
    }

    let fullOfferName = offer.offerName;
    let fullOfferId = offer.offerId;
    let fullOfferPrice = offer.offerPrice;
    console.log(fullOfferName);
    console.log(fullOfferId);
    console.log(offer);
    console.log(offers);
    // let offerList = offers;
    // console.log(offerList)
    let offerNames = offers.offer_detail;
    console.log(offerNames)

    // static async getInitialProps() {
    //   const res = await fetch('https://staging.bookingadmin.vacayou.com/api/getpackagedetailbyholidayid/96/Oct-17-2021/Oct-17-2021')
    //   const offers = await res.json()
    //   //console.log(offers);
    //   return { offers }
    // }
    // componentWillMount() {
    //   this.setState({
    //     offers: this.props.offers
    //   })
    // }
    return (
      <div className={styles.container}>
      <Head>
        <title>Vacayou – Wellness & Active Travel That Moves You</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
          <Header/>
      </header>
      <main className={styles.main}>
        <section className={styles.tripcontainer} style={{backgroundImage:`url(${offers.package_image} )`}}>
          <div className="container mx-auto sm:px-6 lg:px-8">
            <div className={styles.tripcontainer1}>
              <h2 className="text-center mb-4">{offers.package_name}</h2>
            </div>
          </div>
        </section>
        <section className="date">
            <div className="container mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-rows-1 grid-flow-col gap-4 date-container">
                    <div className="dates">
                        <h3>Available Check-in Dates</h3>
                        <DateRange
                          editableDateInputs={true}
                          onChange={item => setState([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={state}
                        />
                        { offers.status == 1 && offers.offer_detail ? <div>{offerNames.map(o => <div><p key={o.offer_id}>{o.offer_name}</p></div>)}</div> : '' }
                    </div>
                     <div className="offers">
                      <div>
                        { offers.status == 1 && offers.offer_detail ?
                          offerNames.map((od, i) =>
                          <div className="offer-child" onClick={handleClick} key={i}>
                            <p key={i} className="offer-name">{od.offer_name}</p>
                            {/* <span>{od.offer_id}</span> */}
                            {offerNames[i].offer_dates.map((ofd, i) =>
                            <div className="card" key={i}>
                              <p className="flex justify-between items-center" key={i}>
                                <span key={i}>{ofd.start_date} - {ofd.end_date}</span>
                                <span key={i}>${ofd.value} per night</span>
                              </p>
                              
                            </div>
                            )}
                          </div>
                        ): 'Sorry, no offers are available for the Selected Dates'}
                      </div> 
                      {
                         fullOfferName != 0 ?
                        <div className="text-lg leading-7 font-semibold text-center card-btn">
                          <a href="/tripCustomization" className="bookbtn">BOOK NOW</a>
                        </div>
                        : 'Please select an offer'
                      }
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
    );
  }

 

  
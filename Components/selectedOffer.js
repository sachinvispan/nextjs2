import React,{ Component } from "react";
import Image from 'next/image'
import Tick from '../public/images/check.png';

export default class SelectedOffer extends Component {
    static async getInitialProps() {
        const res = await fetch('https://staging.bookingadmin.vacayou.com/api/getpackagedetailbyholidayid/96/Oct-18-2021/Oct-18-2021')
        const offers = await res.json()
        console.log(offers);
        return { offers }
      }
      componentWillMount() {
        this.setState({
          offers: this.props.offers
        })
    }

    render() {
        const offerList = this.state.offers;
        console.log(offerList);
    return (
        <div className="selected-offer">
            <h4>
                Spa Getaway for Two At Award-Winning French Manor Estate
            </h4>
            <div className="sel-offer-info flex items-center">
                <div className="trip-info">
                    <p>Offer</p>
                    <p>Selected Offer</p>                    
                    <p className="travel">Travel Dates</p>
                    <p>Selected</p>
                    {/* <input type="date" id="travel-date" name="travel-date" className="rounded border-2" /> */}
                </div>
                <div className="trip-img">
                    {/* <img src="http://localhost:3000/(https://i.assetzen.net/i/BePPeJxIxDJj/w:1920/h:700/q:90.jpg" /> */}
                </div>
            </div>
            <p className="pckg-info">Included in Your Package:</p>
            <ul>
                <li><Image src={Tick} /> Luxurious accomodations for two in a Signature room with one king size bed</li>
                <li><Image src={Tick} /> A 50-minute Mirbeau Signature Massage per person</li>
                <li><Image src={Tick} /> Special welcome amenity</li>
            </ul>
        </div>
    );
     }
}


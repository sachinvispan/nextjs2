import { useState, useEffect} from 'react';

export default function BookingSummary() {

    const [offValues, setOffValues] = useState();
    
    useEffect(() => {
        setOffValues(JSON.parse(localStorage.getItem('offerVal')));
    }, []);
    console.log(JSON.parse(offValues));
    // let eValues = JSON.parse(values);
    // console.log(eValues);
    // let base_price = +eValues[23];
    // let final_base_price = base_price * 2;
    // let taxes = +eValues[27];
    // let total_price = final_base_price + taxes;
    // console.log(total_price);
    let final_base_price = 1433;
    let taxes = 50;
    let total_price = 1483;
    return (
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
    );
}
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRange } from 'react-date-range';
import {useState,useEffect} from 'react'


export default function DateRange1() {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      var sDate = state[0].startDate;
      var sDateEdited = sDate.toString().replace(/ /g,"-").replace(/.{4}/, '').slice(0, -40);
      console.log(sDateEdited);
      var eDate = state[0].endDate;
      var eDateEdited = eDate.toString().replace(/ /g,"-").replace(/.{4}/, '').slice(0, -40);
      console.log(eDateEdited);
      const fetchConfig = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      };
      
      const fetchAPI = async function getStaticProps() {
        const res = await fetch(`https://staging.bookingadmin.vacayou.com/api/getpackagedetailbyholidayid/96/${sDateEdited}/${eDateEdited}`, fetchConfig)
        const offers = await res.json()
        //console.log(offers);
        return { offers }
      }
      

      useEffect(() => {
        fetchAPI(sDateEdited,eDateEdited,fetchConfig)
        /*fetch(`https://staging.bookingadmin.vacayou.com/api/getpackagedetailbyholidayid/96/${sDateEdited}/${eDateEdited}`, fetchConfig)
          .then(res => res.json());*/
      }, [fetchAPI]);

      /*useEffect(() => {
        getStaticProps(sDateEdited,eDateEdited,fetchConfig);
      }, [])*/

    return(
        <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
        />
    );
}


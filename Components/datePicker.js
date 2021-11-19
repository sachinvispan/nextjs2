import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { Component } from 'react';
import { Calendar } from 'react-date-range';


class DatePicker extends Component {
  handleSelect(date){
    console.log(date); // native Date object
  }
  render(){
    return (
      <Calendar
        date={new Date()}
        onChange={this.handleSelect}
      />
    )
  }
}

export default DatePicker;
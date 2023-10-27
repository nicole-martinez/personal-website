import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import React, { Component } from 'react';
import {useState} from 'react'



class MyCalendar extends Component {
    handleSelect(ranges){
      console.log(ranges);
      // {
      //   selection: {
      //     startDate: [native Date Object],
      //     endDate: [native Date Object],
      //   }
      // }
    }
    render(){
      const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }
      return (
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={this.handleSelect}
        />
      )
    }
  }




  export default MyCalendar;

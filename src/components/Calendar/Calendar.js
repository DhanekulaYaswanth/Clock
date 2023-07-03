import React from 'react';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, addMonths } from 'date-fns';
import './Calendar.css';

class Calendar extends React.Component {
  state = {
    currentMonth: new Date()
  };

  renderMonths(){
    const dateFormat = 'MMMM yyyy';
    return(
      <div>
        <div className="month-display">
          <div className="prev-month" onClick={this.prevMonth}>
            &#8249;
          </div>
          <div className="current-month">
            {format(this.state.currentMonth, dateFormat)}
          </div>
          <div className="next-month" onClick={this.nextMonth}>
            &#8250;
          </div>
        </div>
      </div>
    )
  }


  renderDays() {
    const { currentMonth } = this.state;
    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = endOfWeek(endOfMonth(currentMonth));
  
    const dateFormat = 'd';
    const columns = [];
    let day = startDate;
  
    for (let i = 0; i < 5; i++) {
      const column = [];
      for (let j = 0; j < 7; j++) {
        column.push(
          <div
            className={`day ${!isSameMonth(day, currentMonth) ? 'disabled' : ''} ${isSameDay(day, new Date()) ? 'today' : ''}`}
            key={day}
          >
            {format(day, dateFormat)}
          </div>
        );
        day = addDays(day, 1);
      }
      columns.push(<div className="column" key={i}>{column}</div>);
    }
  
    return <div className="body">{columns}</div>;
  }
  
  

  prevMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, -1)
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        <div className='month'>
          {this.renderMonths()}
        </div>
        <div className='days'>
          <div className='daynames'>
            <div className='dayname'>Sun</div>
            <div className='dayname'>Mon</div>
            <div className='dayname'>Tue</div>
            <div className='dayname'>Wed</div>
            <div className='dayname'>Thu</div>
            <div className='dayname'>Fri</div>
            <div className='dayname'>Sat</div>
          </div>
          <div className='daynumbers'>
            {this.renderDays()}
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;

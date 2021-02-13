import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { filterByText, sortByAmount, sortByDate } from "./actions/filters";

class FilterExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      sortBy: "date",
      startDate: moment(),
      endDate: moment(),
      calenderFocusedInput: null
    };
  }
  onChangeText = e => {
    const text = e.target.value;
    this.setState(() => ({ text }));
    props.dispatch(filterByText(text));
  };

  onChangeSortBy = e => {
    const sortBy = e.target.value;
    this.setState(() => ({ sortBy }));
    if (this.state.sortBy === "amount") {
      props.dispatch(sortByAmount());
    } else if (this.state.sortBy === "date") {
      props.dispatch(sortByDate());
    }
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onFocusChange = calenderFocusedInput => {
    this.setState(() => ({ calenderFocusedInput }));
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="search expenses"
          value={this.state.text}
          onChange={this.onChangeText}
        />
        <select value={this.state.sortBy} onChange={this.onChangeSortBy}>
          <option value="amount">date</option>
          <option value="date">amount</option>
        </select>
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId={uuidv4()}
          endDate={this.state.endDate}
          endDateId={uuidv4()}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocusedInput}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
          numberOfMonths={1}
        />
      </form>
    );
  }
}

export default connect()(FilterExpense);

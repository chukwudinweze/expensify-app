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
      startDate: moment(),
      endDate: moment(),
      calenderFocusedInput: null
    };
  }
  onChangeText = e => {
    const text = e.target.value;
    this.setState(() => ({ text }));
    props.dispatch(filterByText(this.state.text));
  };

  onChangeSortBy = e => {
    const sortBy = e.target.value;
    if (sortBy === "amount") {
      props.dispatch(sortByAmount());
    } else if (sortBy === "date") {
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
        <select
          value={this.props.filters.sortBy}
          onChange={this.onChangeSortBy}
        >
          <option value="date">date</option>
          <option value="amount">amount</option>
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
const mapStateToProps = state => ({ filters: state.filters });
export default connect(mapStateToProps)(FilterExpense);

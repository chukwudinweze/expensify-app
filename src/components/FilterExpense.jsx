import React from "react";
import { connect } from "react-redux";
import { filterByText, sortByAmount, sortByDate } from "./actions/filters";

class FilterExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      sortBy: "date"
    };
  }
  onChangeText = e => {
    const text = e.target.value;
    this.setState(() => ({ text }));
    if (this.state.sortBy === "date") {
      props.dispatch(sortByDate());
    } else if (this.state.sortBy === "amount") {
      props.dispatch(sortByAmount());
    }
  };

  onChangeSortBy = e => {
    const sortBy = e.target.value;
    this.setState(() => ({ sortBy }));
    props.dispatch();
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
          <option value="date">date</option>
          <option value="amount">amount</option>
        </select>
      </form>
    );
  }
}

export default connect()(FilterExpense);

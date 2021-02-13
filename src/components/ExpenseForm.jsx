import React from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      amount: "",
      createdAt: moment(),
      note: "",
      calenderFocused: false,
      error: ""
    };
  }

  onChangeDescription = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onChangeAmount = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount: e.target.value
      }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = focused => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  onChangeNote = e => {
    this.setState(() => ({
      note: e.target.value
    }));
  };

  onSubmitForm = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Description and Amount is required" }));
    } else {
      this.setState(() => ({ error: "" }));
      props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          placeholder="description"
          value={this.state.description}
          onChange={this.onChangeDescription}
        />
        <input
          type="text"
          placeholder="amount"
          value={this.state.amount}
          onChange={this.onChangeAmount}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          id={uuidv4()}
          isOutsideRange={() => false}
          numberOfMonths={1}
        />

        <textarea
          type="text"
          placeholder="note(optional)"
          value={this.state.note}
          onChange={this.onChangeNote}
        />
        <button type="submit">Add Expense</button>
      </form>
    );
  }
}

import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";
import { Link } from "react-router-dom";

class TutorsTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      // content: (tutor) => <Link to={`/tutors/${tutor._id}`}>{tutor.name}</Link>,
      // content: (tutor) => <Link to={`/tutors/${tutor._id}`}>{tutor.name}</Link>,
    },
    { path: "course.name", label: "Course" },
    { path: "level", label: "Level" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "Like",
      content: (tutor) => (
        <Like liked={tutor.liked} onClick={() => this.props.onLike(tutor)} />
      ),
    },
    {
      Buy: "Buy",
      content: (tutor) => (
        <div className="d-flex justify-content-end flex-row ms-5">
          <Link
            to={`/tutors/${tutor._id}`}
            role="button"
            className="btn btn-warning"
          >
            Details
          </Link>
          <button
            onClick={() => this.props.onBuy(tutor)}
            className="btn btn-primary bth-sm ms-3"
          >
            Buy Course
          </button>
        </div>
      ),
    },
  ];
  render() {
    const { tutors, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={tutors}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default TutorsTable;
